import React, { useState } from "react";
import { Button, Row, Col, Card, Form, InputGroup, FormControl } from "react-bootstrap";
// import { FaMinus, FaPlus, FaShoppingCart, FaHeart, FaShareAlt } from "react-icons/fa";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <Row id="product-detail">
      <Col md={6} className="rent-cardet-left">
        <div className="main-slider slick-initialized slick-slider">
          <div className="slick-list">
            <div className="slick-track" style={{ opacity: 1, width: "536px", transform: "translate3d(0px, 0px, 0px)" }}>
              <div className="product-image slick-slide slick-current slick-active" aria-hidden="false" style={{ width: "536px" }} tabIndex={0}>
                <img alt="Product" className="img-fluid item-img w-100" src="https://firebasestorage.googleapis.com/v0/b/ebasket-85209.appspot.com/o/images%2Fbasket-white-potatoes_1720518201922.jpg?alt=media&token=5d68c1d0-3578-4235-951f-b87181e9e618" variant="top" className="img-fluid item-img w-100" />
              </div>
            </div>
          </div>
        </div>

        <div className="nav-slider slick-initialized slick-slider">
          <div className="slick-list draggable">
            <div className="slick-track" style={{ opacity: 1, width: "77px", transform: "translate3d(0px, 0px, 0px)" }}>
              <div className="product-image slick-slide slick-current slick-active" aria-hidden="false" style={{ width: "77px" }} tabIndex={0}>
                <img alt="Product Thumbnail" className="img-fluid item-img w-100" src="https://firebasestorage.googleapis.com/v0/b/ebasket-85209.appspot.com/o/images%2Fbasket-white-potatoes_1720518201922.jpg?alt=media&token=5d68c1d0-3578-4235-951f-b87181e9e618" variant="top" className="img-fluid item-img w-100" />
              </div>
            </div>
          </div>
        </div>
      </Col>

      <Col md={6} className="rent-cardet-right">
        <div className="carrent-det-rg-inner">
          <div className="car-det-head mb-3">
            <div className="car-det-head-top">
              <div className="car-det-title">
                <h2>Potatos</h2>
              </div>
              <div className="description mt-2 mb-3">
                <p>Potatoes</p>
              </div>
              <div className="car-det-price ml-auto">
                <div className="product_price_div">
                  <span className="price">
                    $49.00 <s>$50.00</s>
                  </span>
                  <div id="variant_qty">Quantity left: Unlimited</div>
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
                  <Form.Check
                    type="radio"
                    label="3kgs"
                    name="weight-option"
                    id="weight-3kgs"
                    value="3kgs"
                    defaultChecked
                  />
                  <Form.Check
                    type="radio"
                    label="5kgs"
                    name="weight-option"
                    id="weight-5kgs"
                    value="5kgs"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="quantity mt-2 mb-3">
            <div className="d-flex align-items-center product-item-box">
              <h3 className="m-0">Quantity</h3>
              <div className="ml-auto">
                <span className="count-number">
                  <Button variant="outline-secondary" size="sm" onClick={handleDecrease}>
                    {/* <FaMinus /> */}
                  </Button>
                  <FormControl
                    className="count-number-input"
                    name="quantity"
                    type="text"
                    value={quantity}
                    readOnly
                  />
                  <Button variant="outline-secondary" size="sm" onClick={handleIncrease}>
                    {/* <FaPlus /> */}
                  </Button>
                </span>
              </div>
            </div>
          </div>

          <div className="addtocart mt-2 mb-3">
            <Button variant="dark" size="lg" block>
              {/* <FaShoppingCart />  */}
              Add to Cart
            </Button>
            <Button variant="primary" size="lg" block>
              {/* <FaShoppingCart />  */}
              Buy Now
            </Button>
          </div>

          <div className="product-fav-share">
            <div className="add-to-favorite">
              <a href="#" className="loginAlert count">
                {/* <FaHeart />  */}
                Add To Wishlist
              </a>
            </div>
            <div className="share-btn">
              <a href="#" data-toggle="modal" data-target="#socialShare">
                {/* <FaShareAlt />  */}
                Share this product
              </a>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetail;
