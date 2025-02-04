import React, { useState } from 'react';
import { Tab } from 'react-bootstrap';
import { FaList, FaClock, FaCheck } from 'react-icons/fa'; 

const OrderTabs = () => {
  const [activeTab, setActiveTab] = useState('all'); 

  const handleTabClick = (tab) => {
    setActiveTab(tab); 
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12 top-nav mb-3">
          <div className="custom-tabsa border-0 bg-white rounded overflow-hidden shadow-sm p-2 c-t-order">
            <ul className="nav nav-tabs">
              <li className="nav-item rounded-circle ">
                <a
                  className={`nav-link ${activeTab === 'all' ? 'active' : ''} border-0 text-dark py-3`}
                  onClick={() => handleTabClick('all')}
                  href="#"
                >
                  <FaList className="mr-2 text-success mb-0 " /> All
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

            <div className="tab-content col-md-12">
              {/* <div className={`tab-pane fade ${activeTab === 'all' ? 'show active' : ''}`}>
                <div className="order-body">
                  <div id="all_orders">
                    <div className="no-result">
                      <img
                        src="https://ebasketweb.siswebapp.com/img/no-result.png"
                        alt="No result"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTabs;
