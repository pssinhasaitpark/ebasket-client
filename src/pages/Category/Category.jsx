import {  Container } from 'react-bootstrap';
import React from "react";
import './Category.css'
import rice from '../../assests/images/rice-icon.jpg'
import amul from '../../assests/images/Brands1.png'
import ProductList from '../Products';


function Category() {
  return (
    <div className='pt-4 pb-4'>
    <Container>
      <div className='main-contain'><h3 className='main-heading'>ITEMS</h3></div>
      <div className='category-row'>
        <div className='col-md-3'>
              <div className='Category-list'>
                <div className='vandor-sidebar'>
                  <h3>Categories</h3>
                  <ul className='vandorcat-list'>
                        <li className="category-item">
                          <a href="#">
                            <input
                              className="form-check-input category-item"
                              type="checkbox"
                              name="category-item"/>
                            <span className='input-title'>
                              <img
                                src={rice}  
                                alt="Rice"/>
                                Rice
                            </span>
                          </a>
                        </li>  
                        <li className="category-item">
                          <a href="#">
                            <input
                              className="form-check-input category-item"
                              type="checkbox"
                              name="category-item"/>
                            <span className='input-title'>
                              <img
                                src={rice}  
                                alt="Rice"/>
                                Rice
                            </span>
                          </a>
                        </li>    
                        <li className="category-item">
                          <a href="#">
                            <input
                              className="form-check-input category-item"
                              type="checkbox"
                              name="category-item"/>
                            <span className='input-title'>
                              <img
                                src={rice}  
                                alt="Rice"/>
                                Rice
                            </span>
                          </a>
                        </li>                    
                        <li className="category-item">
                          <a href="#">
                            <input
                              className="form-check-input category-item"
                              type="checkbox"
                              name="category-item"/>
                            <span className='input-title'>
                              <img
                                src={rice}  
                                alt="Rice"/>
                                Rice
                            </span>
                          </a>
                        </li>    
                 </ul>
                </div>
              </div>  
              <div className='brands-list'>
                <div className='vandor-sidebar'>
                  <h3>Brands</h3>
                  <ul className='vandorcat-list'>
                        <li className="brand-item">
                          <a href="#">
                            <input
                              className="form-check-input category-item"
                              type="checkbox"
                              name="category-item"/>
                            <span className='input-title'>
                              <img
                                src={amul}  
                                alt="Rice"/>
                                Amul
                            </span>
                          </a>
                        </li>  
                        <li className="brand-item">
                          <a href="#">
                            <input
                              className="form-check-input category-item"
                              type="checkbox"
                              name="category-item"/>
                            <span className='input-title'>
                              <img
                                src={amul}  
                                alt="Rice"/>
                                Amul
                            </span>
                          </a>
                        </li> 
                        <li className="brand-item">
                          <a href="#">
                            <input
                              className="form-check-input category-item"
                              type="checkbox"
                              name="category-item"/>
                            <span className='input-title'>
                              <img
                                src={amul}  
                                alt="Rice"/>
                                Amul
                            </span>
                          </a>
                        </li> 
                        <li className="brand-item">
                          <a href="#">
                            <input
                              className="form-check-input category-item"
                              type="checkbox"
                              name="category-item"/>
                            <span className='input-title'>
                              <img
                                src={amul}  
                                alt="Rice"/>
                                Amul
                            </span>
                          </a>
                        </li> 
                 </ul>
                </div>
              </div> 
        </div>
        <div className='col-md-9'>
      <   ProductList/>
        </div>
      </div>
    </Container>
    </div>
);
};

export default Category;
