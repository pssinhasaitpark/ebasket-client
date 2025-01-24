import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import {
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaHeart,
  FaShareAlt,
} from "react-icons/fa";
import Slider from "../component/Slider";
import "./AddToCart.css";

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-detail-page mb-4">
      <Container className="pt-5 position-relative">
        <div className="car-detail-inner">
          <div className="car-del-top-section">
            <Row id="product-detail">
              <Col md={6} className="rent-cardet-left">
                <div className="main-slider">
                  <div className="slick-list">
                    <div className="slick-track">
                      <div className="product-image ">
                        <img
                          alt="Product"
                          className="img-fluid item-img w-100"
                          src="https://firebasestorage.googleapis.com/v0/b/ebasket-85209.appspot.com/o/images%2Fbasket-white-potatoes_1720518201922.jpg?alt=media&token=5d68c1d0-3578-4235-951f-b87181e9e618"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="nav-slider slick-initialized slick-slider mt-3">
                <Slider />
                </div>
                </div>
                
              </Col>
              <Col md={6} className="rent-cardet-right">
                <div className="carrent-det-rg-inner">
                  <div className="car-det-head mb-3">
                    <div className="car-det-head-top">
                      <div className="car-det-title">
                        <h2>Potatoes</h2>
                      </div>
                      <div className="description mt-2 mb-3">
                        <p>Potatoes</p>
                      </div>
                      <div className="car-det-price ml-auto">
                        <div className="product_price_div">
                          <span className="price">
                            $49.00 <s>$50.00</s>
                          </span>
                          <div className="variant_quntity">
                            Quantity left: Unlimited
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="brand mt-2 mb-3">
                    <h3>Brand | Amul</h3>
                  </div>

                  <div className="attributes mt-2 mb-0">
                    <div className="v-boxariants">
                      <div className="attribute_list">
                        <h3 className="attribute-label">Weight</h3>
                        <div className="attribute-options">
                          <div className="">3kgs</div>
                          <div className="">5kgs</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="quantity mt-2 mb-3">
                    <div className="d-flex align-items-center product-item-box">
                      <h3 className="m-0">Quantity</h3>
                      <div className="ml-auto">
                        <span className="count-number">
                          <div class="ml-auto">
                            <span class="count-number">
                              <button
                                
                                class="btn-sm left dec btn btn-outline-secondary food_count_decrese"
                              >
                                  <FaMinus />
                              </button>
                              <button
                               
                                class="btn-sm right inc btn btn-outline-secondary"
                              >
                                <FaPlus />
                              </button>
                            </span>
                          </div>
                          {/* <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={handleDecrease}
                          >
                         
                          </Button>
                          <FormControl
                            className="count-number-input"
                            name="quantity"
                            type="text"
                            value={quantity}
                            readOnly
                          />
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={handleIncrease}
                          >
                            <FaPlus />
                          </Button> */}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="addtocart mt-2 mb-3">
                    <Button variant="dark" className="btnnn " size="lg" >
                      <FaShoppingCart /> Add to Cart
                    </Button>
                    <Button variant="success" className="btnnn" size="lg" >
                      <FaShoppingCart /> Buy Now
                    </Button>
                  </div>

                  <div className="product-fav-share">
                    <div className="add-to-favorite">
                      <a href="#" className="loginAlert count">
                        <FaHeart className="symbol-heart" /> Add To Wishlist
                      </a>
                    </div>
                    <div className="share-btn">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#socialShare"
                      >
                        <FaShareAlt className="social-icons" /> Share this product
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetailPage;
