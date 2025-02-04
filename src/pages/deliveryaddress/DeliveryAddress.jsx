import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col, Radio } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-bootstrap/Modal';
import './DeliveryAddress.css'
import location from '../../asset/images/deliverylocation.png'
import edit from '../../asset/images/edit.svg'
import bin from '../../asset/images/trash-2.svg'
import noresult from '../../asset/images/no-result.png'
import plus from '../../asset/images/plus.svg'
const Forms = (props) => {

  // Validation schema using Yup
  const validationSchema = Yup.object({
    address: Yup.string().required('Delivery address is required'),
    flatHouseBuilding: Yup.string().required('Flat/House/Floor/Building is required'),
    area: Yup.string().required('Area/Sector/Locality is required'),
    landmark: Yup.string(),
    saveAs: Yup.string().required('Please select a save option'),
  });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delivery Address Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {/* <Row className="justify-content-center my-5">
            <Col md={6} className="shadow-sm p-4"> */}

        <Formik
          initialValues={{
            address: '',
            flatHouseBuilding: '',
            area: '',
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
                  placeholder="Nearby Landmark (optional)"
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
                  aria-label="Home"
                />
                <Form.Check
                  type="radio"
                  label="Work"
                  name="saveAs"
                  value="Work"
                  aria-label="Work"
                />
                <Form.Check
                  type="radio"
                  label="Hotel"
                  name="saveAs"
                  value="Hotel"
                  aria-label="Hotel"
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  name="saveAs"
                  value="Other"
                  aria-label="Other"
                />
                <Form.Control.Feedback type="invalid">{errors.saveAs}</Form.Control.Feedback>
              </Form.Group>

              {/* Submit Button */}
              <div className="d-flex w-100">
                <Button type="button" className="form-btn w-50 close-btn" onClick={props.onHide}>
                  Close
                </Button>
                <Button type="submit" variant="primary" className="form-btn w-50">
                  Save
                </Button>
              </div>
            </Form>
          )}
        </Formik>
        {/* </Col>
          </Row> */}

      </Modal.Body>
    </Modal>



  );
};


function AddressForm() {
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
      <div className='mt-3'>

        <Container>
          <div>

     
          <Row className='address-addon '>


            <Button className='address-btn' onClick={() => setModalShow(true)}>
              <img src={plus} alt="" /> Add New Address
            </Button>

            <Forms
              show={modalShow}
              onHide={() => setModalShow(false)}
              validationSchema={validationSchema} // Pass validation schema if you have one
            />
          </Row>
          </div>

          <div className='address-wrapper w-50 h-100 border rounded-2 mt-5 p-3'>
         
          <Row  >
            <div className='d-flex p-3 gap-2'>
              <div className='image'>
                <img src={location} alt="image" />
              </div>
              <div className='ms-3'>
                <p className='location-detail'>Lorem ipsum dolor sit amet consect adipisicing elit. Fugit?</p>
                <Button className='btn'>Default</Button>
              </div>
              <div className=' ms-2 d-flex gap-2'>
               <a href="#"> <div className=' rounded bg-color p-2'> <img src={edit} alt="" /></div></a>
               <a href="#"> <div className=' rounded bg-color p-2'> <img src={bin} alt="" /></div></a>
              </div>
            </div>
          </Row >
          </div>
          <NoResult/>
        </Container>
      </div>
    </>
  );
}

 export const NoResult = ()=>{
      return(
        <>
        <div>
           <Container>
            <div className='d-flex justify-content-center'>
              <img src={noresult} alt="" />
            </div>
           </Container>
        </div>
        </>
      )

}


export default AddressForm;