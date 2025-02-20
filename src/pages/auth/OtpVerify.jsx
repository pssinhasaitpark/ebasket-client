import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import * as Yup from "yup";
import { signIn } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  otp: Yup.string().when("showOtp", {
    is: true,
    then: Yup.string().required("OTP is required"),
  }),
});

const VerifyOTP = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [email, setEmail] = useState(""); 
  const [otp, setOtp] = useState(""); 
  const [loadingOtp, setLoadingOtp] = useState(false); 
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const sendOTP = async () => {
    setLoadingOtp(true);

    try {
      const response = await axios.post(`http://192.168.0.112:4500/user/reverify`, { email });
    
      if (response.data.message) {
        setShowOtp(true); // Show OTP input field
        toast.success("OTP sent successfully.");
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
      console.error("API Error:", error.response || error.message);
    } finally {
      setLoadingOtp(false);
    }
    
  };

  const verifyOtp = async () => {
    const otpData = {
      email,
      otp,
    };

    try {
      const response = await axios.post(`${BASE_URL}/user/verifyotp`, otpData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);

      console.log('response:', response);
      const user = response.data.username;
      if (response.data.message) {
        toast.success("OTP verified successfully. You are now logged in.");
        navigate("/");
        toast.success("You are Logged In!");
        dispatch(signIn({ username: user }));
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An unexpected error occurred.");
      console.error("API Error:", error);
    }
  };

  return (
    <Container className="col-md-6 mt-3">
      <div className="card p-3">
        <h3>OTP Verification</h3>
        <Form onSubmit={(e) => e.preventDefault()}>
          {/* Email input */}
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </Form.Group>

          {/* OTP input - only visible if OTP is sent */}
          {showOtp && (
            <Form.Group controlId="otp">
              <Form.Label>Enter OTP</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleOtpChange}
                required
              />
            </Form.Group>
          )}

          <Button
            className="mt-3"
            variant="success"
            onClick={showOtp ? verifyOtp : sendOTP}
            disabled={loadingOtp || !email || (showOtp && !otp)}
          >
            {loadingOtp ? "Sending OTP..." : showOtp ? "Verify OTP" : "Send OTP"}
          </Button>
        </Form>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default VerifyOTP;
