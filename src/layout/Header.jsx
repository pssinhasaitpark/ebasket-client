import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown, Row, Col, Form, NavLink } from 'react-bootstrap';
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
import './Header.css'
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <Navbar expand="lg" className="">
        <div className="bg-transparent    text-dark container-fluid  ">
          <Container >
            <Row className='align-items-center p-3'>
              <Col lg={2} xs={4}>
                <Navbar.Brand href="#home">
                  <div className='fw-bold float-start fs-1 '>
                    <img src={Logo} alt="" />
                  </div>
                </Navbar.Brand>
              </Col>

              <Col lg={3} xs={4} >
                <div className='search-bar-div d-flex align-items-center mt-2'>
                  
                    <Form className='navbar-input ms-4 pt-1 '>
                    <div className='search-icon '>
                    <span>
                      <img src={location} alt="" className='w-auto ms-1 mt-2' height="25" width="25" />
                    </span>
                     </div>

                      <Form.Control
                        type="text"
                        placeholder="Enter Your Location"
                        aria-label="Disabled input example"
                        className='border border-success p-2'
                        // readOnly 
                        />
                    </Form>
                  
                  </div>
              </Col>

              <Col lg={7} xs={4}>
                <div className='d-flex align-items-center justify-content-end ps-5 pt-2'>

                  <ul className="navbar-menu navbar-nav mx-auto  mb-lg-0">
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
                            <Dropdown.Toggle  className=' bg-transparent border-0' id="dropdown-basic">
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
                        <div>
                          <button className="btn  dropdown-toggle ps-0 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            English
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item " href="#">English</a></li>
                            <li><a className="dropdown-item " href="#">Arabic</a></li>

                          </ul>
                        </div>
                      </div>
                    </li>

                    <div>


                      <button onClick={handleShow} className='bg-transparent border-0'>
                        <input id="toggle1" type="checkbox" />
                        <label class="hamburger1" for="toggle1">
                          <div class="top"></div>
                          <div class="meat"></div>
                          <div class="bottom"></div>
                        </label>
                      </button>
                      <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton className='bg-success'>
                          <Offcanvas.Title className='text-white'>eBasket</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='p-0'>
                          <div>
                            <ul class="link-group ps-1 ">

                              <li class="list-group-item py-2 border-bottom">
                                <div className=''>
                                  <a class="link1 text-decoration-none text-secondary" href="">
                                    <div>
                                      <img src={home} alt="" />
                                    </div>
                                    Home Page</a>
                                </div>
                              </li>
                              <li class="list-group-item py-2 border-bottom">
                                <div>
                                  <a class="link1 text-decoration-none text-secondary" href="">
                                    <div>
                                      <img src={phone} alt="" />
                                    </div>
                                    Contact Us</a>
                                </div>
                              </li>
                              <li class="list-group-item py-2 border-bottom">
                                <div className='d-flex'>
                                  <a class="link1 text-decoration-none text-secondary" href="">
                                    <div>
                                      <img src={phone} alt="" />
                                    </div>
                                    Login</a>
                                </div>
                              </li>
                              <li class="list-group-item py-2 border-bottom">
                                <div>
                                  <a class="link1 text-decoration-none text-secondary" href="">
                                    <div>
                                      <img src={phone} alt="" />
                                    </div>
                                    Register</a>
                                </div>
                              </li>
                              <li class="list-group-item py-4 border-bottom">
                                <div>
                                  <span >
                                    <p className='text-center'>V:2.1</p>
                                  </span>
                                </div>
                              </li>
                            </ul>


                            <ul className='d-flex position-absolute bottom-0 border-top w-100 justify-content-evenly p-0'>
                              <li class="list-group-item py-4 ">
                                <div className='position-relative'>
                                  <a href="#">
                                    <div>
                                      <img src={home} alt="" />
                                    </div>
                                    <a class=" text-decoration-none text-secondary text-center p-2" href="">Home</a>
                                  </a>
                                </div>
                              </li>
                              <li class="list-group-item py-4 ">
                                <div className='position-relative'>
                                  <div>
                                    <img src={phone} alt="" />
                                  </div>
                                  <a class=" text-decoration-none text-secondary text-center p-2" href="">Help</a>
                                </div>
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