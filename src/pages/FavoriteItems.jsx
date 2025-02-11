import React, { useState, useEffect } from 'react';
import './FavoriteItems.css';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import empty from "../asset/images/empty wishlist.png"
import sorry from "../asset/images/no-result copy.png"



const BASE_URL = process.env.REACT_APP_BASE_URL;
const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlistProducts = async () => {
      const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      setWishlist(storedWishlist);

      try {
        const productPromises = storedWishlist.map(async (productId) => {
          const response = await fetch(`${BASE_URL}/items/itembyid/${productId}`);
          const data = await response.json();
          return data.product; 
        });

        const products = await Promise.all(productPromises);
        setProductDetails(products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching wishlist products:', error);
        setLoading(false);
      }
    };

    fetchWishlistProducts();
  }, []); 

  if (loading) return <div>Loading wishlist...</div>;
  if (productDetails.length === 0) return <Container className='py-5 mb-3'><div><h2 className='favourites-heading'>Favorite Items</h2><p className="no-products"><img src={sorry} alt="" /></p></div></Container>;

  return (
    <Container className='py-5'>
      <div className="">
        <h2 className='favourites-heading mb-3'>Favorite Items</h2>
        <Row className="mt-5 wishlist-products">
          {productDetails.length > 0 &&
            productDetails.map((product, index) => {
              const id = product._id;
              return (
                <Col key={index} md={4} className="pb-3 product-list">
                  <Card
                    className="list-card position-relative"
                  >
                    <div className="list-card-image">
                      <div className="member-plan2 position-absolute">
                      <Badge className="badge" pill variant="dark">
                         <HeartButton productId={product._id} />
                      </Badge>
                      </div>
                      <a href="#">
                        <Card.Img
                          src={`http://192.168.0.111:3001${product.itemDetails.mediaFiles[0]?.url}`}
                          variant="top"
                          className="img-fluid item-img w-100"
                          alt={product.itemDetails.name}
                        />
                      </a>
                    </div>

                    <Card.Body className="py-2 position-relative product-desc">
                      <div className="list-card-body">
                        <Card.Title>
                          <a href="#" className="product-title">
                            {product.itemDetails.name}
                          </a>
                        </Card.Title>
                        <Card.Text>
                          <span className="pro-price products-price">
                            ${product.itemDetails.price}{' '}
                            <s className="orignal-price">
                              ${product.itemDetails.discountedPrice || product.itemDetails.price}
                            </s>
                          </span>
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>
    </Container>
  );
};

const HeartButton = ({ productId }) => {
    const [isLiked, setIsLiked] = useState(true);
    const [buttonColor, setButtonColor] = useState('red'); 
  
    const handleClick = () => {
      setIsLiked(false); 
      setButtonColor('black'); 
      removeFromWishlist(productId); 
    };
  
    return (
      <FaHeart
        className="symbol-heart"
        onClick={handleClick}
        style={{ color: buttonColor }}
      />
    );
  };
  
  const removeFromWishlist = (productId) => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter((id) => id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  
    window.location.reload(); 
  };

export default WishlistPage;
