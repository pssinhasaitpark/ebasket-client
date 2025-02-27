import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import image from '../../asset/images/logo_web.png'
import Header from '../../layout/Header';
import axios from 'axios';
import './Profile.css';
import {LoadingSpinner} from '../../component/spinner'
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Profile = () => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    

    const validationSchema = Yup.object({
        fullName: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
        // message: Yup.string().required('Please tell us how we can help you').min(10, 'Message must be at least 10 characters'),
        image: Yup.mixed()
            .required('Image is required')

    });
    useEffect(() => {
        // Fetch user data from the API

        fetchUserData();
    }, []);

    const fetchUserData = async () => {

        try {
            const response = await axios.get(`${BASE_URL}/user/me`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                }
            });
            // console.log('ressssssssssssssssssssss', response.data.user);

            setUserData(response.data.user); // Assuming 'user' is the key in the API response
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch user data');
            setLoading(false);
        }
    };

    // console.log("userData",userData);

    const updateUserData = async (updatedData) => {
        // console.log("update userdata");

        try {
            const formData = new FormData();
            // Append regular data
            formData.append('fullName', updatedData.fullName);

            // If there is an image file, append it as well
            if (updatedData.image) {
                formData.append('image', updatedData.image);
            }

            const response = await axios.put(
                `${BASE_URL}/user/updateme`,
                formData, // Send FormData object for image and data
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'multipart/form-data', // Make sure to set the correct content type
                    }
                }
            );
            // console.log('User data updated successfully:', response.data.user);

            // Update the state with the updated user data
            setUserData(response.data.user);
            setLoading(false);
        } catch (err) {
            console.error('Failed to update user data:', err);
            setError('Failed to update user data');
            setLoading(false);
        }
    };


    return (
        <>
            <Container>
                <Row className="justify-content-center my-5 ">
                    {loading ? (<LoadingSpinner />) :

                        (
                            <>

                                <Col md={4}>
                                    <div className='bg-white rounded shadow-sm sticky_sidebar overflow-hidden'>
                                        <div className='d-flex align-items-center p-3'>


                                            <div className='me-3'>
                                                <img src={userData.image || image} alt="image" />
                                            </div>
                                            <div>

                                                <h6>{userData.fullName}</h6>
                                                <p>
                                                    <span>{userData.email}</span>
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
                                            image: ''
                                        }}
                                        validationSchema={validationSchema}
                                        onSubmit={async (values) => {

                                            // console.log('Form submitted with values: ', values);
                                            const updatedData = {
                                                fullName: values.name,
                                                image: values.image,  // If you have a new image URL
                                            };

                                            // Call the function to update user data
                                            await updateUserData(updatedData);
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
                                                        value={values.fullName}
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

                                                        // placeholder={userData?.email}
                                                        readOnly
                                                        // disabled
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
                                                        value={values.phoneNumber}
                                                        // placeholder={userData?.phoneNumber}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}

                                                        readOnly
                                                        // disabled
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
                                                        onChange={(e) => {
                                                            handleChange(e);
                                                            values.image = e.target.files[0]; // Update image value with selected file
                                                        }}
                                                    />
                                                    <Form.Control.Feedback type="invalid">{errors.image}</Form.Control.Feedback>
                                                    {values.image && <p className="mt-2">Selected file: {values.image.name}</p>} {/* Show the file name */}
                                                </Form.Group>


                                                {/* Submit Button */}
                                                <Button type="submit" className="w-100 form-btn" >Save</Button>
                                            </Form>
                                        )}
                                    </Formik>
                                </Col>
                            </>
                        )

                    }

                </Row>
            </Container>

        </>
    )
}

export default Profile