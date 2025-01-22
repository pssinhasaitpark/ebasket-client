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

import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col, Form, NavLink } from 'react-bootstrap';
import Logo from '../asset/images/logo_web.png'
import HemburgerMenu from '../component/HemburgerMenu';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <div className="bg-transparent  py-1  text-dark container-fluid ps-0 pb-0 ">
        <Navbar expand="lg" className="">
          <Container>
            <Row className='align-items-center'>
              <Col className='col-lg-2 '>
                <Navbar.Brand href="#home">
                  <div className='fw-bold float-start fs-1 '>
                    <img src={Logo} alt="" />
                  </div>
                </Navbar.Brand>
              </Col>

              <Col className='col-lg-3  d-flex align-items-center m-none '>

                <Form className='navbar-input ml-4'>
                  <Form.Control
                    type="text"
                    placeholder=""
                    aria-label="Disabled input example"
                    className='border border-success p-2'
                    readOnly />
                  <img src='' alt="" className='w-auto' />
                </Form>

              </Col>

              <Col className='col-lg-7  '>
               <div className='d-flex align-items-center justify-content-end pr-5'>

               
                <ul className="navbar-menu navbar-nav mx-auto  mb-lg-0">
                  <li className="nav-item">
                    <NavLink to="/sign-in" className="nav-link " activeClassName="active">
                      Search
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/sign-in" className="nav-link " activeClassName="active">
                      Sign In
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/offers" className="nav-link " activeClassName="active">
                      Offers
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/cart" className="nav-link " activeClassName="active">
                      Cart
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <div class="dropdown">
                      <button className="btn  dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        English
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item " href="#">Action</a></li>
                        <li><a className="dropdown-item " href="#">Another action</a></li>
                        <li><a className="dropdown-item " href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
          
                <button onClick={handleShow} className='bg-transparent border-0'>
                  <input id="toggle1" type="checkbox" />
                  <label class="hamburger1" for="toggle1">
                    <div class="top"></div>
                    <div class="meat"></div>
                    <div class="bottom"></div>
                  </label>
                </button>
                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title><img src={Logo} alt="" /></Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <div>
                      <ul class="list-group">
                        <li class="list-group-item"><a class="link1" href="">Our Models</a></li>
                        <li class="list-group-item"><a class="link1" href="">Specialties</a></li>
                        <li class="list-group-item"><a class="link1" href="">About</a></li>
                        <li class="list-group-item"> <a class="link1" href="">Blog</a></li>
                        <li class="list-group-item"><a class="lin1 kbutton-nav" href="">Contact</a></li>
                      </ul>
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>
                </div>
              </Col>
            </Row>
          </Container>
        </Navbar>


      </div>

    </>
  )
}

export default Header