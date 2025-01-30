import React, { useState } from "react";
import { Container, Row, Col, Card, Accordion, Form, Button, InputGroup } from 'react-bootstrap';
import { FaMinus, FaPlus, FaPercent, FaArrowRight } from 'react-icons/fa';
import './Checkout.css'


const Checkout = () => {
  const [totalAmount, setTotalAmount] = useState(1179.21);

  const applyCoupon = () => {
    // Apply coupon logic here
  };

  const finalCheckout = () => {
    // Final checkout logic here
  };

  return (
    <>
    <div className="rajj-checkout">
      <Container className="position-relative">
        <Row className="py-5">
          <Col md={8} className="mb-3 checkout-left">
            <Card className="mb-4 rounded shadow-sm bg-white checkout-left-box border">
              <Card.Body className="raj-cart-item">
                <div className="d-flex justify-content-between mb-3 raj-cart-item-profile">
                  <div>
                    <h6 className="mb-0 font-weight-bold">Delivery Address</h6>
                    <span>You have a saved address in this location</span>
                  </div>
                  <Button
                    variant="link"
                    href="https://ebasketweb.siswebapp.com/delivery-address"
                  >
                    Change
                  </Button>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="p-3">
                      <h6 className="mb-0">Address</h6>
                      <p className="text-dark m-0">
                        PQ3R+XX Indore, Madhya Pradesh, India
                      </p>
                      <Button
                        variant="primary"
                        href="#"
                        style={{ display: "none" }}
                      >
                        ADD NEW ADDRESS
                      </Button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Accordion defaultActiveKey="0" className="mb-3 rounded shadow-sm bg-white checkout-left-box border">
  <Card className="border-bottom">
    <Accordion.Header>
      <h6 className="mb-2">Select Payment Option</h6>
    </Accordion.Header>
    <Accordion.Body>
      <div className="checkout-payment-options">
        {[
          "RazorPay",
          "Stripe",
          "PayPal",
          "PayFast",
          "PayStack",
          "FlutterWave",
          "MercadoPago",
          "Xendit",
          "Midtrans",
          "OrangePay",
          "Cash On Delivery",
          "Wallet",
        ].map((paymentMethod, index) => (
          <Form.Check
            key={index}
            type="radio"
            label={paymentMethod}
            name="payment_method"
            id={paymentMethod.toLowerCase()}
          />
        ))}
      </div>
    </Accordion.Body>
  </Card>
</Accordion>

            <div className="add-note" id="coupon-div">
              <h3>Available Coupon</h3>
              <div className="foodies-detail-coupon">
                <ul>
                  <li>15% OFF | OFFER15 | Valid till 2025-06-13</li>
                  <li>20% OFF | MEGA20 | Valid till 2025-12-31</li>
                  <li>30% OFF | ENJOY30 | Valid till 2025-12-31</li>
                </ul>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <Card className="rounded shadow-sm overflow-hidden bg-white sticky_sidebar">
              <Card.Header>
                <h3 className="font-weight-bold h6">Cart</h3>
              </Card.Header>
             
<Card.Body>
  <h6 className="pb-3">Items</h6>
  <div className="product-item row align-items-center py-2 border mb-2 rounded-lg m-0">
    <div className="col-md-6 d-flex align-items-center">
      <img
        src="https://via.placeholder.com/40"
        alt="product"
        className="img-responsive img-rounded"
      />
      <div className="ml-3">HIGH-PROTEIN FLOUR</div>
    </div>
    <div className="col-md-6 d-flex justify-content-between">
      <div className="count-number">
        <Button variant="outline-secondary" className="btn-sm">
          <FaMinus />
        </Button>
        
        <input
          type="text"
          className="count-number-input"
          value="1"
          readOnly
        />
        
        <Button variant="outline-secondary" className="btn-sm">
          <FaPlus />
        </Button>
      </div>
      <p className="text-muted small">$153.00</p>
    </div>
  </div>
  
  <div className="input-group-sm mb-2">
    <InputGroup>
      <Form.Control placeholder="Enter Promo Code" />
      <InputGroup.Text>
        <Button variant="primary" onClick={applyCoupon}>
          <FaPercent /> Apply
        </Button>
      </InputGroup.Text>
    </InputGroup>
  </div>
</Card.Body>

              <Card.Footer>
                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>${153.0}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>CGST (5%)</span>
                  <span>${7.65}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>GST</span>
                  <span>${10.0}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Delivery Charge</span>
                  <span>${1008.56} (336.19Km)</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between font-weight-bold">
                  <span>Total</span>
                  <span>${totalAmount}</span>
                </div>
                <Button
                  variant="primary"
                  block
                  className="btn-lg"
                  onClick={finalCheckout}
                >
                  Pay ${totalAmount.toFixed(2)} <FaArrowRight />{" "}
             
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Checkout;
