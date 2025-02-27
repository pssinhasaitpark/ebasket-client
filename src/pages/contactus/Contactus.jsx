import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './Contactus.css'
import axios from 'axios';
import Header from '../../layout/Header';
import { toast, ToastContainer } from 'react-toastify';
import Map from '../../component/Map';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const ContactUs = () => {

  // Validation Schema with Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().matches(
      /^[0-9]{10}$/, 
      "Phone number must be exactly 10 digits"
    ).required('Phone number is required'),
    message: Yup.string()
      .required('Please tell us how we can help you')
      .min(10, 'Message must be at least 10 characters')
      .trim(),
  });
  

    const handleSubmit = async (values, { resetForm }) => {
    
      try {
        // Send the form data to your API endpoint 
        const response = await axios.post(`${BASE_URL}/userinfo/tell-us-about-yourself`, {
          name: values.name,
          email: values.email,
          phone: values.phone,
          helpText: values.message,
        });
  
       
        // console.log('Form submitted successfully:', response.data);
        toast.success('Your message has been sent successfully!');
        resetForm(); // Reset form after submission
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('There was an error sending your message. Please try again later.');
      }
    };
  

  return (
    <>
     {/* <Header/> */}
    <Container>
      <Row className="justify-content-center my-5 contact-us-main-container">
        <Col md={6} className='col-auto shadow-sm p-4 contact-us-container'>
          <h2 className="form-heading text-center mb-4">Tell Us About Yourself</h2>
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                {/* Name Field */}
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label>Your Name</Form.Label>
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
                  <Form.Label>Email Address</Form.Label>
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
                  <Form.Label>Phone Number</Form.Label>
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

                {/* Message Field */}
                <Form.Group controlId="message" className="mb-3">
                  <Form.Label>How Can We Help You?</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                   placeholder='Hi there, I would like to ...'
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.message && !!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                </Form.Group>

                {/* Submit Button */}
                <Button type="submit" variant="primary" className="form-btn">Submit</Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
    <div>
      <Map/>
    </div>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default ContactUs;
