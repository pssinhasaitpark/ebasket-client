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
import GooglePlacesAutocomplete from 'react-google-autocomplete';
import './Header.css'
// import { Button } from 'bootstrap/dist/js/bootstrap.min';
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
 return (
    <>

      <Navbar expand="lg" className=" pb-0 navbar">
        <div className="bg-transparent   text-dark container-fluid  ">
          <Container >
            <Row className='header-container-row d-flex align-items-center py-2'>
              <Col lg={2} className='col-5 ps-0' >
                <Navbar.Brand href="#home" className='m-0'>
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

              <Col lg={7} className='col-2 pe-0'>
                <div className='d-flex align-items-center  justify-content-end pt-2 pr-0'>

                  <ul className="navbar-menu navbar-nav  mb-lg-0">
                    <li className="nav-item">
                      <div className='d-flex align-items-center me-2'>
                        <div>
                          <img src={search} alt="" />
                        </div>
                        <NavLink to="/sign-in" className="nav-link " activeClassName="active">
                          Search
                        </NavLink>
                      </div>
                    </li>
                    <li className="nav-item ">
                      <div className='d-flex align-items-center me-2'>

                        <div>
                          <img src={offer} alt="" />
                        </div>
                        <NavLink to="/offers" className="nav-link " activeClassName="active">
                          Offers
                        </NavLink>
                      </div>
                    </li>

                    <li className="nav-item">
                      <div className='d-flex align-items-center me-2'>
                        <div>
                          <img src={user} alt="" />
                        </div>
                        <NavLink to="/sign-in" className="nav-link " activeClassName="active">
                          Sign In
                        </NavLink>
                        <div>
                          <Dropdown >
                            <Dropdown.Toggle className=' bg-transparent border-0 p-0' id="dropdown-basic">
                              <a href="#" className='sign-in-btn'>
                                <img src={downarrow} alt="" />
                              </a>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='menu-items'>
                              <Dropdown.Item href="#/action-1">Delibery Support</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Contact Us</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">About us</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Term of use</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Privacy policy</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Refund policy</Dropdown.Item>



                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item">
                      <div className='d-flex align-items-center me-2'>
                        <div>
                          <img src={shopping} alt="" />
                        </div>
                        <NavLink to="/cart" className="nav-link " activeClassName="active">
                          Cart
                        </NavLink>
                      </div>
                    </li>

                    <li className="nav-item">
                      <div class="dropdown d-flex align-items-center text-dark me-2">
                        <div>
                          <img src={glob} alt="" />
                        </div>
                        <div className='ms-2'>
                          <button className="btn  dropdown-toggle ps-0 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                    {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}

                      <Button onClick={handleShow} className='hemburger-button bg-transparent border-0'>
                        <input id="toggle1" type="checkbox" />
                        <label class="hamburger1" for="toggle1">
                          <div class="top"></div>
                          <div class="meat"></div>
                          <div class="bottom"></div>
                        </label>
                      </Button>
                      <Offcanvas show={show} onHide={handleClose}  >
                        <Offcanvas.Header closeButton >
                          <Offcanvas.Title className='text-white'>eBasket</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='p-0'>
                          <div>
                            <ul class="link-group p-0 ">

                              <li class="list-group-item  border-bottom">
                                <a class="link1" href="">
                                  <div className='link1-div'>
                                    <div className='image'>
                                      <img src={home} alt="" />
                                    </div>
                                    <span>

                                      Home Page
                                    </span>
                                  </div>
                                </a>
                              </li>
                              <li class="list-group-item border-bottom">
                                <a class="link1 " href="">
                                  <div className='link1-div'>
                                    <div className='image'>
                                      <img src={user} alt="" />
                                    </div>
                                    <span>

                                      Contact Us
                                    </span>
                                  </div>
                                </a>
                              </li>
                              <li class="list-group-item  border-bottom">
                                <a class="link1 " href="">
                                  <div className='link1-div'>
                                    <div className='image'>
                                      <img src={user} alt="" />
                                    </div>
                                    <span>

                                      Login
                                    </span>
                                  </div>
                                </a>
                              </li>
                              <li class="list-group-item  border-bottom">
                                <a class="link1 " href="">
                                  <div className='link1-div'>
                                    <div className='image'>
                                      <img src={user} alt="" />
                                    </div>
                                    <span>

                                      Register
                                    </span>
                                  </div>
                                </a>
                              </li>
                              <li class="list-group-item border-bottom">
                                <div className='version py-5'>
                                  <span >
                                    <p >V:2.1</p>
                                  </span>
                                </div>
                              </li>
                            </ul>


                            <ul className='sidebar-bottom d-flex position-absolute bottom-0 border-top w-100  p-0 mb-0'>
                              <li class="bottom list-group-item text-center w-50 p-2">
                                <a href="#" className='text-decoration-none  text-secondary text-center'>
                                  <div className='bottom-home position-relative'>
                                    <div className=''>
                                      <img src={home} alt="" />
                                    </div>

                                    <p >
                                      Home
                                    </p>

                                  </div>
                                </a>
                              </li>
                              <li class="bottom list-group-item text-center w-50 p-2">
                                <a href="#" class=" text-decoration-none text-secondary text-center ">

                                  <div className='position-relative'>
                                    <div>
                                      <img src={phone} alt="" />
                                    </div>

                                    <p>
                                      Help
                                    </p>


                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </Offcanvas.Body>
                      </Offcanvas>
                    </div>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Navbar>



    </>
  )
}

export default Header