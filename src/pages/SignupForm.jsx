import React, { useState } from "react";
import {
  Button,
  Form,
  Col,
  Row,
  Container,
  Alert,
  Accordion,
  Dropdown,
} from "react-bootstrap";
import "./SignupForm.css";

const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const sendOTP = () => {
    setShowOtp(true);
  };

  return (
    <>
    <Container className="col-md-6 mt-3">
      <div className="col-10 mx-auto card p-3">
        <h3 className="text-dark my-0 mb-3">Sign up With Us</h3>
        <p className="text-50">Sign up to continue</p>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="fullName">
            <Form.Label className="text-dark mt-3 input_heading">
              Full Name
            </Form.Label>
            <Form.Control
              className="border-0 inputes-box"
              type="text"
              placeholder="Insert Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="phoneNumber">
            <Form.Label className="text-dark mt-2 input_heading">
              Phone
            </Form.Label>
            <Row className="align-items-center">
              <Col xs={5}>
                <Dropdown className="">
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
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required
                />
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="businessAddress ">
            <Form.Label className="text-dark mt-3 p-2 input_heading">
              Address
            </Form.Label>
            <div className="position-relative">
              <Form.Control
                className="p-3 address_input"
                type="text"
                placeholder="Insert Address"
                value={businessAddress}
                onChange={(e) => setBusinessAddress(e.target.value)}
                required
              />
              <span class="locate-me" onclick="getCurrentLocation()">
                <img src="https://emartweb.siswebapp.com/img/locatleme-icon.png" />
                Locate Me
              </span>
            </div>
          </Form.Group>

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

          <div id="recaptcha-container"></div>

          {!showOtp ? (
            <Button
              className="w-100 btn-lg p-3 send_Otp_button"
              type="button"
              onClick={sendOTP}
            >
              Send OTP
            </Button>
          ) : (
            <div>
              <Button
                className="w-100 btn-lg p-3 send_Otp_button"
                type="button"
                id="verify_btn"
              >
                OTP Verify
              </Button>
              <Button
                className="w-100 btn-lg p-3 send_Otp_button"
                type="button"
                id="resend-code"
                onClick={sendOTP}
              >
                Resend OTP
              </Button>
            </div>
          )}
        </Form>
      </div>

      <div className="new-acc d-flex align-items-center justify-content-center mt-4 mb-3">
        <a href="https://ebasketweb.siswebapp.com/login">
          <p className="text-center m-0">Already an account? SIGN IN</p>
        </a>
      </div>
    </Container>
    </>
  );
};

export default SignUpForm;
