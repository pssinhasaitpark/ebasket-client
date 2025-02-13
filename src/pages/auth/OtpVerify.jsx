import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import * as Yup from "yup";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const validationSchema = Yup.object({
 
  email: Yup.string().email("Invalid email address").required("Email is required"),
  address: Yup.string().required("Address is required"),
  otp: Yup.string().when("showOtp", {
    is: true,
    then: Yup.string().required("OTP is required"),
  }),
});

const SignUpWithOTP = () => {
  const [email, setEmail] = useState(""); 
  const [loadingOtp, setLoadingOtp] = useState(false); 
  const [emailExists, setEmailExists] = useState(false); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const checkEmailExists = async (email) => {
    try {
      const response = await axios.post(`${BASE_URL}/check-email-existence`, { email });
      if (response.data.exists) {
        setEmailExists(true); 
        return true;
      } else {
        setEmailExists(false); 
        toast.error("Email does not exist. Please sign up!");
        return false;
      }
    } catch (error) {
      toast.error("Error checking email. Please try again later.");
      return false;
    }
  };

  
  const sendOTP = async () => {
    if (await checkEmailExists(email)) {
      setLoadingOtp(true);

      try {
        const response = await axios.post(`${BASE_URL}/send-otp`, { email });
        if (response.data.success) {
          toast.success("OTP sent successfully!");
        } else {
          toast.error("Failed to send OTP. Please try again.");
        }
      } catch (error) {
        toast.error("Error sending OTP. Please try again later.");
      } finally {
        setLoadingOtp(false); 
      }
    }
  };

  return (
    <Container className="col-md-6 mt-3">
      <div className="card p-3">
        <h3>OTP Verification</h3>
        <Form>
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

          <Button
            className="mt-3"
            variant="primary"
            onClick={sendOTP}
            disabled={loadingOtp || !email}
          >
            {loadingOtp ? "Sending OTP..." : "Send OTP"}
          </Button>
        </Form>
      </div>
      <ToastContainer /> 
    </Container>
  );
};

export default SignUpWithOTP;
