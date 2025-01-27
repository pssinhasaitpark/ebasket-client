import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import delivery from '../asset/images/swift_delivery.png'
import order from '../asset/images/order_online.png'
import tracking from '../asset/images/live+tracking.png'

import './Setlocation.css'
const Setlocation = () => {
    return (
        <>
            <div className='set-location-main-container'>
                <Container>
                    <Row>
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