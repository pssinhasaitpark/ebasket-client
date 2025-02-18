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
  address: Yup.string().required("Address is required"),
  otp: Yup.string().when("showOtp", {
    is: true,
    then: Yup.string().required("OTP is required"),
  }),
});

const VerifyOTP = () => {
  const [email, setEmail] = useState(""); 
  const [loadingOtp, setLoadingOtp] = useState(false); 
  const [emailExists, setEmailExists] = useState(false); 
  const [isOtpVisible,setIsOtpVisible] = useState(false)
  const dispatch = useDispatch();
  const naviagte=useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const sendOTP = async (values) => {
    const userData = {
      // phoneNumber: country + values.phoneNumber,
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
    } 
  };

  const verifyOtp = async () => {
    const otpData = {
      // phoneNumber: country + values.phoneNumber,
      // otp: otp,
      
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
    <Container className="col-md-6 mt-3">
      <div className="card p-3">
        <h3>OTP Verification</h3>
        <Form >
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
            variant="success"
            onClick={sendOTP}
            disabled={loadingOtp || !email }
          >
            {loadingOtp ? "Sending OTP..." : "Send OTP"}
          </Button>
        </Form>
      </div>
      <ToastContainer /> 
    </Container>
  );
};

export default VerifyOTP;

