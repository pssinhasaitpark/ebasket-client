import React , { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  Button,
  Form,
  Badge,
  Image,
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
import { ImCopy } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { getCoupons } from '../../store/slices/coupons.slice';
import discountImg from '../../asset/images/discount-icon.png'
import useCreateOrder from "../../component/CreateOrder";
import axios from 'axios';
import { fetchUserMe } from '../../store/slices/usermeSlice';
import { fetchAddresses } from '../../store/slices/addressSlice';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Checkout = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [order_username, setorder_username] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [deliveryCharges, setDeliveryCharges] = useState(0); 
  const [finalAmount, setFinalAmount] = useState(0);
  const [SelectedVariant, setSelectedVariant] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Razorpay'); 
  const { coupons } = useSelector((state) => state.coupons);
  const dispatch = useDispatch();
  const [CGST, setCGST] = useState(0); 
  const [GST, setGST] = useState(0); 
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const { createOrder } = useCreateOrder(); 
  const [userData, setUserData] = useState({});
  const { addresses } = useSelector((state) => state.addresses);

  
  useEffect(() => {
    dispatch(getCoupons());
    dispatch(fetchUserMe());
    dispatch(fetchAddresses());
  }, [dispatch]);
  

  // useEffect(() => {
  //   const order_user = JSON.parse(localStorage.getItem("username"));
  //   if (order_user) {
  //     setorder_username(order_user);
  //   }
  // }, []);
//  useEffect(() => {
//     dispatch(fetchUserMe() , fetchAddresses());
//   }, [dispatch]);

const selectedAddress = addresses?.addresses?.length > 0 ? addresses?.addresses?.[0]?.address?.areaSectorLocality : userData?.address;
{console.log('Lodu',selectedAddress);
}

  useEffect(() => {
    fetchUserData();
}, []);

const fetchUserData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/user/me`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
        });
        setUserData(response.data.user); // Assuming the response contains a user object
        setLoading(false);
    } catch (err) {
        setError('Failed to fetch user data');
        setLoading(false);
    }
};

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCouponCode(code);
  };


  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };
  
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }

    const storedVariant = localStorage.getItem('selectedVariant');
    if (storedVariant) {
      const parsedVariant = JSON.parse(storedVariant);
      setSelectedVariant(parsedVariant);
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

    const cgst = discountedPrice * 0.05; 
    const gst = discountedPrice * 0.10;  

    setCGST(cgst);
    setGST(gst);

    const calculatedTotalAmount = discountedPrice + cgst + gst + deliveryCharges;
    setTotalAmount(calculatedTotalAmount);

  }, [cart, deliveryCharges]);

  const applyCoupon = () => {
    const matchedCoupon = coupons.find((coupon) => coupon.code === couponCode);

    if (matchedCoupon) {
      const couponDiscount = (matchedCoupon.discount / 100) * totalPrice;
      setAppliedCoupon(matchedCoupon);
      setTotalDiscount(couponDiscount);

      const discountedPriceAfterCoupon = totalPrice - couponDiscount;

      const cgstAfterCoupon = discountedPriceAfterCoupon * 0.05; 
      const gstAfterCoupon = discountedPriceAfterCoupon * 0.10;  

      setCGST(cgstAfterCoupon);
      setGST(gstAfterCoupon);

      const calculatedTotalAmount = discountedPriceAfterCoupon + cgstAfterCoupon + gstAfterCoupon + deliveryCharges;
      setTotalAmount(calculatedTotalAmount);

      setFinalAmount(discountedPriceAfterCoupon);
    } else {
      alert("Invalid Coupon Code");
    }
  };

  const showTotalDiscount = couponCode && appliedCoupon;



  const handleIncrement = (productId) => {
    const updatedCart = cart.map((item) =>
      item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecrement = (productId) => {
    const updatedCart = cart.map((item) =>
      item._id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (productId) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  
  const createOrderData = () => {
    const orderData = {
      billingDetails: {
        name: userData?.fullName, // This should be dynamic from a form
        address: selectedAddress,
        shippingAddress: selectedAddress,
      },
      orderItems: {
        items: cart.map((item) => ({
          itemId: item._id,
          quantity: item.quantity,
          price: item.itemDetails.price,
          total: item.itemDetails.price * item.quantity,
        })),
        orderSubtotal: totalPrice,
        orderDiscount: totalDiscount,
        orderShipping: deliveryCharges,
        orderTax: CGST + GST,
        cgst: CGST,
        gst: GST,
        orderTotal: totalAmount,
      },
      generalDetails: {
        paymentMethod: selectedPaymentMethod,
      },
    };

    // Save order data to localStorage
    localStorage.setItem("orderData", JSON.stringify(orderData));
  };

  const handleCheckout = () => {
    createOrderData(); // Save the order data to localStorage before proceeding
    createOrder(); // Call the hook to handle the API call
  };

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
                        href="/delivery-address"
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
                      checked={selectedPaymentMethod === 'RazorPay'} 
                      onChange={handlePaymentMethodChange}
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
                      checked={selectedPaymentMethod === 'Stripe'} 
                      onChange={handlePaymentMethodChange} 
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>

                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="Paypal"
                      name="payment_method"
                      id="Paypal"
                      value="Paypal"
                      checked={selectedPaymentMethod === 'Paypal'} 
                      onChange={handlePaymentMethodChange}
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>

                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="Payfast"
                      name="payment_method"
                      id="Payfast"
                      value="Payfast"
                      checked={selectedPaymentMethod === 'Payfast'} 
                      onChange={handlePaymentMethodChange}
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>

                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="PayStack"
                      name="payment_method"
                      id="PayStack"
                      value="PayStack"
                      checked={selectedPaymentMethod === 'PayStack'} 
                      onChange={handlePaymentMethodChange}
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>

                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="flutterWave"
                      name="payment_method"
                      id="flutterWave"
                      value="flutterWave"
                      checked={selectedPaymentMethod === 'flutterWave'} 
                      onChange={handlePaymentMethodChange}
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>

                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="MercadoPago"
                      name="payment_method"
                      id="MercadoPago"
                      value="MercadoPago"
                      checked={selectedPaymentMethod === 'MercadoPago'} 
                      onChange={handlePaymentMethodChange}
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>

                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="Xendit"
                      name="payment_method"
                      id="Xendit"
                      value="Xendit"
                      checked={selectedPaymentMethod === 'Xendit'} 
                      onChange={handlePaymentMethodChange}
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>

                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="MidTrans"
                      name="payment_method"
                      id="MidTrans"
                      value="MidTrans"
                      checked={selectedPaymentMethod === 'MidTrans'} 
                      onChange={handlePaymentMethodChange}
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>

                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="OrangePay"
                      name="payment_method"
                      id="OrangePay"
                      value="OrangePay"
                      checked={selectedPaymentMethod === 'OrangePay'} 
                      onChange={handlePaymentMethodChange}
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>

                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="Cash on Delivery"
                      name="payment_method"
                      id="COD"
                      value="COD"
                      checked={selectedPaymentMethod === 'COD'} 
                      onChange={handlePaymentMethodChange}
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>

                  <div className="custom-control custom-radio border-bottom py-2" id="stripe_box">
                    <Form.Check
                      type="radio"
                      label="Wallet (You have)"
                      name="payment_method"
                      id="Wallet"
                      value="Wallet"
                      checked={selectedPaymentMethod === 'Wallet'} 
                      onChange={handlePaymentMethodChange}
                    />
                    <input type="hidden" id="isStripeEnabled" value="true" />
                  </div>
                </div>
              </Accordion>

              <div className="add-note" id="coupon-div">
                <h3>Available Coupons</h3>
                <div id="" className="res-search-list">
        {coupons.map((coupon) => (
        <Col className='transactions-list-wrap mt-4' xs={12} key={coupon._id}>
          <a className='checkout-page-coupon-link' href="#" onClick={() => copyToClipboard(coupon.code)}>
          <Card className="checkout-page-coupons-card bg-white px-4 py-3 rounded-lg mb-3 shadow-sm h-100">
            <Row className="  gold-members d-flex align-items-center transactions-list">
              <span className=" d-flex coupons-per-off">
                <Image
                  className="discount-img img-fluid "
                  style={{ width: '65px', height: '65px' }}
                  src={discountImg} 
                />
                <span className="">{coupon.discount}{coupon.discountType === 'Percent' ? '%' : ''} OFF</span>
              </span>
              <span className="mb-0 checkout-page-coupons-line badge bg-transparent text-black">{coupon.code} | Valid till {coupon.expiresAt.split('T')[0]}</span>
            </Row>
          </Card>
          </a>
        </Col>
        ))}
          
        
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
             <div className="w-100"> <div className="d-flex"><img
                src= {`${item.itemDetails.mediaFiles[0]?.url}`}
                className="img-responsive img-rounded order-img"
                style={{ maxHeight: '40px', maxWidth: '25px' }}
                alt="product"
              />
              <div className="media-body">
                <div className="m-0 product-name">{item.itemDetails.name}</div>
              </div></div>{ item.variantQuantity > 0 ? 
                 <div className="extra-weight"><span className="extra-weight-heading">weight: </span>{item.variantQuantity} kg</div> : null}
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

      {/* {apply coupons} */}
              <div className="bg-white px-3 clearfix">
  <div className="pb-3">
    <div className="inputss-group input-group-sm mb-2 d-flex">
      <input
        type="text"
        className="form-control"
        id="coupon_code"
        placeholder="Enter Promo Code"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
      />
      <div className="input-group-append">
        <button className="btn btn-success" id="apply-coupon-code"  onClick={applyCoupon}>
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
                {showTotalDiscount && (
                  <p className="mb-2">
                    Total Discount ({appliedCoupon.discount} %)
                    <span className="float-right Total-Discount">
                      <span className="currency-symbol-left">( - $</span>
                      {totalDiscount.toFixed(2)} )
                    </span>
                    <hr />
                  </p>
                )}
                
                <p className="mb-2">
                  CGST (5%)
                  <span className="float-right text-dark">
                    <span className="currency-symbol-left">$</span>
                    {CGST.toFixed(2)}
                  </span>
                </p>
                <p className="mb-2">
                  GST ( 10% )
                  <span className="float-right text-dark">
                    <span className="currency-symbol-left">$</span>
                    {GST.toFixed(2)}
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
                    {totalAmount.toFixed(2)}
                  </p>
                </h6>
              </div>

           
              <div className="p-3 text-center">
                <Button onClick={handleCheckout} block size="lg" className="pay_now_buttons border-0 text-center">
                  Pay <span className="currency-symbol-left">$</span>{totalAmount.toFixed(2)}<FaArrowRight />
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
