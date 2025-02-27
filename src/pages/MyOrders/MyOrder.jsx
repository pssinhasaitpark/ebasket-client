import React, { useState, useEffect } from 'react';
import { FaList, FaClock, FaCheck, FaMapMarker, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import NotFound from '../NotFound/NotFound';
import './MyOrder.css'
import { useDispatch, useSelector } from 'react-redux';
import { getorders } from '../../store/slices/orderSlice';
import Noresult from '../../asset/images/no-result copy.png';
import {Clock} from 'react-feather'
import Pending_order from '../Pending-Order/Pending_order';

const OrderTabs = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.Order);
  const [activeTab, setActiveTab] = useState('all'); // Initially, 'all' tab is active
  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update active tab on click
  };

  useEffect(() => {
    dispatch(getorders());
  }, [dispatch]);

  if (loading) {
    return <div className="d-flex justify-content-center"><img src={Noresult} /></div>;
  }


  const filterOrdersByStatus = (status) => {
    return orders.filter((order) => order?.order?.generalDetails?.status === status);
  };

  const renderOrderDetails = (order) => {
    const { generalDetails, billingDetails, orderItems, otp, ordercreatedAt } = order;
    return (
      <div className='pb-3'>
      <div className="p-3 rounded shadow-sm bg-white" key={order.id}>
        <div className="d-flex border-bottom pb-3 m-d-flex justify-content-between">
          <div className="d-flex">
            <div className="text-muted mr-3">
              <img
                alt="Order Image"
                src={orderItems.items[0].itemImage}
                className="img-fluid order_img rounded"
              />
            </div>
            <div>
              <p className="mb-0 font-weight-bold">
                <a className="text-dark my_order_name">{orderItems?.items[0]?.itemName}</a>
              </p>
              <p className="mb-0">
                <FaMapMarker className="mr-2 text-muted" /> {billingDetails?.shippingAddress}
              </p>
              <p>ORDER {order?.generalDetails?.orderNumber}</p>
              <p className="mb-0 small view-det">
                <a
                  href={`/pending_order/${order._id}`}
                  className="small font-weight-bold text-center"
                >
                  {/* <Pending_order order= {order._id}/> */}
                  View Details
                </a>
              </p>
            </div>
          </div>
          <div className="ml-auto ord-com-btn">
            <p className={`bg-pending text-white py-1 px-2 rounded small mb-1 status-${order?.generalDetails?.status || 'unkwown'}`}>
              {order?.generalDetails?.status}
            </p>
            <p className="small font-weight-bold text-center order-date">
              <Clock className='small' /> {generalDetails?.dateCreated.split('T')[0]}
            </p>
            <p className="delivery-otp small font-weight-bold text-center otp-box badge badge-danger py-2 px-3">
              OTP : {otp}
            </p>
          </div>
        </div>

        <div className="d-flex pt-3 m-d-flex ">
          <div className="text-muted m-0 ml-auto mr-3 small">
            <span className="text-dark font-weight-bold">{Array.isArray(orderItems?.items)
              ? orderItems.items.reduce((total, item) => total + item.quantity, 0)
              : 0} items</span>
          </div>

          <div className="total-pay-my_order text-muted mr-3 ml-auto small">
            Total Payment
            <div className="text-dark font-weight-bold">${orderItems?.orderTotal.toFixed(2)}</div>
          </div>

          <div className="text-right custom-help">
              <a href='/contactus' className='btn btn-outline-primary px-3'>Help</a>
          </div>
        </div>
      </div>
      </div>
    );
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12 top-nav mb-3">
          <div className="custom-tabsa bg-white overflow-hidden  p-2 c-t-order">
            {/* Navigation Tabs */}
            <ul className="nav nav-tabs border-0 bg-white rounded overflow-hidden shadow-sm p-2 c-t-order">
              <li className="nav-item rounded-circle">
                <a
                  className={`nav-link ${activeTab === 'all' ? 'active' : ''} border-0 text-dark py-3`}
                  onClick={() => handleTabClick('all')}
                  href="#"
                >
                  <FaList className="active-icon mr-2 text-success mb-0" /> All
                </a>
              </li>
              <li className="nav-item rounded-circle">
                <a
                  className={`nav-link ${activeTab === 'InProcess' ? 'active' : ''} border-0 text-dark py-3`}
                  onClick={() => handleTabClick('InProcess')}
                  href="#"
                >
                  <FaClock className="mr-2 text-warning mb-0" /> InProcess
                </a>
              </li>
              <li className="nav-item rounded-circle">
                <a
                  className={`nav-link ${activeTab === 'InTransit' ? 'active' : ''} border-0 text-dark py-3`}
                  onClick={() => handleTabClick('InTransit')}
                  href="#"
                >
                  <FaClock className="mr-2 text-success mb-0" /> InTransit
                </a>
              </li>
              <li className="nav-item rounded-circle">
                <a
                  className={`nav-link ${activeTab === 'Delivered' ? 'active' : ''} border-0 text-dark py-3`}
                  onClick={() => handleTabClick('Delivered')}
                  href="#"
                >
                  <FaCheck className="mr-2 text-success mb-0" /> Delivered
                </a>
              </li>
            </ul>

            <div className="tab-content col-md-12 mt-3">
              {activeTab === 'all' && (
                <div className="tab-pane active" id="all">
                  {orders.length === 0 ? (
                    <p className='text-center'><img src={Noresult} alt="" /></p>
                  ) : (
                    orders.map((orderData) => renderOrderDetails(orderData.order)) // Correct mapping here
                  )}
                  {/* {console.log('order', orders)
                  } */}
                </div>
              )}

              {activeTab === 'InProcess' && (
                <div className="tab-pane active" id="InProcess">
                  {filterOrdersByStatus('InProcess').length === 0 ? (
                    <p className='text-center'><img src={Noresult} alt="" /></p>
                  ) : (
                    filterOrdersByStatus('InProcess').map((orderData) => renderOrderDetails(orderData.order))
                  )}
                </div>
              )}

              {activeTab === 'InTransit' && (
                <div className="tab-pane active" id="InTransit">
                  {filterOrdersByStatus('InTransit').length === 0 ? (
                    <p className='text-center'><img src={Noresult} alt="" /></p>
                  ) : (
                    filterOrdersByStatus('InTransit').map((orderData) => renderOrderDetails(orderData.order))
                  )}
                </div>
              )}
              {activeTab === 'Delivered' && (
                <div className="tab-pane active" id="Delivered">
                  {filterOrdersByStatus('Delivered').length === 0 ? (
                    <p className='text-center'><img src={Noresult} alt="" /></p>
                  ) : (
                    filterOrdersByStatus('Delivered').map((orderData) => renderOrderDetails(orderData.order))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );


};

export default OrderTabs;
