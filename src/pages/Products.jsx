import React, { useEffect } from 'react';
import { Card, Badge, Row, Col } from 'react-bootstrap';
import potatoImg from '../asset/images/t3.png'
import './Products.css'
import Header from '../layout/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../store/slices/products-slice';
import { fetchCategories } from '../store/slices/categories-slice';
import { fetchBrands } from '../store/slices/brands-slice';

const ProductList = () => {

  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (loading) {
    return <p>Loading items...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
    

  return (
    <>
    <div className="container section-content">
    <Row className="mt-5">
        {items.length > 0 && items.map((item, index) => (
          <Col key={index} md={4} className="pb-3">
            <Card className="list-card position-relative">
              <div className="list-card-image">
                <div className="member-plan position-absolute">
                  <Badge className="badge" pill variant="dark">-2%</Badge>
                </div>
                <a href="#">
                  <Card.Img
                    src={item.itemDetails.image ? `http://your-server-url${item.itemDetails.image}` : potatoImg} 
                    variant="top"
                    className="img-fluid item-img w-100"
                    alt={item.itemDetails.name}
                  />
                </a>
              </div>
              <Card.Body className="py-2 position-relative product-desc">
                <div className="list-card-body">
                  <Card.Title>
                    <a href="#" className="product-title">
                      {item.itemDetails.name}
                    </a>
                  </Card.Title>
                  <Card.Text>
                    <span className="pro-price products-price">
                      ${item.itemDetails.price} <s className='orignal-price'>${item.itemDetails.discountedPrice || item.itemDetails.price}</s>
                    </span>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
    </div>
    </>
  );
};

export default ProductList;

