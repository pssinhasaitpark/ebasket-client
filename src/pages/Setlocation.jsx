import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import delivery from '../asset/images/swift_delivery.png'
import order from '../asset/images/order_online.png'
import tracking from '../asset/images/live+tracking.png'
import image from '../asset/images/hero_img.png'
import logo from '../asset/images/logo_web.png'
import './Setlocation.css'
const Setlocation = () => {
    return (
        <>
            <header className='header'>

                <div className='set-location-header-logo'>
                    <Container>
                        <a href="#home">

                        <div className=' d-flex '>
                            <img src={logo} alt="" />
                        </div>
                        </a>
                    </Container>
                </div>
            </header>
            <div className='set-location-upper-container'>
                <Container>
                    <Row>
                        <Col className='col-lg-5 col-6'>
                            <h1 > All in one Delivery platform</h1>
                            <p>Making every day better with a complete On Demand, Multi-Service Delivery app.</p>

                            <div className="position-relative">
                                <Form.Control
                                    className="p-3 address_input"
                                    type="text"
                                    placeholder="Insert Address"
                                    // value={businessAddress}
                                    // onChange={(e) => setBusinessAddress(e.target.value)}
                                    required
                                />
                                <span class="locate-me" onclick="getCurrentLocation()">
                                    <img src="https://emartweb.siswebapp.com/img/locatleme-icon.png" />
                                    Locate Me
                                </span>
                            </div>
                            <button
                                className="set-location-btn"
                                type="button"
                                id="resend-code"

                            >
                                Continue
                            </button>
                        </Col>


                        <Col>
                            <div className='image d-flex justify-content-end'>
                                <img src={image} alt="" />
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>

            <div className='set-location-bottom-container'>
                <Container>
                    <Row >
                        <Col>
                            <div className='set-location-services d-flex text-center flex-column  bg-dark  rounded'>
                                <div>
                                    <img src={delivery} alt="" />
                                </div>
                                <h3 className='text-white mt-4 mb-4 text-light'>Swift Delivery</h3>
                                <p className='text-white'>Experience lightning-fast delivery with our app.</p>
                            </div>

                        </Col>
                        <Col>
                            <div className='set-location-services d-flex text-center flex-column  bg-dark rounded'>
                                <div>
                                    <img src={order} alt="" />
                                </div>
                                <h3 className='text-white mt-4 mb-4 text-light'>Order Online</h3>
                                <p className='text-white'>Order online from your office, home, or anywhere and get it delivered to your doorstep.</p>
                            </div>

                        </Col>
                        <Col>
                            <div className='set-location-services d-flex text-center flex-column  bg-dark rounded'>
                                <div>
                                    <img src={tracking} alt="" />
                                </div>
                                <h3 className='text-white mt-4 mb-4 text-light'>Live Order Tracking</h3>
                                <p className='text-white'>Track your order from the vendor to your doorstep. </p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>


        </>
    )
}

export default Setlocation