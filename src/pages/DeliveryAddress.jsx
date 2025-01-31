import React from 'react';
import { Form, Button, Container, Row, Col, Radio } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const AddressForm = () => {


    // Validation schema using Yup
    const validationSchema = Yup.object({
        address: Yup.string().required('Delivery address is required'),
        flatHouseBuilding: Yup.string().required('Flat/House/Floor/Building is required'),
        area: Yup.string().required('Area/Sector/Locality is required'),
        landmark: Yup.string(),
        saveAs: Yup.string().required('Please select a save option'),
    });

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={6} className="shadow-sm p-4">
                    <h2 className="mb-4">Delivery Address</h2>
                    <Formik
                        initialValues={{
                            address: '',
                            flatHouseBuilding: '',
                            area: '',
                            landmark: '',
                            saveAs: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log('Form Submitted with values:', values);
                        }}
                    >
                        {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                            <Form onSubmit={handleSubmit}>
                                {/* Delivery Address */}
                                <Form.Group controlId="address" className="mb-3">

                                    <Form.Control
                                        type="text"
                                        name="address"
                                        placeholder="Flat/House.Floor/Building*"
                                        value={values.address}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.address && !!errors.address}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                                </Form.Group>

                                {/* Flat/House/Floor/Building */}
                                <Form.Group controlId="flatHouseBuilding" className="mb-3">

                                    <Form.Control
                                        type="text"
                                        name="flatHouseBuilding"
                                        placeholder="Area/Sector/Locality *"
                                        value={values.flatHouseBuilding}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.flatHouseBuilding && !!errors.flatHouseBuilding}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.flatHouseBuilding}</Form.Control.Feedback>
                                </Form.Group>

                                {/* Area/Sector/Locality */}
                                <Form.Group controlId="area" className="mb-3">

                                    <Form.Control
                                        type="text"
                                        name="area"
                                        value={values.area}
                                        placeholder="Nearby Landmark (optinal)"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.area && !!errors.area}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.area}</Form.Control.Feedback>
                                </Form.Group>

                                {/* Nearby Landmark */}
                                <Form.Group controlId="landmark" className="mb-3">

                                    <Form.Control
                                        type="text"
                                        name="landmark"
                                        value={values.landmark}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Form.Group>

                                {/* Save As Dropdown */}
                                <Form.Group controlId="saveAs" className="mb-3">
                                    <Form.Label>Save as</Form.Label>
                                    <Form.Check
                                        type="radio"
                                        label="Home"
                                        name="saveAs"
                                        value="Home"
                                        // checked={saveAs === 'Home'}
                                        // onChange={handleSaveAsChange}
                                        aria-label="Home"
                                    />

                                    {/* Radio button 2: Work */}
                                    <Form.Check
                                        type="radio"
                                        label="Work"
                                        name="saveAs"
                                        value="Work"
                                        // checked={saveAs === 'Work'}
                                        // onChange={handleSaveAsChange}
                                        aria-label="Work"
                                    />

                                    {/* Radio button 3: Hotel */}
                                    <Form.Check
                                        type="radio"
                                        label="Hotel"
                                        name="saveAs"
                                        value="Hotel"
                                        // checked={saveAs === 'Hotel'}
                                        // onChange={handleSaveAsChange}
                                        aria-label="Hotel"
                                    />

                                    {/* Radio button 4: Other */}
                                    <Form.Check
                                        type="radio"
                                        label="Other"
                                        name="saveAs"
                                        value="Other"
                                        // checked={saveAs === 'Other'}
                                        // onChange={handleSaveAsChange}
                                        aria-label="Other"
                                    />

                                    <Form.Control.Feedback type="invalid">{errors.saveAs}</Form.Control.Feedback>
                                </Form.Group>

                                {/* Submit Button */}
                                <div className='d-flex'>

                                <Button type="submit" variant="primary" className="form-btn">
                                 close
                                </Button>
                                <Button type="submit" variant="primary" className="form-btn">
                                 Save
                                </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
};

export default AddressForm;
