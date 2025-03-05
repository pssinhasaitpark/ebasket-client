import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

function Razorpay() {

    return (

        <>
            <div>

                <Container>
                    <div className='mt-5 main-contain'>
                        <h3 className='main-heading'>Pay with Razorpay</h3>
                    </div>
                    <div className='transaction-container py-2 mt-4'>
                        <Row className=' text-center flex-column w-100'>
                            <Col className='d-flex justify-content-between'>
                                <h3 className='font-weight-bold h4 m-0 text-light'>PAY WITH</h3>
                                <h3 className='font-weight-bold h4 m-0 text-light'>TOTAL</h3>
                            </Col>
                        </Row>
                    </div>
                    <Col className='border d-flex justify-content-between'>
                        <h4 className=' h5 my-2'>Razorpay Payment</h4>
                        <h4 className=' h5 my-2'>Razorpay Payment</h4>
                    </Col>
                    {/* <div className='d-flex justify-content-between mt-4'>
                        <Button className='bg-transparent text-success border-dark shodow-sm'>
                            Previous
                        </Button>


                        <Button className='bg-transparent text-success border-dark shadow-sm'

                        >
                            Next
                        </Button>

                    </div> */}
                </Container>
            </div>
        </>
    );
}

export default Razorpay;