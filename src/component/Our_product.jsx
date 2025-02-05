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
            <a
              className={`nav-txt ${selectedCategory === 'rice' ? 'act' : ''}`}
              href="#action1"
            >
              RICE
            </a>
          </Nav.Link>
          <Nav.Link
            className="nav-content"
            onClick={() => handleCategoryClick('pulses')}
          >
            <a
              className={`nav-txt ${selectedCategory === 'pulses' ? 'act' : ''}`}
              href="#action2"
            >
              PULSES
            </a>
          </Nav.Link>
          <Nav.Link
            className="nav-content"
            onClick={() => handleCategoryClick('flour')}
          >
            <a
              className={`nav-txt ${selectedCategory === 'flour' ? 'act' : ''}`}
              href="#action3"
            >
              FLOUR
            </a>
          </Nav.Link>
          <Nav.Link
            className="nav-content"
            onClick={() => handleCategoryClick('saltandsugar')}
          >
            <a
              className={`nav-txt ${selectedCategory === 'saltandsugar' ? 'act' : ''}`}
              href="#action4"
            >
              SALT & SUGAR
            </a>
          </Nav.Link>
          <Nav.Link
            className="nav-content"
            onClick={() => handleCategoryClick('snacksanddrinks')}
          >
            <a
              className={`nav-txt ${selectedCategory === 'snacksanddrinks' ? 'act' : ''}`}
              href="#action5"
            >
              SNACKS & DRINKS
            </a>
          </Nav.Link>
          <Nav.Link
            className="nav-content"
            onClick={() => handleCategoryClick('oilsanddryfruits')}
          >
            <a
              className={`nav-txt ${selectedCategory === 'oilsanddryfruits' ? 'act' : ''}`}
              href="#action6"
            >
              OILS & DRY FRUITS
            </a>
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
