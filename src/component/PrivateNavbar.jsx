import React from 'react'
import { useEffect, useState } from 'react'
import { Col, } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import search from '../asset/images/search.svg'
import user from '../asset/images/user.svg';
import phone from '../asset/images/phone.svg'
import home from '../asset/images/home.svg'
import offer from '../asset/images/discount.png'
import shopping from '../asset/images/shopping-cart.svg';
import glob from '../asset/images/globe.svg'
import downarrow from '../asset/images/chevron-down.svg'
import '../layout/Header.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../store/slices/authSlice';
import axios from 'axios';
import { IoHomeOutline } from "react-icons/io5";
import { LuBook } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { RiListUnordered } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
// import { addToCart, removeFromCart, updateCartQuantity } from '../store/slices/cart-slice';
const BASE_URL = process.env.REACT_APP_BASE_URL;


const PrivateNavbar = () => {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.auth.username); // Get username from Redux
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const totalQuantity = useSelector((state) => state.totalQuantity.totalQuantity); // Access totalQuantity from Redux


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handleSignOut = () => {
    dispatch(signOut());
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/me`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        });
        setUserData(response.data.user); // Assuming the response contains a user object
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch user data');
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
      <Col lg={7} className='col-2 pe-0'>
        <div className='d-flex align-items-center  justify-content-end pt-2 pr-0'>

          <ul className="navbar-menu navbar-nav  mb-lg-0">
            <li className="nav-item">
              <div className='d-flex align-items-center me-2'>
                <div>
                  <img src={search} alt="" />
                </div>
                <Link to={'/search'} className="nav-link " activeclassname="active">
                  Search
                </Link>
              </div>
            </li>
            <li className="nav-item ">
              <div className='d-flex align-items-center me-2'>

                <div>
                  <img src={offer} alt="" />
                </div>
                <Link to={"/offers"} className="nav-link " activeclassname="active">
                  Offers
                </Link>
              </div>
            </li>


            <li className="nav-item">

              <div className='dropdown-container d-flex align-items-center me-2'>
                <a >
                  <div className='item-image '>
                    {/* {console.log("hii 12345",userData)} */}
                    <img src={userData?.image || user} alt="" />
                  </div>
                </a>

                <Link to={'/profile'} className="nav-link username" activeclassname="active">
                  Hii <span>{userData?.fullName || 'Guest'}</span>
                </Link>



              </div>

            </li>

            <li className="nav-item ms-1">
              <div className='main-div'>
                <div className="dropdown-container">


                  {/* Down Arrow Icon */}
                  <div className="dropdown-icon">
                    <a >
                      <img src={downarrow} alt="" />
                    </a>
                    {/* Dropdown Menu */}
                    <div className='dropdown-menuu'>
                      <Link to={'/profile'} >My Account</Link>
                      <Link to={'/notification'} >Notification</Link>
                      <Link to={'/support'} >Delivery Support</Link>
                      <Link to={'/contactus'}  >Contact Us</Link>
                      <Link to={'/aboutus'} >About us</Link>
                      <Link to={'/help'} >Help</Link>
                      <Link to={'/terms'} >Term of use</Link>
                      <Link to={'/privacy'} >Privacy policy</Link>
                      <Link to={'/refund'} >Refund policy</Link>
                      <Link to={'/login'} onClick={handleSignOut}>Logout</Link>


                    </div>
                  </div>
                </div>

              </div>

            </li>

            <li className="nav-item">
              <div className='d-flex align-items-center me-2'>
                <div>
                  <img src={shopping} alt="" />
                </div>
                <Link to={"/checkout"} className="nav-link " activeclassname="active">
                  Cart
                  {totalQuantity > 0 &&(
                    <span
                      className="badge rounded-circle count-badge"
                      style={{ top: '-10px', fontSize: '12px', padding: '5px 10px' }}
                    >
                      {totalQuantity}
                    </span>
                  )}
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <div className="dropdown d-flex align-items-center text-dark me-2">
                <div>
                  <img src={glob} alt="" />
                </div>
                <div className='ms-2'>
                  <button className="language-btn btn dropdown-toggle ps-0 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className='text-secondary'>
                      English
                    </span>
                  </button>
                  <ul className="language dropdown-menu m-0 p-0">
                    <li><a className="dropdown-item m-0  " href="">English</a></li>
                    <li><a className="dropdown-item m-0" href="">Arabic</a></li>

                  </ul>
                </div>
              </div>
            </li>
            <div>
            <Button onClick={handleShow} className='hemburger-button bg-transparent border-0'>
                     
                            <div className={`hamburger1 ${show ? 'open' : ''}`}>
                              <div className="top"></div>
                              <div className="meat"></div>
                              <div className="bottom"></div>
                            </div>
                          </Button>
                          <Offcanvas show={show} onHide={handleClose}  >
                            <Offcanvas.Header closeButton >
                              <Offcanvas.Title className='text-white'>eBasket</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='p-0'>
                              <div>
                                <ul className="link-group p-0 ">
                                  <li className="list-group-item  border-bottom">
                                    <Link to={'/'} className="link1" onClick={handleClose}>
                                      <div className='link1-div'>
                                        <div className='image'>
                                        <IoHomeOutline className='icon' />
                                        </div>
                                        <span>

                                          Home Page
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li className="list-group-item  border-bottom" >
                                    <Link to={'/orders'} className="link1"  onClick={handleClose}>
                                      <div className='link1-div'>
                                        <div className='image'>
                                       <RiListUnordered />
                                        </div>
                                        <span>

                                          My Orders
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li className="list-group-item  border-bottom">
                                    <Link to={'/transaction'} className="link1"  onClick={handleClose}>
                                      <div className='link1-div'>
                                        <div className='image'>
                                        <RiListUnordered />
                                        </div>
                                        <span>

                                          My Transactions
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li className="list-group-item  border-bottom">
                                    <Link to={'/favorite-products'} className="link1"  onClick={handleClose}>
                                      <div className='link1-div'>
                                        <div className='image'>
                                        
                                        <LuHeart />
                                        </div>
                                        <span>

                                          Favorite items
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li className="list-group-item  border-bottom">
                                    <Link to={'/delivery-address'} className="link1"  onClick={handleClose}>
                                      <div className='link1-div'>
                                        <div className='image'>
                                        <LuBook className='icon'/>
                                        </div>
                                        <span>

                                          Address Book
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li className="list-group-item  border-bottom">
                                    <Link to={'/profile'} className="link1"  onClick={handleClose}>
                                      <div className='link1-div'>
                                        <div className='image'>
                                       
<FiUser />

                                        </div>
                                        <span>

                                          Profile
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li className="list-group-item border-bottom">
                                    <Link to={'/contactus'} className="link1 "  onClick={handleClose}>
                                      <div className='link1-div'>
                                        <div className='image'>
                                        <FiUser />
                                        </div>
                                        <span>

                                          Contact Us
                                        </span>
                                      </div>
                                    </Link>
                                  </li>

                                  <li className="list-group-item  border-bottom"onClick={handleClose}>
                                    <Link className="link1 "   to={'/login'} onClick={handleSignOut}>
                                      <div className='link1-div'>
                                        <div className='image'>
                                        <FiUser />
                                        </div>
                                        <span>

                                          Logout
                                        </span>
                                      </div>
                                    </Link>
                                  </li>




                                  <li className="list-group-item border-bottom">
                                    <div className='version py-5'>
                                      <span >
                                        <p >V:1.1</p>
                                      </span>
                                    </div>
                                  </li>
                                </ul>


                                <ul className='sidebar-bottom d-flex position-absolute bottom-0 border-top w-100  p-0 mb-0'>
                                  <li className="bottom list-group-item text-center w-50 p-2">
                                    <Link to={'/'}  className='text-decoration-none  text-secondary text-center' onClick={handleClose}>
                                      <div className='bottom-home position-relative'>
                                        <div className=''>
                                        <IoHomeOutline className='icon' />
                                        </div>

                                        <p >
                                          Home
                                          
                                        </p>

                                      </div>
                                    </Link>
                                  </li>

                                  <li className="bottom list-group-item text-center w-50 p-2">
                                    <Link to={'/help'}  className=" text-decoration-none text-secondary text-center " onClick={handleClose}>

                                      <div className='position-relative'>
                                        <div>
                                      
                                        <IoCallOutline />
                                        </div>

                                        <p>
                                          Help
                                        </p>


                                      </div>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </Offcanvas.Body>
                          </Offcanvas>
                        </div>
                      </ul>
                    </div>
                  </Col>
   </>
  )
}

export default PrivateNavbar;