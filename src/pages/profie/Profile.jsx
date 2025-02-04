import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import image from '../../asset/images/logo_web.png'
import Header from '../../layout/Header';
import './Profile.css'
const Profile = () => {
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        phone: Yup.string().required('Phone number is required'),
        message: Yup.string().required('Please tell us how we can help you').min(10, 'Message must be at least 10 characters'),
        image: Yup.mixed()
            .required('Image is required')
            .test('fileSize', 'File too large, please choose a smaller image', (value) => value && value.size <= 5000000) // Max 5MB
            .test('fileType', 'Unsupported file type', (value) => value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)),
    });
    return (
        <>
            <Container>
                <Row className="justify-content-center my-5 ">

                    <Col md={4}>
                        <div className='bg-white rounded shadow-sm sticky_sidebar overflow-hidden'>
                            <div className='d-flex align-items-center p-3'>


                                <div className='me-3'>
                                    <img src={image} alt="image" />
                                </div>
                                <div>

                                    <h6>Name</h6>
                                    <p>
                                        <span>user@gmail.com</span>
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center p-3 bg-light'>
                                <p className='m-0'>Wallet Amount</p>
                                <h5 className='m-0 ms-auto  user-wallet-amount'>$ 0.00</h5>
                            </div>
                        </div>
                    </Col>
                    <Col md={8} className='shadow-sm p-4'>
                        <h2 className="form-heading mb-4">My Account</h2>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                phone: '',
                                message: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                console.log('Form submitted with values: ', values);
                            }}
                        >
                            {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                                <Form onSubmit={handleSubmit}>
                                    {/* Name Field */}
                                    <Form.Group controlId="name" className="mb-3">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            className='form-input-fields'
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.name && !!errors.name}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Email Field */}
                                    <Form.Group controlId="email" className="mb-3">
                                        <Form.Label>Email </Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            className='form-input-fields'
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.email && !!errors.email}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Phone Field */}
                                    <Form.Group controlId="phone" className="mb-3">
                                        <Form.Label>Phone </Form.Label>
                                        <Form.Control
                                            type="text"
                                            className='form-input-fields'
                                            name="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.phone && !!errors.phone}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="image" className="mb-3 d-flex gap-3">
                                        <span> Image</span>
                                        <Form.Control
                                            type="file"
                                            name="image"
                                            className='border-0'
                                            isInvalid={touched.image && !!errors.image}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.image}</Form.Control.Feedback>
                                        {values.image && <p className="mt-2">Selected file: {values.image.name}</p>} {/* Show the file name */}
                                    </Form.Group>


                                    {/* Submit Button */}
                                    <Button type="submit" className="w-100 form-btn">Save</Button>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Profile