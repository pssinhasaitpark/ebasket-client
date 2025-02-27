import React, { useState } from 'react'
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
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../store/slices/authSlice';


const DemoHeader= () => {
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

      <Navbar expand="lg" className=" pb-0 pt-0 navbar">
        <div className="bg-transparent   text-dark container-fluid  ">
          <Container >
            <Row className='header-container-row d-flex align-items-center py-2'>
              <Col lg={2} className='col-5 ps-0' >
                <Navbar.Brand href="/" className='m-0'>
                  <div className='logo fw-bold   fs-1 '>
                    <img src={Logo} alt="" />
                  </div>
                </Navbar.Brand>
              </Col>

              <Col lg={3} className='col-5 ps-0' >
                <div className='search-bar-div d-flex align-items-center  py-2'>
                  <form className='header-search-form'>

                    <div className="input-group form-container border border-success rounded-2">
                      <div className="input-group-prepend">
                        <span className="location-image">
                          <img src={location} alt="search" className='' />
                        </span>
                      </div>

                      <input
                        type="text"
                        className="form-control input border-0"
                        placeholder="Enter Your Location"

                      />


                      {/* <GooglePlacesAutocomplete
                      apiKey="AIzaSyAcwKFufS7wlIdt8u8hv_lJirS5UY6mWpE" 
                      
                      onPlaceSelected={(place) => {
                        console.log(place); 
                      }}
                      className="form-control input border-0"
                      placeholder="Enter Your Location"
                    /> */}

                      {/* Suggestions dropdown */}

                    </div>



                  </form>
                </div>
              </Col>

              {!isSignedIn ? (
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
                            activeClassName="active"

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
                          <Link to={"/offers"} className="nav-link " activeClassName="active">
                            Offers
                          </Link>
                        </div>
                      </li>

                      <li className="nav-item">
                        <div className='d-flex align-items-center me-2'>
                          <div>
                            <img src={user} alt="" />
                          </div>
                          <Link  to={"/login"} className="nav-link " activeClassName="active">
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
                            activeClassName="active">
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

                                <li className="list-group-item  border-bottom">
                                  <Link to={'/'} className="link1" >
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
                                <li className="list-group-item border-bottom">
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
                                <li className="list-group-item  border-bottom">
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
                                <li className="list-group-item  border-bottom">
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
                                <li className="list-group-item border-bottom">
                                  <div className='version py-5'>
                                    <span >
                                      <p >V:2.1</p>
                                    </span>
                                  </div>
                                </li>
                              </ul>


                              <ul className='sidebar-bottom d-flex position-absolute bottom-0 border-top w-100  p-0 mb-0'>
                                <li className="bottom list-group-item text-center w-50 p-2">
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
                                <li className="bottom list-group-item text-center w-50 p-2">
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
              ) :

                (
                  <Col lg={7} className='col-2 pe-0'>
                    <div className='d-flex align-items-center  justify-content-end pt-2 pr-0'>

                      <ul className="navbar-menu navbar-nav  mb-lg-0">
                        <li className="nav-item">
                          <div className='d-flex align-items-center me-2'>
                            <div>
                              <img src={search} alt="" />
                            </div>
                            <Link to={'/search'} className="nav-link " activeClassName="active">
                              Search
                            </Link>
                          </div>
                        </li>
                        <li className="nav-item ">
                          <div className='d-flex align-items-center me-2'>

                            <div>
                              <img src={offer} alt="" />
                            </div>
                            <Link to={"/offers"} className="nav-link " activeClassName="active">
                              Offers
                            </Link>
                          </div>
                        </li>


                        <li className="nav-item">

                          <div className='dropdown-container d-flex align-items-center me-2'>
                            <a >
                              <div className='item-image '>
                                <img src={user} alt="" />
                              </div>
                            </a>

                            <Link to={'/profile'} className="nav-link " activeClassName="active">
                              Hii <span>Rajveer</span>
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
                                  <Link  to={'/myaccount'} >My Account</Link>
                                  <Link  to={'/notification'} >Notification</Link>
                                  <Link  to={'/support'} >Delivery Support</Link>
                                  <Link  to={'/contactus'}  >Contact Us</Link>
                                  <Link  to={'/aboutus'} >About us</Link>
                                  <Link  to={'/help'} >Help</Link>
                                  <Link  to={'/terms'} >Term of use</Link>
                                  <Link  to={'/privacy'} >Privacy policy</Link>
                                  <Link  to={'/refund'} >Refund policy</Link>
                                  <Link  to={'/signup'} onClick={handleSignOut}>Logout</Link>


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
                            <Link to={"/checkout"} className="nav-link " activeClassName="active">
                              Cart
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
                                <li><a className="dropdown-item m-0  " href="#">English</a></li>
                                <li><a className="dropdown-item m-0" href="#">Arabic</a></li>

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
                                    <Link to={'/'} className="link1" >
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
                                  <li className="list-group-item  border-bottom">
                                    <Link to={'/orders'} className="link1" >
                                      <div className='link1-div'>
                                        <div className='image'>
                                          <img src={home} alt="" />
                                        </div>
                                        <span>

                                          My Orders
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li className="list-group-item  border-bottom">
                                    <Link to={'/transaction'} className="link1" >
                                      <div className='link1-div'>
                                        <div className='image'>
                                          <img src={home} alt="" />
                                        </div>
                                        <span>

                                          My Transactions
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li className="list-group-item  border-bottom">
                                    <Link to={'/favourite'} className="link1" >
                                      <div className='link1-div'>
                                        <div className='image'>
                                          <img src={home} alt="" />
                                        </div>
                                        <span>

                                          Favorite items
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li className="list-group-item  border-bottom">
                                    <Link to={'/address'} className="link1" >
                                      <div className='link1-div'>
                                        <div className='image'>
                                          <img src={home} alt="" />
                                        </div>
                                        <span>

                                          Address Book
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li className="list-group-item  border-bottom">
                                    <Link to={'/profile'} className="link1" >
                                      <div className='link1-div'>
                                        <div className='image'>
                                          <img src={home} alt="" />
                                        </div>
                                        <span>

                                          Profile
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li className="list-group-item border-bottom">
                                    <Link to={'/contactus'} className="link1 " >
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

                                  <li className="list-group-item  border-bottom">
                                    <Link className="link1 "  to={'/login'} onClick={handleSignOut}>
                                      <div className='link1-div'>
                                        <div className='image'>
                                          <img src={user} alt="" />
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
                                        <p >V:2.1</p>
                                      </span>
                                    </div>
                                  </li>
                                </ul>


                                <ul className='sidebar-bottom d-flex position-absolute bottom-0 border-top w-100  p-0 mb-0'>
                                  <li className="bottom list-group-item text-center w-50 p-2">
                                    <Link to={'/'}  className='text-decoration-none  text-secondary text-center'>
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

                                  <li className="bottom list-group-item text-center w-50 p-2">
                                    <Link to={'/help'}  className=" text-decoration-none text-secondary text-center ">

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
                )
              }
            </Row>
          </Container>
        </div>
      </Navbar>



    </>
  )
}

export default DemoHeader