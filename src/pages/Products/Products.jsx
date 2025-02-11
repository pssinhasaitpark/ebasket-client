import React, { useEffect } from 'react';
import { Card, Badge, Row, Col } from 'react-bootstrap';
import potatoImg from '../../asset/images/t3.png';
import './Products.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../store/slices/products-slice';
import { useNavigate } from 'react-router-dom';
import sorry from '../../asset/images/no-result copy.png'

const ProductList = ({  itemss,firstWord}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, loading, error } = useSelector((state) => state.items);
  

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log('Items:', items);
  // }, [items]);

  const handleCardClick = async (id) => {
    try {
      const response = await fetch(`http://192.168.0.111:3001/items/itembyid/${id}`);
      const productDetails = await response.json();
      navigate(`/productDetail/${id}`, { state: { productDetails } });
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  const fi = (itemss?.length > 0 && Array.isArray(itemss)) ? itemss : (Array.isArray(items) ? items : [firstWord]);
  const filteredItem = items?.find(item => item?.itemDetails?.name === firstWord);
  
  return (
    <div className="container section-content">
      <Row className="mt-5 product-list">
        {fi && fi.length > 0 ? (
          fi.map((item, index) => {
            const id = item?._id;
            return (
              <Col key={index} md={4} className="pb-3">
                <Card
                  className="list-card position-relative"
                  onClick={() => handleCardClick(id)} 
                >
                  <div className="list-card-image">
                    <div className="member-plan position-absolute">
                      <Badge className="badge" pill variant="dark">
                        {item.itemDetails.discount}%
                      </Badge>
                    </div>
                    <a href="#">
                      <Card.Img
                        src={
                          item.itemDetails?.mediaFiles[0]?.url
                            ? `http://192.168.0.111:3001${item.itemDetails.mediaFiles[0].url}`
                            : potatoImg
                        }
                        variant="top"
                        className="img-fluid item-img w-100"
                        alt={item.itemDetails?.name || 'Product Image'}
                      />
                    </a>
                  </div>
                  <Card.Body className="py-2 position-relative product-desc">
                    <div className="list-card-body">
                      <Card.Title>
                        <a href="#" className="product-title">
                          {item.itemDetails?.name || 'Product Name'}
                        </a>
                      </Card.Title>
                      <Card.Text>
                        <span className="pro-price products-price">
                          ${item.itemDetails?.price}{' '}
                          <s className="orignal-price">
                            ${item.itemDetails?.discountedPrice || item.itemDetails?.price}
                          </s>
                        </span>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <p className="no-products"><img src={sorry} alt="" /></p>
        )}
      </Row>
    </div>
  );
};


export default ProductList;
