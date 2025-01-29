import React, { useState } from "react";
import { Button, Form, Col, Row, Container, Dropdown } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignupForm.css";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  address: Yup.string().required("Address is required"),
  otp: Yup.string().when("showOtp", {
    is: true,
    then: Yup.string().required("OTP is required"),
  }),
});

const SignUpForm = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");

  const navigate = useNavigate();

  const handleCountrySelect = (countryCode) => {
    setSelectedCountryCode(countryCode);
  };

  const sendOTP = async (values, { setSubmitting }) => {
    const userData = {
      fullName: values.fullName,
      phoneNumber: selectedCountryCode + values.phoneNumber,
      email: values.email,
      address: values.address,
    };

    try {
      const response = await axios.post("http://192.168.0.111:3001/user/signup", userData);

      if (response.data.message) {
        setShowOtp(true);
        toast.success("OTP sent successfully.");
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while signing up. Please try again.");
      console.error("API Error:", error.response || error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const verifyOtp = async (values) => {
    const otpData = { otp };

    try {
      const response = await axios.post("http://192.168.0.111:3001/user/verifyotp", otpData);

      if (response.data.message) {
        toast.success("OTP verified successfully. You are now signed up!");
        navigate("/home");
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while verifying OTP. Please try again.");
      console.error("API Error:", error.response || error.message);
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const resendOtp = async (values) => {
    const userData = {
      fullName: values.fullName,
      phoneNumber: selectedCountryCode + values.phoneNumber,
      email: values.email,
      address: values.address,
    };

    try {
      const response = await axios.post("http://192.168.0.111:3001/user/verifyotp", userData);

      if (response.data.message) {
        toast.success("OTP resent successfully.");
        navigate("/home");
      } else {
        toast.error("Failed to resend OTP. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while resending OTP. Please try again.");
      console.error("API Error:", error.response || error.message);
    }
  };

  return (
    <Container className="col-md-6 mt-3">
      <div className="col-10 mx-auto card p-3">
        <h3 className="text-dark my-0 mb-3">Sign up With Us</h3>
        <p className="text-50">Sign up to continue</p>

        <Formik
          initialValues={{
            fullName: "",
            phoneNumber: "",
            email: "",
            address: "",
            otp: "",
          }}
          validationSchema={validationSchema}
          onSubmit={sendOTP}
          validateOnChange={true}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              {!showOtp && (
                <>
                  <Form.Group controlId="fullName">
                    <Form.Label className="text-dark mt-3 input_heading">Full Name</Form.Label>
                    <Form.Control
                      className="border-0 inputes-box"
                      type="text"
                      placeholder="Insert Full Name"
                      value={values.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.fullName && errors.fullName}
                      required
                    />
                    <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="phoneNumber">
                    <Form.Label className="text-dark mt-2 input_heading">Phone</Form.Label>
                    <Row className="align-items-center">
                      <Col xs={4}>
                        <Dropdown>
                          <Dropdown.Toggle className="bg-transparent border-0 input_heading inputes-box">
                            {selectedCountryCode}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleCountrySelect("+1")}>USA (+1)</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCountrySelect("+44")}>UK (+44)</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCountrySelect("+91")}>India (+91)</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>

                      <Col className="mt-3">
                        <Form.Control
                          className="border-0 inputes-box"
                          type="text"
                          placeholder="Phone Number"
                          name="phoneNumber"
                          value={values.phoneNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={touched.phoneNumber && errors.phoneNumber}
                          required
                        />
                        <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback>
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label className="text-dark mt-3 input_heading">Email</Form.Label>
                    <Form.Control
                      className="border-0 inputes-box"
                      type="email"
                      placeholder="Insert Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.email && errors.email}
                      required
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="address">
                    <Form.Label className="text-dark mt-3 p-2 input_heading">Address</Form.Label>
                    <div className="position-relative">
                      <Form.Control
                        className="p-3 address_input"
                        type="text"
                        placeholder="Insert Address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.address && errors.address}
                        required
                      />
                      <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                    </div>
                  </Form.Group>
                </>
              )}

              {showOtp && (
                <Form.Group controlId="otp">
                  <Form.Label className="text-dark mt-3 p-2 input_heading">OTP</Form.Label>
                  <Form.Control
                    className="border-0 inputes-box"
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={handleOtpChange}
                    isInvalid={touched.otp && errors.otp}
                  />
                  <Form.Control.Feedback type="invalid">{errors.otp}</Form.Control.Feedback>
                </Form.Group>
              )}

              {!showOtp ? (
                <Button
                  className="w-100 btn-lg p-3 send_Otp_button"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Send OTP
                </Button>
              ) : (
                <div>
                  <Button
                    className="w-100 btn-lg p-3 send_Otp_button"
                    type="button"
                    onClick={() => verifyOtp(values)}
                    disabled={isSubmitting}
                  >
                    Verify OTP
                  </Button>
                  <Button
                    className="w-100 btn-lg p-3 send_Otp_button"
                    type="button"
                    onClick={() => resendOtp(values)}
                    disabled={isSubmitting}
                  >
                    Resend OTP
                  </Button>
                </div>
              )}

              <div className="new-acc d-flex align-items-center justify-content-center mt-4 mb-3">
                <a href="/login">
                  <p className="text-center m-0">Already an account? SIGN IN</p>
                </a>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Toast container to show success/error messages */}
      <ToastContainer />
    </Container>
  );
};

export default SignUpForm;
