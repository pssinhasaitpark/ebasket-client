import React from 'react'
import  { useEffect , useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown, Row, Col, Form, NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Logo from '../asset/images/logo_web.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
import search from '../asset/images/search.svg'
import location from '../asset/images/location.svg'
import user from '../asset/images/user.svg';
import phone from '../asset/images/phone.svg'
import home from '../asset/images/home.svg'
import offer from '../asset/images/discount.png'
import shopping from '../asset/images/shopping-cart.svg';
import glob from '../asset/images/globe.svg'
import downarrow from '../asset/images/chevron-down.svg'
// import GooglePlacesAutocomplete from 'react-google-autocomplete';
import '../layout/Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../store/slices/authSlice';

const PublicNavbar = () => {
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
      const navigate = useNavigate();
      const isSignedIn = useSelector((state) => state.auth.isSignedIn);
      const dispatch = useDispatch();
    
      const handleSignIn = () => {
        dispatch(signIn()); // Update Redux state to signed in
      };
    
      const handleSignOut = () => {
        dispatch(signOut()); // Update Redux state to signed out
      };


  
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
                          <Link

                            to={'/search'}
                            className="nav-link "
                            activeclassname="active"

                          >
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
                        <div className='d-flex align-items-center me-2'>
                          <div className='item-image '>
                            <img src={user} alt="" />
                          </div>
                          <Link  to={"/login"} className="nav-link " activeclassname="active">
                            Sign In
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

                                <Link to={'/support'} >Delivery Support</Link>
                                <Link to={'/contactus'} >Contact Us</Link>
                                <Link to={'/aboutus'} >About us</Link>
                                <Link to={'/help'} >Help</Link>
                                <Link to={'/terms'} >Term of use</Link>
                                <Link to={'/privacy'} >Privacy policy</Link>
                                <Link to={'/refund'} >Refund policy</Link>

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
                          <NavLink
                            onClick={() => navigate(isSignedIn ? '/checkout' : '/login')}

                            className="nav-link "
                            activeclassname="active">
                            Cart
                          </NavLink>
                        </div>
                      </li>

                      <li className="nav-item">
                        <div className="dropdown d-flex align-items-center text-dark me-2">
                          <div>
                            <img src={glob} alt="" />
                          </div>
                          <div className='ms-2'>
                            <button className="language-btn btn  dropdown-toggle ps-0 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <span className='text-secondary'>
                                English
                              </span>
                            </button>
                            <ul className="language dropdown-menu m-0 p-0">
                              <li><a className="dropdown-item m-0  " >English</a></li>
                              <li><a className="dropdown-item m-0" >Arabic</a></li>

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

                                <li className="list-group-item  border-bottom" onClick={handleClose}>
                                  <Link to={'/'} className="link1"  >
                                    <div className='link1-div'>
                                      <div className='image'>
                                        <img src={home} alt="" />
                                      </div>
                                      <span>

                                        Home Page
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li className="list-group-item border-bottom" onClick={handleClose}>
                                  <Link className="link1 " to={'/contactus'}  >
                                    <div className='link1-div'>
                                      <div className='image'>
                                        <img src={user} alt="" />
                                      </div>
                                      <span>

                                        Contact Us
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li className="list-group-item  border-bottom" onClick={handleClose}>
                                  <Link to={'/login'} className="link1 "  >
                                    <div className='link1-div'>
                                      <div className='image'>
                                        <img src={user} alt="" />
                                      </div>
                                      <span>

                                        Login
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li className="list-group-item  border-bottom" onClick={handleClose}>
                                  <Link to={'/signup'} className="link1 "  >
                                    <div className='link1-div'>
                                      <div className='image'>
                                        <img src={user} alt="" />
                                      </div>
                                      <span>

                                        Register
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li className="list-group-item border-bottom" onClick={handleClose}>
                                  <div className='version py-5'>
                                    <span >
                                      <p >V:2.1</p>
                                    </span>
                                  </div>
                                </li>
                              </ul>


                              <ul className='sidebar-bottom d-flex position-absolute bottom-0 border-top w-100  p-0 mb-0'>
                                <li className="bottom list-group-item text-center w-50 p-2" onClick={handleClose}>
                                  <Link to={'/'}  className='text-decoration-none  text-secondary text-center' onClick={() => navigate('/')}>
                                    <div className='bottom-home position-relative'>
                                      <div className=''>
                                        <img src={home} alt="" />
                                      </div>

                                      <p >
                                        Home
                                      </p>

                                    </div>
                                  </Link>
                                </li>
                                <li className="bottom list-group-item text-center w-50 p-2" onClick={handleClose}>
                                  <Link to={'/help'}  className=" text-decoration-none text-secondary text-center "  >

                                    <div className='position-relative'>
                                      <div>
                                        <img src={phone} alt="" />
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

export default PublicNavbar