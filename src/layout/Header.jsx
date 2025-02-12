import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown, Row, Col, Form, NavLink } from 'react-bootstrap';
import Logo from '../asset/images/logo_web.png'
import location from '../asset/images/location.svg'
// import GooglePlacesAutocomplete from 'react-google-autocomplete';
import './Header.css'
import {  useSelector } from 'react-redux';

import PrivateNavbar from '../component/PrivateNavbar';
import PublicNavbar from '../component/PublicNavbar';


const Header = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);



  return (
    <>

      <Navbar expand="lg" className=" pb-0 pt-0 navbar">
        <div className="bg-transparent   text-dark container-fluid  ">
          <Container >
            <Row className='header-container-row d-flex align-items-center py-2'>
              <Col lg={2} className='col-5 ps-0' >
                <Navbar.Brand href="/" className='m-0'>
                  <div className='logo fw-bold   fs-1 '>
                    <img src={Logo} alt="" />
                  </div>
                </Navbar.Brand>
              </Col>

              <Col lg={3} className='col-5 ps-0' >
                <div className='search-bar-div d-flex align-items-center  py-2'>
                  <form className='header-search-form'>

                    <div className="input-group form-container border border-success rounded-2">
                      <div className="input-group-prepend">
                        <span className="location-image">
                          <img src={location} alt="search" className='' />
                        </span>
                      </div>

                      <input
                        type="text"
                        className="form-control input border-0"
                        placeholder="Enter Your Location"

                      />


                      {/* <GooglePlacesAutocomplete
                      apiKey="AIzaSyAcwKFufS7wlIdt8u8hv_lJirS5UY6mWpE" 
                      
                      onPlaceSelected={(place) => {
                        console.log(place); 
                      }}
                      className="form-control input border-0"
                      placeholder="Enter Your Location"
                    /> */}

                      {/* Suggestions dropdown */}

                    </div>



                  </form>
                </div>
              </Col>
              {console.log(" hellllloo",isSignedIn)}


              {isSignedIn ?
                (
                
                  <PrivateNavbar />
                ) :
                (

                  <PublicNavbar />
                )

              }
            </Row>
          </Container>
        </div>
      </Navbar>



    </>
  )
}

export default Header