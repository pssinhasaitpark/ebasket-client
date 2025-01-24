import React from 'react';
import Slick from '../../component/Slick-Slider';
import {  Container } from 'react-bootstrap';
import './Most_selling.css'


function Selling() {
  return (
    <div className='pt-4 pb-4'>
    <Container>
        <div className='main-contain'><h3 className='main-heading'>MOST SELLING PRODUCTS</h3></div>
        <div>
            <Slick/>
        </div>
    </Container>
    </div>
);
};

export default Selling;
