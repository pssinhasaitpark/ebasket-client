import React, { useState } from 'react';
import { FaList, FaClock, FaCheck, FaMapMarker } from 'react-icons/fa';
import NotFound from '../NotFound/NotFound';

const OrderTabs = () => {
  const [activeTab, setActiveTab] = useState('all'); // Initially, 'all' tab is active

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update active tab on click
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12 top-nav mb-3">
          <div className="custom-tabsa border-0 bg-white rounded overflow-hidden shadow-sm p-2 c-t-order">
            {/* Navigation Tabs */}
            <ul className="nav nav-tabs">
              <li className="nav-item rounded-circle">
                <a
                  className={`nav-link ${activeTab === 'all' ? 'active' : ''} border-0 text-dark py-3`}
                  onClick={() => handleTabClick('all')}
                  href="#"
                >
                  <FaList className="mr-2 text-success mb-0" /> All
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'progress' ? 'active' : ''} border-0 text-dark py-3`}
                  onClick={() => handleTabClick('progress')}
                  href="#"
                >
                  <FaClock className="mr-2 text-warning mb-0" /> InProcess
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'intransit' ? 'active' : ''} border-0 text-dark py-3`}
                  onClick={() => handleTabClick('intransit')}
                  href="#"
                >
                  <FaClock className="mr-2 text-success mb-0" /> InTransit
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'delivered' ? 'active' : ''} border-0 text-dark py-3`}
                  onClick={() => handleTabClick('delivered')}
                  href="#"
                >
                  <FaCheck className="mr-2 text-success mb-0" /> Delivered
                </a>
              </li>
            </ul>

            <div className="tab-content col-md-12 mt-3">
              {activeTab === 'all' && (
                <div className="tab-pane active" id="all">
                  <div><div class="p-3 rounded shadow-sm bg-white">
                    <div class="d-flex border-bottom pb-3 m-d-flex justify-content-between">
                      <div class="d-flex">
                      <div class="text-muted mr-3">
                        <img
                          alt="#"
                          src={NotFound}
                          class="img-fluid order_img rounded"
                        />
                      </div>
                      <div>
                        <p class="mb-0 font-weight-bold">
                          <a class="text-dark">India Gate Basmati Rice Dubar</a>
                        </p>
                        <p class="mb-0">
                          <span><FaMapMarker className="mr-2 text-muted" /></span> IT Park, 28, Indore - Dhar Rd, Sinhasa, Indore, Madhya Pradesh 452013, India
                        </p>
                        <p>ORDER 67b8780d8048f</p>
                        <p class="mb-0 small view-det">
                          <a href="https://ebasketweb.siswebapp.com/pending_order?id=67b8780d8048f" className='small font-weight-bold text-center ' >View Details</a>
                        </p>
                      </div>
                      </div>
                      <div class="ml-auto ord-com-btn">
                        <p class="bg-pending text-white py-1 px-2 rounded small mb-1">InProcess</p>
                        <p class="small font-weight-bold text-center">
                          <i class="feather-clock"></i> Fri Feb 21 2025
                        </p>
                        <p class="small font-weight-bold text-center otp-box badge badge-danger py-2 px-3">
                          OTP : 677055
                        </p>
                      </div>
                    </div>

                    <div class="d-flex pt-3 m-d-flex justify-content-between">

                    <div class="text-muted m-0 ml-auto mr-3 small">
                        <span class="text-dark font-weight-bold">1 items</span>
                      </div>

                      <div class="text-muted m-0 ml-auto mr-3 small">
                        Total Payment
                        <span class="text-dark font-weight-bold">$1137.54</span>
                      </div>

                    </div>
                  </div>
                  </div>
                  
                  <p>All orders content goes here.</p>
                </div>
              )}

              {activeTab === 'progress' && (
                <div className="tab-pane active" id="progress">
                  <p>Orders that are InProcess go here.</p>
                </div>
              )}

              {activeTab === 'intransit' && (
                <div className="tab-pane active" id="intransit">
                  <p>Orders that are InTransit go here.</p>
                </div>
              )}

              {activeTab === 'delivered' && (
                <div className="tab-pane active" id="delivered">
                  <p>Orders that are Delivered go here.</p>
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
