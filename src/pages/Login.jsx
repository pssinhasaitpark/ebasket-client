
import React from 'react' 
import { Container,Row,Col, Button, Dropdown ,Accordion } from 'react-bootstrap'
import './Login.css'

const Login = () => {
  return (
    <> 
      <Container className="vh-100">
      <Row className="justify-content-center ">
        <Col xs={12} md={6} lg={4} className="border p-4 w-50">
          <Row>
            <h3 className='text-dark my-0 mb-3'>Login</h3>
          </Row>
          <Row >
            <p className="pt-2">Sign in to continue</p>
          </Row>

          <Row className="">
            <Col>
              <p>Login</p>
              </Col>
              </Row>
              <Row className="my-1">
                <Col xs={4}>
              <Dropdown>
                <Dropdown.Toggle className='bg-transparent border-0 select_Country_color' >
                Select Country
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">India</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">USA</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">UK</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs={8} className='lines' >
     
              <input type="tel" className="form-control border-0 input_type_color" placeholder="phone number" />
            </Col>
          </Row>

        
          {/* <Row className="my-3">
            <Col >
              <h6>Phone</h6>
              <input type="tel" className="form-control" placeholder="phone number" />
            </Col>
          </Row> */}

          <Row className="my-3">
            <Col className='text-center'>
              <button  className='btn-colors border-0 button w-100 p-3'>Send OTP</button>
            </Col>
          </Row>


          <Row>
            <Col className='or-line mb-3 mt-3 '>
           
            <span>OR</span>
 
            </Col>
          </Row>
   
          <Row className="my-3">
            <Col  xs={12} className="text-center ">
              <button variant='success' className="btn-colors border-0 button w-100 p-3">Signup</button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    
    </>
  )
}

export default Login