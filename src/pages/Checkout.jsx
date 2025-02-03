import React , { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import {
  FaMinus,
  FaPlus,
  FaTimes,
  FaPercent,
  FaArrowRight,
  FaClock,
} from "react-icons/fa";
import './Checkout.css'
import discountImg from '../asset/images/discountss.png'

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [deliveryCharges, setDeliveryCharges] = useState(0); 
  const [finalAmount, setFinalAmount] = useState(0);
  
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    let total = 0;
    let discount = 0;

    cart.forEach((item) => {
      const itemPrice = item.itemDetails.price * item.quantity; 
      const itemDiscount = ((item.itemDetails.discount / 100) * item.itemDetails.price) * item.quantity || 0; 

      total += itemPrice;
      discount += itemDiscount;
    });

    const discountedPrice = total - discount;
    const finalAmount = discountedPrice; 

    setTotalPrice(total);
    setTotalDiscount(discount);
    setFinalAmount(finalAmount);
  }, [cart, deliveryCharges]);

  const CGST =  totalPrice * 0.05;
  const GST = 10;
  const TotalAmount = finalAmount + CGST + GST + deliveryCharges;


  // Log the cart details for debugging
  useEffect(() => {
    console.log("Cart Products: ", cart);
  }, [cart]);

  // Handle increment of product quantity in the cart
  const handleIncrement = (productId) => {
    const updatedCart = cart.map((item) =>
      item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Handle decrement of product quantity in the cart
  const handleDecrement = (productId) => {
    const updatedCart = cart.map((item) =>
      item._id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Handle removal of a product from the cart
  const handleRemoveItem = (productId) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate the total quantity of products in the cart
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="rajj-checkout">
      <Container className="position-relative">
        <Row className="py-5">
          <Col md={8} className="mb-3 checkout-left">
            <div className="checkout-left-inner">
              <div className="rajj-cart-item mb-4 rounded shadow-sm bg-white checkout-left-box border">
                <div className="rajj-cart-item-profile p-3">
                  <div className="d-flex flex-column">
                    <div className="chec-out-header  justify-content-between d-flex mb-3">
                      <div className="chec-out-title">
                        <h6 className="mb-0 font-weight-bold pb-1">
                          Delivery Address
                        </h6>
                        <span className="delivery_par">You have a saved address in this location</span>
                      </div>
                      <Button
                        variant="link"
                        href="https://ebasketweb.siswebapp.com/delivery-address"
                        className="ml-auto font-weight-bold text-"
                      >
                        Change
                      </Button>
                    </div>
                    <div className="row">
                      <div
                        className="custom-control col-lg-12 mb-3 position-relative"
                        id="address_box"
                      >
                        <div className="addres-innerbox">
                          <div className="p-3 w-100">
                            <div className="d-flex align-items-center mb-2">
                              <h6 className="mb-0 pb-1">Address</h6>
                            </div>
                            <p className="text-dark m-0" id="line_1">
                              Indore
                            </p>
                            <p className="text-dark m-0" id="line_2">
                              Bhanwarkua Square, Indrapuri Colony, Bhanwar Kuwa,
                              Indore, Madhya Pradesh 452001
                            </p>
                            <input type="text" id="addressId" hidden />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      id="add_address"
                      variant="primary"
                      href="#"
                      data-toggle="modal"
                      data-target="#locationModalAddress"
                      style={{ display: "none" }}
                    >
                      ADD NEW ADDRESS
                    </Button>
                  </div>
                </div>
              </div>

              <Accordion className="mb-3 rounded shadow-sm bg-white checkout-left-box border" id="accordionExample">
                <Card className="rajj-card border-bottom overflow-hidden">
                  <Card.Header id="headingTwo">
                    <h6 className="mb-2 ml-3 mt-3">Select Payment Option</h6>
                  </Card.Header>
                </Card>
                <div className="rajj-card overflow-hidden checkout-payment-options p-2">
            
                  <div className="custom-control custom-radio border-bottom py-2" id="razorpay_box">
                    <Form.Check
                      type="radio"
                      label="Razorpay"
                      name="payment_method"
                      id="razorpay"
                      value="RazorPay"
                      checked
                    />
                    <input type="hidden"  value="true" />
                   
                  </div>
                 
                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="Stripe"
                      name="payment_method"
                      id="stripe"
                      value="Stripe"
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>

                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="Stripe"
                      name="payment_method"
                      id="stripe"
                      value="Stripe"
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>

                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="Stripe"
                      name="payment_method"
                      id="stripe"
                      value="Stripe"
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>

                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="Stripe"
                      name="payment_method"
                      id="stripe"
                      value="Stripe"
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>

                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="Stripe"
                      name="payment_method"
                      id="stripe"
                      value="Stripe"
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>

                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="Stripe"
                      name="payment_method"
                      id="stripe"
                      value="Stripe"
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>

                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="Stripe"
                      name="payment_method"
                      id="stripe"
                      value="Stripe"
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>

                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="Stripe"
                      name="payment_method"
                      id="stripe"
                      value="Stripe"
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>

                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="Stripe"
                      name="payment_method"
                      id="stripe"
                      value="Stripe"
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>

                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="Stripe"
                      name="payment_method"
                      id="stripe"
                      value="Stripe"
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>
                </div>
              </Accordion>

              <div className="add-note" id="coupon-div">
                <h3>Available Coupon</h3>
                <div className="foodies-detail-coupon">
                  <div id="coupon_list">
                    <div className="copupon-list">
                      <ul>
                        <li
                          className="coupon_code_list d-flex flex-column"
                          data-code="OFFER15"
                          value="OFFER15"
                        >
                          <div className="d-flex">
                          <img src={discountImg} alt="" height="20px" width="20px"/>
                          <span className="per-off">15% OFF</span>
                          </div>
                          <span>OFFER15 | Valid till 2025-06-13</span>
                        </li>
                        <li
                          className="coupon_code_list d-flex flex-column"
                          data-code="MEGA20"
                          value="MEGA20"
                        >
                          <div className="d-flex">
                          <img src={discountImg} alt="" height="20px" width="20px"/>
                          <span className="per-off">20% OFF</span>
                          </div>
                          <span>MEGA20 | Valid till 2025-12-31</span>
                        </li>
                        <li
                          className="coupon_code_list d-flex flex-column"
                          data-code="ENJOY30"
                          value="ENJOY30"
                        >
                          <div className="d-flex">
                          <img src={discountImg} alt="" height="20px" width="20px"/>
                          <span className="per-off">30% OFF</span>
                          </div>
                          <span>ENJOY30 | Valid till 2025-12-31</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col md={4}>
          <div className="rajj-cart-item rounded shadow-sm overflow-hidden bg-white sticky_sidebar" id="cart_list">
              <div className="sidebar-header p-3">
                <h3 className="font-weight-bold h6 w-100">Cart</h3>
              </div>

  {/* item-starts   */}
              <div className="bg-white p-3 sidebar-item-list">
                <h6 className="pb-3">Items</h6>
                <div >
               

<div className="product-item gold-members row align-items-center py-2  mb-2 rounded-lg m-0" id="item_669de52f3449f">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item._id} className="d-flex w-100 media align-items-center col-md-6 mb-2 border checkout-added-products">
              <img
                src= {`http://192.168.0.111:3001${item.itemDetails.mediaFiles[0]?.url}`}
                className="img-responsive img-rounded order-img"
                style={{ maxHeight: '40px', maxWidth: '25px' }}
                alt="product"
              />
              <div className="media-body">
                <div className="m-0 product-name">{item.itemDetails.name}</div>
              </div>
              <div className="d-flex align-items-center count-number-box col-md-5">
                    <span className="count-number float-right">
                      <Button variant="outline-secondary" size="sm" className="dec" onClick={() => handleDecrement(item._id)}>
                        <FaMinus className="decreased-button"/>
                      </Button>
                      <span className="particular-product-quantity">{item.quantity}</span>
                      <Button variant="outline-secondary" size="sm" className="inc" onClick={() => handleIncrement(item._id)}>
                        <FaPlus className="increased-button"/>
                      </Button>
                    </span>
                    <p className="text-gray mb-0 float-right ml-3 text-muted small">
                      <span className="currency-symbol-left">$</span>
                      <span className="cart_iteam_total_669de52f3449f">{item.itemDetails.price * item.quantity}</span>
                    </p>
              
              </div>
              <div className="close remove_item col-md-1 remove-button">
                    <FaTimes onClick={() => handleRemoveItem(item._id)} />
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>  

           
                  

          
                  
                </div>
              </div>

      
              <div className="bg-white px-3 clearfix">
  <div className="pb-3">
    <div className="inputss-group input-group-sm mb-2 d-flex">
      <input
        type="text"
        className="form-control"
        id="coupon_code"
        placeholder="Enter Promo Code"
      />
      <div className="input-group-append">
        <button className="btn btn-success" id="apply-coupon-code">
         %Apply
        </button>
      </div>
    </div>
  </div>
</div>



              <div className="bg-white px-3 clearfix">
                <div className="border-bottom pb-3">
                  <FaClock className="mr-2" />
                  Delivery in 6 hour 43 minutes
                </div>
              </div>

        {/* totaling */}
              <div className="bg-white p-3 clearfix btm-total">
                <p className="mb-2">
                  Sub Total
                  <span className="float-right">
                    <span className="currency-symbol-left">$</span>
                    {totalPrice}
                  </span>
                </p>
                <hr />
                <p className="mb-2">
                  CGST (5%)
                  <span className="float-right text-dark">
                    <span className="currency-symbol-left">$</span>
                    {CGST}
                  </span>
                </p>
                <p className="mb-2">
                  GST ( $ 10.00 )
                  <span className="float-right text-dark">
                    <span className="currency-symbol-left">$</span>
                    10.00
                  </span>
                </p>
                <hr />
                <p className="mb-2">
                  Delivery Charge
                  <span className="float-right text-dark">
                    <span className="currency-symbol-left">$</span>
                      0                  
                  </span>
                </p>
                <hr />
                <h6 className="font-weight-boldss mb-0">
                  Total
                  <p className="float-right">
                    <span className="currency-symbol-left">$</span>
                    {TotalAmount}
                  </p>
                </h6>
              </div>

           
              <div className="p-3 text-center">
                <Button  block size="lg" className="pay_now_buttons border-0 text-center">
                  Pay <span className="currency-symbol-left">$</span>{TotalAmount}<FaArrowRight />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
