import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { LoadingSpinner } from '../../component/spinner';
import image from '../../asset/images/logo_web.png'
import './Profile.css'
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Profile = () => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Validation Schema
    const validationSchema = Yup.object({
        fullName: Yup.string().required('Name is required'),

        image: Yup.mixed().required("required"), // Image is optional for update
    });

    // Fetch current user data
    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get(`http://192.168.0.112:4500/user/me`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
            });
            setUserData(response.data.user); // Assuming the response contains a user object
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch user data');
            setLoading(false);
        }
    };

    // Update user details via PUT API
    const updateUserData = async (updatedData) => {
        const formData = new FormData();
        // Append only the fields that are changed
        if (updatedData.fullName) {
            formData.append('fullName', updatedData.fullName);
        }
        if (updatedData.image) {
            formData.append('image', updatedData.image);
        }
        try {
            const response = await axios.put(
                `http://192.168.0.112:4500/user/updateme`,
                formData,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            // Assuming the response contains updated user data
            setUserData(response.data.user);
            setLoading(false);
            console.log('User data updated successfully:', response.data.user);
        } catch (err) {
            setError('Failed to update user data');
            setLoading(false);
        }
    };

    return (
        <Container>
            <Row className="justify-content-center my-5">
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        <Col md={4}>
                            <div className='bg-white rounded shadow-sm sticky_sidebar overflow-hidden'>
                                <div className='d-flex align-items-center p-3'>


                                    <div className='me-3'>
                                        <img src={userData.image || image} alt="image" className='user-updated-image' />
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

                        <Col md={8} className="shadow-sm p-4">
                            <h2 className="form-heading mb-4">My Account</h2>
                            <Formik
                                initialValues={{
                                    fullName: userData?.fullName || '',
                                    email: userData?.email || '',
                                    phoneNumber: userData?.phoneNumber || '',
                                    image: '',
                                }}
                                validationSchema={validationSchema}
                                onSubmit={async (values) => {
                                    // Collect updated data for PUT request
                                    console.log("values..", values);
                                    console.log(values.fullName);


                                    const updatedData = {
                                        fullName: values.fullName,
                                        image: values.image,
                                    };
                                    console.log("updated data", updatedData);


                                    // Call the function to update user data
                                    await updateUserData(updatedData);
                                }}
                            >
                                {({ handleSubmit, setFieldValue, values, errors, touched, handleChange, isSubmitting }) => (
                                    <Form onSubmit={handleSubmit}>
                                        {/* Full Name Field */}
                                        <Form.Group controlId="fullName" className="mb-3">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="fullName"
                                                value={values.fullName}
                                                onChange={handleChange}
                                                // as={Form.Control} // Bind Form.Control with Formik
                                                className="form-input-fields"
                                                isInvalid={touched.fullName && !!errors.fullName}
                                            />
                                            <ErrorMessage name="fullName" component="div" className="invalid-feedback" />
                                        </Form.Group>

                                        {/* Email Field */}
                                        <Form.Group controlId="email" className="mb-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                className="form-input-fields"
                                                as={Form.Control} // Bind Form.Control with Formik
                                                value={values.email}
                                                disabled
                                            />
                                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                        </Form.Group>

                                        {/* Phone Number Field */}
                                        <Form.Group controlId="phoneNumber" className="mb-3">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="phoneNumber"
                                                className="form-input-fields"
                                                value={values.phoneNumber}
                                                as={Form.Control} // Bind Form.Control with Formik
                                                disabled
                                                isInvalid={touched.phoneNumber && !!errors.phoneNumber}
                                            />
                                            <ErrorMessage name="phoneNumber" component="div" className="invalid-feedback" />
                                        </Form.Group>

                                        {/* Image Field */}
                                        <Form.Group controlId="image" className="mb-3 d-flex gap-3">
                                            <span>Image</span>
                                            <input
                                                type="file"
                                                name="image"
                                                className="border-0"
                                                onChange={(e) => setFieldValue('image', e.target.files[0])}
                                            />
                                            {values.image && (
                                                <p className="mt-2">Selected file: {values.image.name}</p>
                                            )}
                                            <ErrorMessage name="image" component="div" className="invalid-feedback" />
                                        </Form.Group>

                                        {/* Submit Button */}
                                        <Button type="submit" className="w-100 form-btn" disabled={isSubmitting}>
                                            Save Changes
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </Col>
                    </>
                )}
            </Row>
        </Container>
    );
};

export default Profile;
