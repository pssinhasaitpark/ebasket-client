import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddresses, createAddress, updateAddress, deleteAddress } from '../../store/slices/addressSlice';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './DeliveryAddress.css';
import location from '../../asset/images/deliverylocation.png';
import edit from '../../asset/images/edit.svg';
import bin from '../../asset/images/trash-2.svg';
import noresult from '../../asset/images/no-result.png';
import plus from '../../asset/images/plus.svg';

const Forms = (props) => {
  const validationSchema = Yup.object({
    address: Yup.string().required('Delivery address is required'),
    flatHouseFloorBuilding: Yup.string().required('Flat/House/Floor/Building is required'),
    areaSectorLocality: Yup.string().required('Area/Sector/Locality is required'),
    nearbyLandmark: Yup.string(),
    addressType: Yup.string().required('Please select a save option'),
  });

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Delivery Address Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            address: '',
            flatHouseFloorBuilding: '',
            areaSectorLocality: '',
            nearbyLandmark: '',
            addressType: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("values--", values);

            props.onSubmit(values); // Pass the submitted values up to the parent
          }}
        >
          {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
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

              <Form.Group controlId="flatHouseFloorBuilding" className="mb-3">
                <Form.Control
                  type="text"
                  name="flatHouseFloorBuilding"
                  placeholder="Area/Sector/Locality *"
                  value={values.flatHouseFloorBuilding}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.flatHouseFloorBuilding && !!errors.flatHouseFloorBuilding}
                />
                <Form.Control.Feedback type="invalid">{errors.flatHouseFloorBuilding}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="areaSectorLocality" className="mb-3">
                <Form.Control
                  type="text"
                  name="areaSectorLocality"
                  value={values.areaSectorLocality}
                  placeholder="Nearby Landmark"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.areaSectorLocality && !!errors.areaSectorLocality}
                />
                <Form.Control.Feedback type="invalid">{errors.areaSectorLocality}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="nearbyLandmark" className="mb-3">
                <Form.Control
                  type="text"
                  name="nearbyLandmark"
                  value={values.nearbyLandmark}
                  placeholder="Nearby Landmark"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.nearbyLandmark && !!errors.nearbyLandmark}
                />
                <Form.Control.Feedback type="invalid">{errors.nearbyLandmark}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="addressType" className="mb-3">
                <Form.Label>Save as</Form.Label>
                <Form.Check
                  type="radio"
                  label="Home"
                  name="addressType"
                  onChange={handleChange}
                  value="Home"
                  aria-label="Home"
                />
                <Form.Check
                  type="radio"
                  label="Work"
                  name="addressType"
                  onChange={handleChange}
                  value="Work"
                  aria-label="Work"
                />
                <Form.Check
                  type="radio"
                  label="Hotel"
                  onChange={handleChange}
                  name="addressType"
                  value="Hotel"
                  aria-label="Hotel"
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  name="addressType"
                  onChange={handleChange}
                  value="Other"
                  aria-label="Other"
                />
                <Form.Control.Feedback type="invalid">{errors.addressType}</Form.Control.Feedback>
              </Form.Group>

              <div className="d-flex w-100">
                <Button type="button" className="form-btn w-50 close-btn" onClick={props.onHide}>
                  Close
                </Button>
                <Button type="submit" variant="primary" className="form-btn w-50" >
                  Save
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

