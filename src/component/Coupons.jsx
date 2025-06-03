import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ShopNow from '../component/Shop_Now_Button';
import image1 from '../asset/images/coupon_left_banner1.png';
import image2 from '../asset/images/coupon_right_up_banner.png';
import image3 from '../asset/images/coupon_right_down_banner.png';
import './coupon.css'
import { Link } from 'react-router-dom';

function Coupon() {
  return (
    <>
      <div className="coupon_wrapper pt-5 pb-5">
        <Container>
          <Row className="coupon-section h-100" style={{ alignItems: 'center', display: 'flex' }}>
            <Col xs={6} className="coupon_item2">
              <div className='left-banner'>
                <div>
                  <h3 className='banner-heading'>Use this coupon and get 15% off on every product.</h3>
                  <span className='coupon-discount'>15%</span>

                  <p className='mt-4 mb-0'><ShopNow /></p>

                </div>
                <Link to={'/productlist'} ><div className='coupon-img-animate' style={{ display: 'flex', justifyContent: 'right' }}><img className='coupon-img' src={image1} alt="" /></div></Link>
              </div>
            </Col>
            <Col xs={6} className="d-flex flex-column h-100">
              <Row className="flex-grow-1" >
                <Col className="d-flex coupon_item1" style={{ alignItems: 'center' }}>
                  <Link to={'/productlist'} ><div className='coupon-img-animate2 coupon-flex-img mr-3' ><img className='coupon-img2' src={image2} alt="" /></div></Link>
                  <div className='coupon-right-content'>
                    <h3 className='pb-2 banner-heading'>Up to 20% off Grab the best deal !!</h3>
                    <span className='coupon-discount '>20%</span>
                    <p className='mt-3 '><ShopNow /></p>
                  </div>
                </Col>
              </Row>
              <Row className="flex-grow-1">
                <Col className="d-flex coupon_item3" style={{ alignItems: 'center' }}>
                  <Link to={'/productlist'} ><div className='coupon-img-animate2 coupon-flex-img mr-3' ><img className='coupon-img2' src={image3} alt="" /></div></Link>
                  <div className='coupon-right-content'>
                    <h3 className='pb-2 banner-heading'>30% off on our best products. Use code ENJOY30 in cart.</h3>
                    <span className='coupon-discount '>30%</span>
                    <p className='mt-3'><ShopNow /></p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Coupon;

