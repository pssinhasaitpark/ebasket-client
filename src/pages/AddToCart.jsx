import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
  Row,
  Col,
  Button,
  Form,
  FormControl,
  Card,
  Container,
} from "react-bootstrap";
import {
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaHeart,
  FaShareAlt,
} from "react-icons/fa";
import p1_img from "../asset/images/t2.png";
import Slider from "../component/Slider";
import "./AddToCart.css";
import ProductList from "../pages/Products/Products";
import Header from "../layout/Header";
import LikeButton from '../component/LikeButton';
import Selling from "../component/Most_selling";

const ProductDetailPage = () => {
  const { id } = useParams(); 
  const [quantity, setQuantity] = useState(1);
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [cart, setCart] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0); 
  const [variantQuantity, setVariantQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(null);
  const [totalImage, settotalImage] = useState(null);



  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`http://192.168.0.111:3001/items/itembyid/${id}`);
        setProductData(response.data.product); 
        setLoading(false);
        if (response.data.product.itemDetails.variants.length > 0) {
          setSelectedVariant(response.data.product.itemDetails.variants[0]);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  const handleVariantClick = (variants, index) => {
    setSelectedVariantIndex(index);
    const newTotalPrice = productData.itemDetails.price * variants.variantQuantity;
    setTotalPrice(newTotalPrice);
    localStorage.setItem('selectedVariant', JSON.stringify({
      variantQuantity: variants.variantQuantity
  }));
  };

  const handleVariantImageClick = (variants, index) => {
    setSelectedVariantIndex(index);
    const newtotalImage = variants.variantImage;
    settotalImage(newtotalImage);
  }



  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant); 
  };

  if (loading) return <div>Loading...</div>;

  if (!productData) return <div>Product not found!</div>;

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const existingItemIndex = cart.findIndex((cartItem) => cartItem._id === product._id);
  
    let updatedCart;
  
    if (existingItemIndex >= 0) {
      updatedCart = cart.map((cartItem) =>
        cartItem._id === product._id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + quantity,
            }
          : cartItem
      );
    } else {
      updatedCart = [
        ...cart,
        {
          ...product,
          quantity: quantity,
        },
      ];
    }
  
    setCart(updatedCart);
  
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  
    console.log("Updated Cart:", updatedCart);
  };

  return (
    <>
    <Header/>
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
                          alt="productData.itemDetails.name"
                          className="img-fluid item-img w-100"
                          src={totalImage ? `http://192.168.0.111:3001${totalImage}` : `http://192.168.0.111:3001${productData?.itemDetails?.mediaFiles[0]?.url}`}
                          />
                      </div>
                    </div>
                  </div>
                  <div className="nav-slider slick-initialized slick-slider mt-3">
                    <div className="variant-images mt-3"> 
                      <div className="d-flex flex-wrap">
                        {productData.itemDetails.variants.map((variants , index) => (
                          <div
                            key={index}
                            className="p-1 border variant-item"
                            onClick={() => handleVariantChange(variants)}
                          >
                            <img
                              src={`http://192.168.0.111:3001${variants.variantImage}`}
                              alt={variants.variantName}
                              className="img-fluid cart-slider-img"
                              onClick={() => handleVariantImageClick(variants, index)}
                            />
                          </div>
                        ))}
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
                        <h2>{productData.itemDetails.name}</h2>
                      </div>
                      <div className="description mt-2 mb-3">
                        <p>{productData.itemDetails.description || 'No description available'}</p>
                      </div>
                      <div className="car-det-price ml-auto">
                        <div className="product_price_div">
                        <div className="price-section">
                            {totalPrice !== null ? (
                              <span className="price">
                                ${totalPrice}
                              </span>
                            ) : (
                              <span className="price">
                                ${productData.itemDetails.price}
                                <s>${productData.itemDetails.price + 10}</s>
                              </span>
                            )}
                        </div>
                          <div className="variant_quntity">
                            Quantity left: {productData.itemDetails.itemQuantity || 'Unlimited'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="brand mt-2 mb-3">
                    <h3>Brand | {productData.itemDetails.brand?.title || 'Unknown'}</h3>
                  </div>

                  <div className="attributes mt-2 mb-0">
                    <div className="v-boxariants">
                      <div className="attribute_list">
                        <h3 className="attribute-label">Weight</h3>
                        <div className="attribute-options gap-3">
                        {productData.itemDetails.variants.map((variants, index)  => (
                          <div 
                             key={index} 
                             className="border p-2" 
                             onClick={() => handleVariantClick(variants, index)}> 
                                    {variants.variantQuantity} kg
                          </div>
                        ))}
                      </div>
                      </div>
                    </div>
                  </div>

                  <div className="quantity mt-2 mb-3">
                    <div className="d-flex align-items-center product-item-box justify-content-between">
                      <h3 className="m-0">Quantity</h3>
                      {/* <div className="ml-auto"> */}
                        <span className="count-number">
                          <div class="ml-auto">
                            <span class="count-number">
                              <button class="btn-sm left dec btn btn-outline-secondary food_count_decrese" onClick={handleDecrement}>
                                <FaMinus />
                              </button>
                              <span className="particular-product-quantity">{quantity}</span>
                              <button class="btn-sm right inc btn btn-outline-secondary" onClick={handleIncrement}>
                                <FaPlus />
                              </button>
                            </span>
                          </div>
                        </span>
                      {/* </div> */}
                    </div>
                  </div>

                  <div className="addtocart mt-2 mb-3 gap-3">
                    <Button variant="dark" className="btnnn " size="lg" onClick={() => handleAddToCart(productData)}>
                      <FaShoppingCart /> Add to Cart
                    </Button>
                    <Button variant="success" className="btnnn" size="lg">
                      <FaShoppingCart /> Buy Now
                    </Button>
                  </div>

                  <div className="product-fav-share">
                    <div className="add-to-favorite">
                      <a href="#" className="loginAlert count d-flex">
                        <LikeButton productId={productData._id} />
                        <span>Add To Wishlist</span>
                      </a>
                    </div>
                    <div className="share-btn">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#socialShare"
                      >
                        <FaShareAlt className="social-icons" /> Share this
                        product
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="py-2 mb-3 rental-detailed-ratings-and-reviews mt-5">
              <Row>
                {/* Left Column - Reviews and Product Info */}
                <Col md={8} className="rental-review">
                  <div className="main-specification mb-0"></div>
                  <div className="review-inner">
                    <div
                      id="customers_ratings_and_review"
                      style={{ display: "none" }}
                    ></div>
                    <div id="customers_overview">
                      <h3>Overview</h3>
                      <div className="customers-overview-list">
                        <ul>
                          <li>
                            <label>Brand:</label>
                            <span className="brand">{productData.itemDetails.brand?.title}</span>
                          </li>
                          <li>
                            <label>Category:</label>
                            <span className="cat_name">
                            {productData.itemDetails.category?.name}
                            </span>
                          </li>
                          <li>
                            <label>Shelf Life:</label>
                            <span className="shelf_life">{productData.generalInformation?.shelfLife}</span>
                          </li>
                          <li>
                            <label>Country:</label>
                            <span className="country">{productData.generalInformation?.country}</span>
                          </li>
                          <li>
                            <label>FSSAI License:</label>
                            <span className="fssai_license">
                            {productData.generalInformation?.fssaiLicense}
                            </span>
                          </li>
                          <li>
                            <label>Expiry Date:</label>
                            <span className="expiry_date">{productData.generalInformation?.expiryDate}</span>
                          </li>
                          <li>
                            <label>Packaging Type:</label>
                            <span className="packaging_type">{productData.generalInformation?.packagingType}</span>
                          </li>
                          <li>
                            <label>Seller FSSAI:</label>
                            <span className="seller_fssai">{productData.generalInformation?.sellerFSSAI}</span>
                          </li>
                          <li>
                            <label>HSN Code:</label>
                            <span className="hsn_code">{productData.itemDetails.HSNCode}</span>
                          </li>
                          <li>
                            <label>Unit:</label>
                            <span className="unit">{productData.itemDetails.unit}</span>
                          </li>
                          <li>
                            <label>Disclaimer:</label>
                            <span className="disclaimer">{productData.generalInformation?.disclaimer}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="see_all_review_div"
                      style={{ display: "none" }}
                    >
                      <Button variant="primary" className="btn-block btn-sm">
                        See All Reviews
                      </Button>
                    </div>
                  </div>
                </Col>

                {/* Right Column - Store Info */}
                <Col md={4} className="store-info">
                  <Card className="p-4 mb-4">
                    <div className="shipping-details-bottom-border pb-3">
                      <img
                        className="mr-2"
                        src="https://ebasketweb.siswebapp.com/img/Payment.png"
                        alt="Safe Payment"
                      />
                      <span>Safe Payment</span>
                    </div>
                    <div className="shipping-details-bottom-border pb-3">
                      <img
                        className="mr-2"
                        src="https://ebasketweb.siswebapp.com/img/money.png"
                        alt="7 Days Return Policy"
                      />
                      <span>7 Days Return Policy</span>
                    </div>
                    <div className="shipping-details-bottom-border">
                      <img
                        className="mr-2"
                        src="https://ebasketweb.siswebapp.com/img/Genuine.png"
                        alt="100% Authentic Items"
                      />
                      <span>100% Authentic Items</span>
                    </div>
                  </Card>

                  {/* Most Selling Products */}
                  <div className="more-from-store">
                    <Card className="p-4 mb-4">
                      <div className="d-flex justify-content-center">
                        <h3>Most Selling Products</h3>
                      </div>
                      <div id="top-rated-product">
                        <div
                          className="store-product"
                          // data-product-id="65d88623a39d9"
                        >
                          <div className="product-content">
                            <div className="store-image">
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/ebasket-85209.appspot.com/o/images%2Findiagate%20basmatirice_1720521733059.jpg?alt=media&token=b7aadf24-0253-4ee0-a788-bbc29818e64f"
                                alt="Potatos"
                              />
                            </div>
                            <div className="product-detail">
                              <div className="basic">
                                <div className="product-name">
                                  <span className="flash-product-title">
                                    Potatos
                                  </span>
                                </div>
                                <div className="strike-price">
                                  <strike>$50.00</strike>
                                  <div className="product-price">$49.00</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="store-product"
                          data-product-id="6658702d8a39d"
                        >
                          <div className="product-content">
                            <div className="store-image">
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/ebasket-85209.appspot.com/o/images%2Findiagate%20basmatirice_1720521733059.jpg?alt=media&token=b7aadf24-0253-4ee0-a788-bbc29818e64f"
                                alt="Fresh Organic Broccoli"
                              />
                            </div>
                            <div className="product-detail">
                              <div className="basic">
                                <div className="product-name">
                                  <span className="flash-product-title">
                                    Fresh Organic Broccoli
                                  </span>
                                </div>
                                <div className="strike-price">
                                  <strike>$30.00</strike>
                                  <div className="product-price">$28.50</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>
              </Row>
              <Row className="related_products">
                <div className="title">
                <Col className="products_buttons">
                  <h3>Related Products</h3>
                  <Button
                   className="btn-btn-link "
                    variant="link"
                    href="https://ebasketweb.siswebapp.com/products/category/65d85efaa0c87"
                  >
                    View all
                  </Button>
                </Col>
                </div>
                {/* <ProductList/> */}
              </Row>
             
            </div>
          </div>
        </div>
      </Container>
    </div>
    </>
  );
};

export default ProductDetailPage;
