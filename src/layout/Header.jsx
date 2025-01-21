// import React from 'react'
// import { Container, Navbar, Nav, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
// function header() {
//   return (
//    <>
//    <Container>

//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="#">BrandName</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           {/* Search Section */}
//           <Form inline>
//             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//             <Button variant="outline-primary">

//             </Button>
//           </Form>

//           {/* Sign In */}
//           <Nav.Link href="/sign-in">
//              Sign In
//           </Nav.Link>

//           {/* Offers */}
//           <Nav.Link href="/offers">Offers</Nav.Link>

//           {/* Cart */}
//           <Nav.Link href="/cart">
//              Cart
//           </Nav.Link>

//           {/* Language Dropdown */}
//           <DropdownButton id="dropdown-basic-button" title="Language" variant="outline-secondary">
//             <Dropdown.Item href="#/en">English</Dropdown.Item>
//             <Dropdown.Item href="#/es">Spanish</Dropdown.Item>
//             <Dropdown.Item href="#/fr">French</Dropdown.Item>
//           </DropdownButton>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
// ;


//    </Container>
//    </>
//   )
// }

// export default header

import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col, Form, NavLink } from 'react-bootstrap';
import Logo from '../asset/images/logo_web.png'
import HemburgerMenu from '../component/HemburgerMenu';

const Header = () => {
  return (
    <>

      <div className="bg-transparent border border-bottom-1 py-1  text-dark container-fluid ps-0 pb-0">
        <Navbar expand="lg" className="mx-auto">
          <Container>
            <Row>
              <Col className='col-lg-3 '>
                <Navbar.Brand href="#home">
                  <div className='fw-bold float-start fs-1 '>
                    <img src={Logo} alt="" />
                  </div>
                </Navbar.Brand>
              </Col>

              <Col className='col-lg-3 '>

                <Form className='navbar-input'>
                  <Form.Control
                    type="text"
                    placeholder=""
                    aria-label="Disabled input example"
                    className='border border-success p-2'
                    readOnly />
                  <img src='' alt="" className='w-auto' />
                </Form>

              </Col>

              <Col className='col-lg-6 d-flex '>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"> */}
                  {/* <Nav className="mx-auto"> */}
      
                
                    <ul className="navbar-menu navbar-nav mx-auto  mb-lg-0">
                      <li className="nav-item">
                      <NavLink to="/sign-in" className="nav-link" activeClassName="active">
                          Search
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/sign-in" className="nav-link" activeClassName="active">
                           Sign In
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/offers" className="nav-link" activeClassName="active">
                          Offers
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/cart" className="nav-link" activeClassName="active">
                         Cart
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <div class="dropdown">
                          <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                           English
                          </button>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                        </div>
                      </li>

                     
                    </ul>
                    
                    <HemburgerMenu/>
                   
                  {/* </Nav>
                </Navbar.Collapse> */}
           
              </Col>
            </Row>
          </Container>
        </Navbar>


      </div>

    </>
  )
}

export default Header