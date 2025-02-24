import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap';
import facebook from '../asset/images/facebook.svg'
import insta from '../asset/images/instagram.svg'
import twitter from '../asset/images/twitter.svg'
import youtube from '../asset/images/youtube.svg'
import Logo from '../asset/images/ebakset-footer-logo.png'
import mail from '../asset/images/mail.svg'
import call from '../asset/images/phone-call.svg'
import search from '../asset/images/searchfooter.svg'
import app from '../asset/images/appstore.png'
import playmarket from '../asset/images/playmarket.png'
import './Footer.css'
import { Link , useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
const Footer = () => {
    const navigate = useNavigate();
      const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  
    const handleProfileClick = () => {
      navigate(isSignedIn ? '/profile' : '/login');
    };
    
    return (
        <>
            <div className='w-100'>
                <footer className='footer position-relative mt-4'>
                    <div className='footer-outer py-5'>

                        <Container className='footer-container'>
                            {/* Upper Part (Logo and Links) */}
                            <Row className="mb-4 border-bottom py-4">
                                <Col md={6}>
                                    <div className='footer-upper-wrapper-left'>
                                        <div className='logo-image mb-1'>
                                            <img src={
                                                Logo} alt="" />
                                        </div>
                                        <p className='para mt-4 '>Fill your cart with ease! We've got fresh groceries delivered  to your door.</p>
                                        <div className="social-links ">
                                            <ul className="social-list">
                                                <li>
                                                    <div className='image facebook'>
                                                      <a href="https://www.facebook.com/"><img src={facebook} alt="" /></a>

                                                    </div>
                                                </li>
                                                <li>
                                                <div className='image instagram'>
                                                      <a href="https://www.instagram.com/"><img src={insta} alt="" /></a>

                                                    </div>
                                                </li>
                                                <li>
                                                <div className='image youtube'>
                                                      <a href="https://www.youtube.com/"><img src={youtube} alt="" /></a>

                                                    </div>
                                                </li>
                                                <li>
                                                <div className='image twitter'>
                                                      <a href="https://www.twitter.com/"><img src={twitter} alt="" /></a>

                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </Col>
                                <Col md={3}  className=''>
                                    {/* Navigation Links */}
                                    <div className='footer-upper-wrapper-mid'>
                                        <h5 className='text-white mb-3 services-heading'>SERVICES</h5>
                                        <ul className="services-list p-0">
                                            <li><Link to={'/contactus'} href="" >Contact us</Link></li>
                                            <li><Link to={'/terms'} href="">Term & Condition</Link></li>
                                            <li><Link to={'/aboutus'} href="">About us</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className='footer-upper-wrapper-mid '>
                                        <h5 className='text-white mb-3 services-heading'>FOR USERS</h5>
                                        <ul className="services-list p-0">
                                            <li><Link href="" to="/login">User Login</Link></li>
                                            <li><Link href="" to="/signup">User Register</Link></li>
                                            <li><a href="" onClick={handleProfileClick}
                                            >User Profile</a></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                            

                            {/* Mid Part (Services) */}
                            <Row className="mb-4 py-4">
                                <Col lg={4}>
                                    <div className='contact-services d-flex justify-content-center text-center flex-column align-items-center'>
                                        <div className='p-2 bg-white mb-3 '>
                                            <img src={mail} alt="email" />
                                        </div>
                                        <h5 className='text-white fw-bold mb-3'>E-mail</h5>
                                        <a href="mailto:info@siddhiinfosoft.com" className='text-decoration-none mb-2'>
                                            <p className='p-0 m-0 text-white'>info@siddhiinfosoft.com</p>
                                        </a>
                                    </div>
                                </Col>

                                <Col lg={4}>
                                    <div className='contact-services d-flex justify-content-center text-center flex-column align-items-center'>
                                        <div className='p-2 bg-white mb-3 '>
                                            <img src={call} alt="email" />
                                        </div>
                                        <h5 className='text-white fw-bold mb-3'>Contact</h5>
                                        <a href="tel:91+6232987451" className='text-decoration-none mb-2'> 
                                            <p className='p-0 m-0 text-white '>6232987451</p>
                                            </a>

                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className='contact-services d-flex justify-content-center text-center flex-column align-items-center'>
                                        <div className='p-2 bg-white mb-3'>
                                            <img src={search} alt="email" />
                                        </div>
                                        <h5 className='text-white fw-bold mb-3'>Where we are</h5>
                                        <p className='p-0 m-0 text-white mb-2'>Ahmedabad, Gujrat, India</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <section className='footer-bottom'>
                          <div className='footer-bottom-wrapper container-fluid  py-3 position-absolute '>
                         <Container>
                            <Row className='bottom-row'>
                                <Col className="bottom-col-left col-lg-8 col-sm-6 text-center text-white d-flex">
                                    <p>&copy; 2025 Your Company. All rights reserved.</p>
                                </Col>
                                <Col className='col-lg-4 col-sm-6 pe-0'>
                                <div className='bottom-col-right d-flex justify-content-end gap-3'>

                                <div className='image'> 
                                    <a href="">
                                        <img src={playmarket} alt="" />
                                    </a>
                                </div>
                         
                                <div className='image '>
                                <a href="">
                                        <img src={app} alt="" />
                                    </a>
                                </div>
                                </div>
                                </Col>
                            </Row>
                         </Container>
                         
                          </div>
                        </section> 
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer