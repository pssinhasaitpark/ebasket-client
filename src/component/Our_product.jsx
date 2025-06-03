import React from 'react';
import Slick from '../component/Slick-Slider';
import { useState } from 'react';


import { Navbar, Nav, Container } from 'react-bootstrap';
import './Our_product.css'


function Product() {
    const [selectedCategory, setSelectedCategory] = useState('rice');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); 
  };
  return (
    <div className='pt-4 pb-4'>
    <Container>
        <div className='product-contain'><h3 className='product-heading'>OUR PRODUCTS</h3></div>
        <Navbar className="Navbar">
          <Nav.Link
            className="nav-content"
            onClick={() => handleCategoryClick('rice')}
          >
            <p
              className={`nav-txt nav-txt_bf ${selectedCategory === 'rice' ? 'act' : ''}`}
              href="#action1"
            >
              RICE
            </p>
          </Nav.Link>
          <Nav.Link
            className="nav-content"
            onClick={() => handleCategoryClick('pulses')}
          >
            <p
              className={`nav-txt nav-txt_bf ${selectedCategory === 'pulses' ? 'act' : ''}`}
              href="#action2"
            >
              PULSES
            </p>
          </Nav.Link>
          <Nav.Link
            className="nav-content"
            onClick={() => handleCategoryClick('flour')}
          >
            <p
              className={`nav-txt nav-txt_bf ${selectedCategory === 'flour' ? 'act' : ''}`}
              href="#action3"
            >
              FLOUR
            </p>
          </Nav.Link>
          <Nav.Link
            className="nav-content"
            onClick={() => handleCategoryClick('Salt & Sugar')}
          >
            <p
              className={`nav-txt nav-txt_bf ${selectedCategory === 'Salt & Sugar' ? 'act' : ''}`}
              href="#action4"
            >
              SALT & SUGAR
            </p>
          </Nav.Link>
          <Nav.Link
            className="nav-content"
            onClick={() => handleCategoryClick('Snacks & Drinks')}
          >
            <p
              className={`nav-txt nav-txt_bf ${selectedCategory === 'Snacks & Drinks' ? 'act' : ''}`}
              href="#action5"
            >
              SNACKS & DRINKS
            </p>
          </Nav.Link>
          <Nav.Link
            className="nav-content"
            onClick={() => handleCategoryClick('Oils & Dry Fruits')}
          >
            <p
              className={`nav-txt ${selectedCategory === 'Oils & Dry Fruits' ? 'act' : ''}`}
              href="#action6"
            >
              OILS & DRY FRUITS
            </p>
          </Nav.Link>
        </Navbar>
        <div>
            <Slick category={selectedCategory} />
        </div>
    </Container>
    </div>
);
};

export default Product;
