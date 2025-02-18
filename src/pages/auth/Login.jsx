import React, { useState } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
  Dropdown,
  Alert,
} from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios"; 
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch , useSelector} from 'react-redux';
import { signIn, signUp } from '../../store/slices/authSlice';


const BASE_URL = process.env.REACT_APP_BASE_URL;

const validationSchema = Yup.object({
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
});

const Login = () => {
  const [country, setCountry] = useState("+91");
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const naviagte=useNavigate()

  const handleCountrySelect = (countryCode) => {
    setCountry(countryCode);
  };



  const sendOTP = async (values, { setSubmitting }) => {
    const userData = {
      phoneNumber: country + values.phoneNumber,
      email: values.email,
    };

    try {
      const response = await axios.post(`${BASE_URL}/user/signin`, userData);
      console.log("resss",response)
      if (response.data.message) {

        setIsOtpVisible(true);
       toast.success("OTP sent successfully.");
        console.log("API Response:", response.data);
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      
      toast.error(error.response.data.message);
      console.error("API Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const verifyOtp = async () => {
    const otpData = {
      // phoneNumber: country + values.phoneNumber,
      otp: otp,
      
    };
    try {
      const response = await axios.post(`${BASE_URL}/user/verifyotp`, otpData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);

      
      console.log('reponse--', response);
      const user = response.data.username;
      if (response.data.message) {
        toast.success("OTP verified successfully. You are now logged in.");
    
        naviagte("/");
        toast.success("You are LoggedIn !!!!!!!")
        
        dispatch(signIn({ username: user }));
        
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.error("API Error:", error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6} className="login_page">
          <Card className="p-3">
            <h3 className="text-dark mb-3">Login</h3>
            <p className="text-muted">Sign in to continue</p>

            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            {!isOtpVisible && (
              <Formik
                initialValues={{
                  phoneNumber: "",
                  email: "",
                }}
                validationSchema={validationSchema}
                onSubmit={sendOTP}
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
                  <Form onSubmit={handleSubmit} id="login-with-phone-box">
                   
                    <Form.Group controlId="phoneNumber">
                      <Form.Label className="text-dark mt-2 input_heading">Phone</Form.Label>
                      <Row className="align-items-center">
                        <Col xs={5}>
                          <Dropdown>
                            <Dropdown.Toggle className="bg-transparent border-0 input_heading inputes-box">
                              {country}
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
                      <Form.Label className="text-dark mt-2 input_heading">Email</Form.Label>
                      <Form.Control
                        className="border-0 inputes-box"
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.email && errors.email}
                        required
                      />
                      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>

                   
                    <div className="d-flex justify-content-center btnn-colors p-3 mt-4">
                      <Button
                        className="border-0 bg-transparent text-white btnn-colors w-100 text-uppercase"
                        type="submit"
                        id="sendotp_btn"
                        disabled={isSubmitting}
                      >
                        Send OTP
                      </Button>
                    </div>

                   
                    <div className="or-line mt-3">
                      <span>OR</span>
                    </div>

                   
                    <div className="d-flex justify-content-center btnn-colors mt-5 mb-4 p-3">
                      <a
                        href="/signup"
                        className="btn text-white w-100 text-uppercase"
                      >
                        SIGN UP
                      </a>
                    </div>
                  </Form>
                )}
              </Formik>
            )}

           
            {isOtpVisible && 
            (
              <div className="mt-4">
                <h5>Enter OTP</h5>
                <Form.Control
                   className="border-0 inputes-box"
                  type="text"
                  placeholder="Enter OTP"
                  // className="mt-3"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <div className="d-flex justify-content-center btnn-colors p-1 mt-4">
                  <Button
                    className="border-0 bg-transparent text-white btnn-colors w-100 text-uppercase"
                    onClick={verifyOtp}
                  >
                    Verify OTP
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </Col>
      </Row>
       <ToastContainer />
    </Container>
  );
};

export default Login;