const UpdateForms = (props) => {
  const validationSchema = Yup.object({
    address: Yup.string().required('Delivery address is required'),
    flatHouseFloorBuilding: Yup.string().required('Flat/House/Floor/Building is required'),
    areaSectorLocality: Yup.string().required('Area/Sector/Locality is required'),
    nearbyLandmark: Yup.string(),
    addressType: Yup.string().required('Please select a save option'),
  });

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Delivery Address Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            address: '',
            flatHouseFloorBuilding: '',
            areaSectorLocality: '',
            nearbyLandmark: '',
            addressType: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("values--", values);

            props.onSubmit(values); // Pass the submitted values up to the parent
          }}
        >
          {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
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

              <Form.Group controlId="flatHouseFloorBuilding" className="mb-3">
                <Form.Control
                  type="text"
                  name="flatHouseFloorBuilding"
                  placeholder="Area/Sector/Locality *"
                  value={values.flatHouseFloorBuilding}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.flatHouseFloorBuilding && !!errors.flatHouseFloorBuilding}
                />
                <Form.Control.Feedback type="invalid">{errors.flatHouseFloorBuilding}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="areaSectorLocality" className="mb-3">
                <Form.Control
                  type="text"
                  name="areaSectorLocality"
                  value={values.areaSectorLocality}
                  placeholder="Nearby Landmark"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.areaSectorLocality && !!errors.areaSectorLocality}
                />
                <Form.Control.Feedback type="invalid">{errors.areaSectorLocality}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="nearbyLandmark" className="mb-3">
                <Form.Control
                  type="text"
                  name="nearbyLandmark"
                  value={values.nearbyLandmark}
                  placeholder="Nearby Landmark"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.nearbyLandmark && !!errors.nearbyLandmark}
                />
                <Form.Control.Feedback type="invalid">{errors.nearbyLandmark}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="addressType" className="mb-3">
                <Form.Label>Save as</Form.Label>
                <Form.Check
                  type="radio"
                  label="Home"
                  name="addressType"
                  onChange={handleChange}
                  value="Home"
                  aria-label="Home"
                />
                <Form.Check
                  type="radio"
                  label="Work"
                  name="addressType"
                  onChange={handleChange}
                  value="Work"
                  aria-label="Work"
                />
                <Form.Check
                  type="radio"
                  label="Hotel"
                  onChange={handleChange}
                  name="addressType"
                  value="Hotel"
                  aria-label="Hotel"
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  name="addressType"
                  onChange={handleChange}
                  value="Other"
                  aria-label="Other"
                />
                <Form.Control.Feedback type="invalid">{errors.addressType}</Form.Control.Feedback>
              </Form.Group>

              <div className="d-flex w-100">
                <Button type="button" className="form-btn w-50 close-btn" onClick={props.onHide}>
                  Close
                </Button>
                <Button type="submit" variant="primary" className="form-btn w-50" >
                  Save
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

const AddressForm = () => {
  const dispatch = useDispatch();
  const { addresses, loading, error } = useSelector((state) => state.addresses);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  const handleCreateAddress = (newAddress) => {
    dispatch(createAddress(newAddress));
    setModalShow(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteAddress(id));
  };

  const handleupdateAddress = (id, updatedData) => {
    dispatch(updateAddress({ id, updatedData }));
    setModalShow(false); 
  };
  

  

  return (
    <>
      <div className="mt-3">
        <Container>
          <Row className="address-addon">
            <Button className="address-btn" onClick={() => setModalShow(true)}>
              <img src={plus} alt="" /> Add New Address
            </Button>

            <Forms
              show={modalShow}
              onHide={() => setModalShow(false)}
              onSubmit={handleCreateAddress} // Pass the handleSubmit function
            />
          </Row>

          <div className="address-wrapper  h-100  rounded-2 mt-5 p-3">
            <Row className="gap-4 d-flex justify-content-center">
              {error ? (
                <div>Error: {error}</div>
              ) : addresses?.addresses?.length > 0 ? (
                addresses.addresses.map((address) => (
                  <Col sm={5} key={address._id} className='border p-3 '>
                    <div className="d-flex justify-content-between  gap-2 ">
                      <div className="image">
                        <img src={location} alt="location" />
                      </div>
                      <div className="ms-3 d-flex flex-column justify-content-between">
                        <div>
                        <p className="location-detail">
                          {address.flatHouseFloorBuilding}, {address.areaSectorLocality}
                        </p>
                        </div>
                       
                      </div>
                      <div className="ms-2 d-flex gap-2">
                        <Button className="rounded bg-color p-2" onClick={() => { setModalShow(true) }}>
                          <img src={edit} alt="" />
                        </Button>

                        <UpdateForms
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                          onSubmit={(updatedData) => handleupdateAddress(address._id, updatedData )}
                        />
                        <a href="#" onClick={() => {handleDelete(address._id);}}>
                          <div className="rounded bg-color p-2">
                            <img src={bin} alt="delete" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className='text-end'>

                    <Button className=" default-btn ">Default</Button>
                    </div>
                  </Col>
                ))
              ) : (
                <NoResult />
              )}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

const NoResult = () => (
  <div>
    <Container>
      <div className="no-result d-flex justify-content-center">
        <img src={noresult} alt="no-result" />
      </div>
    </Container>
  </div>
);

export default AddressForm;
