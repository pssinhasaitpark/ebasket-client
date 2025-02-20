import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddresses, createAddress } from '../../store/slices/addressSlice'; 
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
    flatHouseBuilding: Yup.string().required('Flat/House/Floor/Building is required'),
    area: Yup.string().required('Area/Sector/Locality is required'),
    landmark: Yup.string(),
    saveAs: Yup.string().required('Please select a save option'),
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
            flatHouseBuilding: '',
            area: '',
            landmark: '',
            saveAs: '',
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

              <Form.Group controlId="area" className="mb-3">
                <Form.Control
                  type="text"
                  name="area"
                  value={values.area}
                  placeholder="Nearby Landmark"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.area && !!errors.area}
                />
                <Form.Control.Feedback type="invalid">{errors.area}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="saveAs" className="mb-3">
                <Form.Label>Save as</Form.Label>
                <Form.Check
                  type="radio"
                  label="Home"
                  name="saveAs"
                  onChange={handleChange}
                  value="Home"
                  aria-label="Home"
                />
                <Form.Check
                  type="radio"
                  label="Work"
                  name="saveAs"
                  onChange={handleChange}
                  value="Work"
                  aria-label="Work"
                />
                <Form.Check
                  type="radio"
                  label="Hotel"
                  onChange={handleChange}
                  name="saveAs"
                  value="Hotel"
                  aria-label="Hotel"
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  name="saveAs"
                  onChange={handleChange}
                  value="Other"
                  aria-label="Other"
                />
                <Form.Control.Feedback type="invalid">{errors.saveAs}</Form.Control.Feedback>
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

          <div className="address-wrapper w-50 h-100 border rounded-2 mt-5 p-3">
            { error ? (
              <div>Error: {error}</div>
            ) : addresses.length > 0 ? (
              addresses.map((address) => (
                <Row key={address._id}>
                  <div className="d-flex p-3 gap-2">
                    <div className="image">
                      <img src={location} alt="location" />
                    </div>
                    <div className="ms-3">
                      <p className="location-detail">
                        {address.flatHouseFloorBuilding}, {address.areaSectorLocality}
                      </p>
                      <Button className="btn">Default</Button>
                    </div>
                    <div className="ms-2 d-flex gap-2">
                      <a href="#" >
                        <div className="rounded bg-color p-2">
                          <img src={edit} alt="edit" />
                        </div>
                      </a>
                      <a href="#">
                        <div className="rounded bg-color p-2">
                          <img src={bin} alt="delete" />
                        </div>
                      </a>
                    </div>
                  </div>
                </Row>
              ))
            ) : (
              <NoResult />
            )}
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
