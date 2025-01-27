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
} from "react-bootstrap";
import "./Login.css";
// import { Select } from 'react-select';

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [country, setCountry] = useState("+93(Afghanistan)");
  const [isOtpVisible, setIsOtpVisible] = useState(false);

  const sendOTP = () => {
    setIsOtpVisible(true);
  };

  const applicationVerifier = () => {};

  return (
    <Container className="">
      <Row className="justify-content-center mt-5 ">
        <Col md={6}>
          <Card className="p-3">
            <h3 className="text-dark mb-3">Login</h3>
            <p className="text-muted">Sign in to continue</p>
            <div className="error" id="error"></div>

            <Form id="login-with-phone-box">
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
                      // value={mobileNumber}
                      // onChange={(e) => setMobileNumber(e.target.value)}
                      required
                    />
                  </Col>
                </Row>
              </Form.Group>

              <div
                className="error text-center font-weight-bold"
                id="password_required_new"
              ></div>

              <div className="d-flex justify-content-center btnn-colors p-1 mt-4">
                <Button
                  className="border-0 bg-transparent text-white btnn-colors w-100 text-uppercase"
                  onClick={sendOTP}
                  id="sendotp_btn"
                >
                  Send OTP
                </Button>
              </div>

              <div className="or-line mt-3">
                <span>OR</span>
              </div>

              <div className="d-flex justify-content-center btnn-colors mt-5 ">
                <a
                  href="https://ebasketweb.siswebapp.com/signup"
                  className="p-2 btn text-white w-100 text-uppercase"
                >
                  SIGN UP
                </a>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
