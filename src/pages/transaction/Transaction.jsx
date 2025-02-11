import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col, Radio } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-bootstrap/Modal';
// import './DeliveryAddress.css'
import location from '../../asset/images/deliverylocation.png'
import edit from '../../asset/images/edit.png'
import bin from '../../asset/images/bin.png'
import './Transaction.css'

const Transcation = (props) => {
   
    // Validation schema using Yup
    const validationSchema = Yup.object({

        landmark: Yup.string(),
        saveAs: Yup.string().required('Please select a save option'),
    });

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='justify-content-center'
        >

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Wallet Amount
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>



                <Formik
                    initialValues={{

                        landmark: '',
                        saveAs: '',
                    }}
                    validationSchema={props.validationSchema}
                    onSubmit={(values) => {
                      
                        console.log('Form Submitted with values:', values);
                    }}
                >
                    {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                        <Form onSubmit={handleSubmit}>

                            {/* Nearby Landmark */}



                            <Form.Group controlId="landmark" className="mb-3">
                                <h6>Amount</h6>
                                <div className='transaction-number'>
                                    <div className='currentCurrency'>$</div>
                                    <Form.Control
                                        type="number"
                                        name="landmark"
                                        className='ps-4'
                                        value={values.landmark}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        min={0}
                                    />
                                </div>
                            </Form.Group>
                            {/* Save As Dropdown */}
                            <Form.Group controlId="saveAs" className="mb-3 border rounded pt-2">
                                
                                <Form.Check
                                    type="radio"
                                    label="Razorpay"
                                    className='border-bottom py-2 ps-5 w-auto'
                                    name="saveAs"
                                    value="Razorpay"
                                    aria-label="Razorpay"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Stripe"
                                    name="saveAs"
                                     className='border-bottom py-2 ps-5 w-auto'
                                    value="Stripe"
                                    aria-label="Stripe"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Paypal"
                                    name="saveAs"
                                     className='border-bottom py-2 ps-5 w-auto'
                                    value="Paypal"
                                    aria-label="Paypal"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Payfast"
                                    name="saveAs"
                                     className='border-bottom py-2 ps-5 w-auto'
                                    value="Payfast"
                                    aria-label="Payfast"
                                />
                                <Form.Check
                                    type="radio"
                                    label="flutterWave"
                                    name="saveAs"
                                     className='border-bottom py-2 ps-5 w-auto'
                                    value="flutterWave"
                                    aria-label="flutterWave"
                                />
                                <Form.Check
                                    type="radio"
                                    label="MercadoPago"
                                    name="saveAs"
                                     className='border-bottom py-2 ps-5 w-auto'
                                    value="MercadoPago"
                                    aria-label="MercadoPago"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Xendit"
                                     className='border-bottom py-2 ps-5 w-auto'
                                    name="saveAs"
                                    value="Xendit"
                                    aria-label="Xendit"
                                />
                                <Form.Check
                                    type="radio"
                                    label="MidTrans"
                                    name="saveAs"
                                     className='border-bottom py-2 ps-5 w-auto'
                                    value="MidTrans"
                                    aria-label="MidTrans"
                                />
                                <Form.Check
                                    type="radio"
                                    label="OrangePay"
                                    name="saveAs"
                                    value="OrangePay"
                                     className='border-bottom py-2 ps-5 w-auto'
                                    aria-label="OrangePay"
                                />


                                <Form.Control.Feedback type="invalid">{errors.saveAs}</Form.Control.Feedback>
                            </Form.Group>

                            {/* Submit Button */}
                            <div className="d-flex w-100">
                                <Button type="button" className="form-btn w-50 close-btn" onClick={props.onHide}>
                                    Close
                                </Button>
                                <Button type="submit" variant="primary" className="form-btn w-50"
                                
                                >
                                    
                                    Next
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>


            </Modal.Body>


        </Modal>



    );
};


function Wallet() {
   
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        setTimeout(() => {
            setLoading(false);

        }, 1000)

    }, []);
    
  

    const [modalShow, setModalShow] = React.useState(false);

    // You can define the validation schema here or import it if needed
    const validationSchema = null; // Example, adjust according to your needs

    return (

        <>
            <div>

                <Container>
                    <div className='transaction-container rounded p-5 mt-4'>

                        <Row className=' text-center flex-column'>

                            <Col>
                            <h3 className='font-weight-bold h4 text-light'>Wallet Amount : $ {0}</h3>
                            </Col>
                            <Col>
                            <Button className='transaction-btn' onClick={() => setModalShow(true)}>
                                Add Wallet Amount
                            </Button>

                            <Transcation
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                               
                                validationSchema={validationSchema} // Pass validation schema if you have one
                            />
                                </Col>
                        </Row>
                    </div>
                    <div className='d-flex justify-content-between mt-4'>
                        <Button className='bg-transparent text-success border-dark shodow-sm'>
                            Previous
                        </Button>
                            
                            
                        <Button  className='bg-transparent text-success border-dark shadow-sm'
                        
                        >
                            Next 
                        </Button>

                    </div>
                </Container>
            </div>
        </>
    );
}

export default Wallet;