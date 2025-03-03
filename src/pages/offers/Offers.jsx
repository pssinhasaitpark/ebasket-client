import React, { useEffect } from 'react';
import { Row, Col, Button, Image, Badge, Card } from 'react-bootstrap';
import './Offers.css'
import { ImCopy } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { getCoupons } from '../../store/slices/coupons.slice';
import { toast, ToastContainer } from "react-toastify";

const CouponsList = () => {

  const dispatch = useDispatch();
  const { coupons} = useSelector((state) => state.coupons);

  useEffect(() => {
    dispatch(getCoupons());
  }, [dispatch]);


  const copyToClipboard = (code) => {
    navigator?.clipboard?.writeText(code);
    toast.success('Coupon code copied');
  };



  return (
    <>


    {/* <Header/> */}

    <div className="container mt-3">
      <div className="transactions-banner p-4 rounded">
        <Row className="align-items-center text-left">
          <h3 className="font-weight-bold text-white p-3">Coupons list</h3>
        </Row>
      </div>

      <div className="text-center py-5 not_found_div" style={{ display: 'none' }}>
        <Image />
      </div>

      <div style={{ display: 'none' }} className="coupon_code_copied_div mt-4 error_top text-center">
        <p>Coupon code copied</p>
      </div>

      <div id="" className="res-search-list">
        {coupons.map((coupon) => (
        <Col className='transactions-list-wrap mt-4' xs={12} key={coupon._id}>
          <Card className="bg-white px-4 py-3 border rounded-lg mb-3 shadow-sm h-100">
            <Row className="gold-members d-flex align-items-center transactions-list">
              
                <Image
                  className=" p-0 rounded-circle img-fluid coupon-img"
                  style={{ width: '65px', height: '65px' }}
                  src={coupon.image} 
                />
              
                <div className="media-body">
                  <h6 className="date">Expires At: {new Date(coupon.expiresAt).toLocaleString()}</h6>
                  <div className="offercoupan">
                    <Badge className="mb-0 badge bg-transparent text-black">{coupon.code}</Badge>
                    <a href='' className='copy-link'  onClick={() => copyToClipboard(coupon.code)}>
                      <ImCopy />
                    </a>
                  </div>
                  <p className="offer-des mt-2">{coupon.description}</p>
                </div>
              <Col className="d-flex justify-content-end align-items-center total-percent">
                <span className="price font-weight-bold h4">{coupon.discount}{coupon.discountType === 'Percent' ? '%' : ''}</span>
              </Col>
            </Row>
          </Card>
        </Col>
        ))}
          
        
      </div>

      <Row className="fu-loadmore-btn">
        <Col className="text-center">
          <Button className="page-link loadmore-btn" style={{ display: 'none' }}>
            Load More
          </Button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
    </>
  );
};

export default CouponsList;
