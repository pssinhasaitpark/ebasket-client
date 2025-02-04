import React from 'react';
import { Row, Col, Button, Image, Badge, Card } from 'react-bootstrap';
import Header from '../../layout/Header';
import './Offers.css'
import { ImCopy } from "react-icons/im";

const CouponsList = () => {
  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    alert('Coupon code copied');
  };

  return (
    <>
    <Header/>
    <div className="container mt-3">
      <div className="transactions-banner p-4 rounded">
        <Row className="align-items-center text-left">
          <h3 className="font-weight-bold text-white p-3">Coupons list</h3>
        </Row>
      </div>

      <div className="text-center py-5 not_found_div" style={{ display: 'none' }}>
        <Image src="" />
      </div>

      <div style={{ display: 'none' }} className="coupon_code_copied_div mt-4 error_top text-center">
        <p>Coupon code copied</p>
      </div>

      <div id="" className="res-search-list">
        <Row className="mt-4">
          {/* Coupon 1 */}
          <Col  xs={12}>
            <Card className="bg-white px-4 py-3 border rounded-lg mb-3 shadow-sm transactions-list-wrap ">
              <Row className="d-flex align-items-center transactions-list">
                <Col xs="auto">
                  <Image
                    className="mr-3 rounded-circle img-fluid"
                    style={{ width: '65px', height: '65px' }}
                    src="https://firebasestorage.googleapis.com/v0/b/ebasket-85209.appspot.com/o/images%2Fright-banner-2_1720759673513.png?alt=media&token=8bea0abf-c519-4253-9541-3d7bf1da9cf6"
                  />
                </Col>
                <Col>
                <div className='media-body'>
                  <h6 className="date">Expires At: Fri Jun 13 2025 11:59:59 PM</h6>
                  <div className="offercoupan">
                    <Badge className="mb-0 badge bg-transparent text-black">OFFER15</Badge>
                    <a href="" onClick={() => copyToClipboard('OFFER15')}>
                    <ImCopy />
                    </a>
                  </div>
                  <p className="offer-des mt-2">Use this coupon and get 15% off on every product.</p>
                  </div>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                  <span className="price font-weight-bold h4">15%</span>
                </Col>

              </Row>
            </Card>
          </Col>

     
          <Col xs={12}>
            <Card className="bg-white px-4 py-3 border rounded-lg mb-3 shadow-sm transactions-list-wrap">
              <Row className="d-flex align-items-center transactions-list">
                <Col xs="auto">
                  <Image
                    className="mr-3 rounded-circle img-fluid"
                    style={{ width: '65px', height: '65px' }}
                    src="https://firebasestorage.googleapis.com/v0/b/ebasket-85209.appspot.com/o/images%2Fright-banner-2_1720759673513.png?alt=media&token=8bea0abf-c519-4253-9541-3d7bf1da9cf6"
                  />
                </Col>
                <Col>
                  <h6 className="date">Expires At: Wed Dec 31 2025 11:59:59 PM</h6>
                  <div className="offercoupan">
                    <Badge className="mb-0 badge bg-transparent text-black">MEGA20</Badge>
                    <a href="">
                    <ImCopy />
                    </a>
                  </div>
                  <p className=" offer-des mt-2">Up to 20% off Grab the best deal !!</p>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                  <span className="price font-weight-bold h4">20%</span>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* Coupon 3 */}
          <Col xs={12}>
            <Card className="bg-white px-4 py-3 border rounded-lg mb-3 shadow-sm transactions-list-wrap">
              <Row className="d-flex align-items-center transactions-list">
                <Col xs="auto">
                  <Image
                    className="mr-3 rounded-circle img-fluid"
                    style={{ width: '65px', height: '65px' }}
                    src="https://firebasestorage.googleapis.com/v0/b/ebasket-85209.appspot.com/o/images%2Fright-banner-2_1720759673513.png?alt=media&token=8bea0abf-c519-4253-9541-3d7bf1da9cf6"
                  />
                </Col>
                <Col>
                  <h6 className="date">Expires At: Wed Dec 31 2025 11:59:59 PM</h6>
                  <div className="offercoupan">
                    <Badge className="mb-0 badge bg-transparent text-black">ENJOY30</Badge>
                    <a href="">
                    <ImCopy />
                    </a>
                  </div>
                  <p className=" offer-des mt-2">30% off on our best products. Use code ENJOY30 in cart.</p>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                  <span className="price font-weight-bold h4">30%</span>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>

      <Row className="fu-loadmore-btn">
        <Col className="text-center">
          <Button className="page-link loadmore-btn" style={{ display: 'none' }}>
            Load More
          </Button>
        </Col>
      </Row>
    </div>
    </>
  );
};

export default CouponsList;
