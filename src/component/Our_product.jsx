import React from 'react';
import Slick from '../component/Slick-Slider';
import { useState } from 'react';


import { Navbar, Nav, Container } from 'react-bootstrap';
import './Our_product.css'


function Product() {
    const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); 
  };
  return (
    <div className='pt-4 pb-4'>
    <Container>
        <div className='product-contain'><h3 className='product-heading'>OUR PRODUCTS</h3></div>
        <Navbar className='Navbar'>
            <Nav.Link className='nav-content'  onClick={() => handleCategoryClick('rice')}> <a className='nav-txt nav-txt-1' href="#action1">RICE</a></Nav.Link>
            <Nav.Link className='nav-content'  onClick={() => handleCategoryClick('pulses')}><a className='nav-txt' href="product"> PULSES</a></Nav.Link>
            <Nav.Link className='nav-content'  onClick={() => handleCategoryClick('flour')}><a className='nav-txt' href="#action2"> FLOUR</a></Nav.Link>
            <Nav.Link className='nav-content'  onClick={() => handleCategoryClick('saltandsugar')}><a className='nav-txt' href="#action2"> SALT & SUGAR</a></Nav.Link>
            <Nav.Link className='nav-content'  onClick={() => handleCategoryClick('snacksanddrinks')}><a className='nav-txt' href="#action2">  SNACKS & DRINKS</a></Nav.Link>
            <Nav.Link className='nav-content'  onClick={() => handleCategoryClick('oilsanddryfruits')} ><a className='nav-txt' href="#action2">  OILS & DRY FRUITS</a></Nav.Link>
        </Navbar>
        <div>
            <Slick category={selectedCategory} />
        </div>
    </Container>
    </div>
);
};

export default Product;
