import React, { useState } from "react";
import { Button, Form, Col, Row, Container, Alert, Dropdown } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

import axios from "axios";
import "./SignupForm.css";

const SignUpForm = () => {
  const [error, setError] = useState(null);
  const [showOtp, setShowOtp] = useState(false); 
  const [otp, setOtp] = useState(""); 

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be minimum 2 characters")
      .max(100, "Name must not be more than 100 characters")
      .required("Name is required"),
    country: Yup.string()
      .required("Country is required"),  
    mobile: Yup.string()
      .min(10, "Phone number must be minimum 10 digits")
      .required("Mobile no is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    address: Yup.string()
      .required("Address is required"),  
  });

  // console.log("Gokul Ji");
  

  const handleSubmit = async (values) => {
    console.log("Submitting the form..."); 
    console.log("rajveer")
    try {
      const response = await axios.post(
        "http://localhost:3001/user/signup", 
        {
          name: values.name,
          mobile: values.mobile,
          email: values.email,
          address: values.address,
        }
      );
      console.log("Registration success", response);
    } catch (error) {
      console.error("Error in registration", error);
      setError("Registration failed. Please try again.");
    }
  };


  // console.log("Shyammmm");
  

  const sendOTP = () => {
    console.log("OTP sent");
    setShowOtp(true); 
  };

  return (
    <Container className="col-md-6 mt-3">
      <div className="col-10 mx-auto card p-3">
        <h3 className="text-dark my-0 mb-3">Sign up With Us</h3>
        <p className="text-50">Sign up to continue</p>

        {error && <Alert variant="danger">{error}</Alert>}
    
        <Formik
          initialValues={{
            name: "",
            mobile: "",
            email: "",
            address: "",
            // country: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            errors,
          }) => (
            <Form >
              {!showOtp && (
                <>
                  <Form.Group controlId="fullName">
                    <Form.Label className="text-dark mt-3 input_heading">
                      Full Name
                    </Form.Label>
                    <Form.Control
                      className="border-0 inputes-box"
                      type="text"
                      placeholder="Insert Full Name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.name && errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* <Form.Group controlId="country">
                    <Form.Label className="text-dark mt-3 input_heading">
                      Country
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.country && errors.country}
                    >
                      <option value="">Select Country</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="India">India</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.country}
                    </Form.Control.Feedback>
                  </Form.Group> */}

                  <Form.Group controlId="phoneNumber">
                    <Form.Label className="text-dark mt-2 input_heading">
                      Phone
                    </Form.Label>
                    <Row className="align-items-center">
                      <Col xs={5}>
                        <Dropdown>
                          <Dropdown.Toggle className="bg-transparent border-0 input_heading inputes-box">
                            Select Country
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item value="+1">USA (+1)</Dropdown.Item>
                            <Dropdown.Item value="+44">UK (+44)</Dropdown.Item>
                            <Dropdown.Item value="+91">India (+91)</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>

                      <Col className="mt-3">
                        <Form.Control
                          className="border-0 inputes-box"
                          type="text"
                          placeholder="Phone Number"
                          name="mobile"
                          value={values.mobile}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={touched.mobile && errors.mobile}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.mobile}
                        </Form.Control.Feedback>
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label className="text-dark mt-3 input_heading">
                      Email
                    </Form.Label>
                    <Form.Control
                      className="border-0 inputes-box"
                      type="email"
                      placeholder="Insert Email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.email && errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="businessAddress">
                    <Form.Label className="text-dark mt-3 p-2 input_heading">
                      Address
                    </Form.Label>
                    <div className="position-relative">
                      <Form.Control
                        className="p-3 address_input"
                        type="text"
                        placeholder="Insert Address"
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.address && errors.address}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.address}
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>

                  <Button
                    className="w-100 btn-lg p-3 send_Otp_button"
                    type="submit"
                    // onClick={sendOTP}
                  >
                    Send OTP
                  </Button>
                </>
              )}

              {showOtp && (
                <Form.Group controlId="verificationCode">
                  <Form.Label className="text-dark mt-3 p-2 input_heading">
                    OTP
                  </Form.Label>
                  <Form.Control
                    className="border-0 inputes-box"
                    type="text"
                    placeholder="OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </Form.Group>
              )}
            </Form>
          )}
        </Formik>
      </div>

      <div className="new-acc d-flex align-items-center justify-content-center mt-4 mb-3">
        <a href="#">
          <p className="text-center m-0">Already have an account? SIGN IN</p>
        </a>
      </div>
    </Container>
  );
};

export default SignUpForm;
