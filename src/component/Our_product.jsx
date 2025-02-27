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
              className={`nav-txt ${selectedCategory === 'rice' ? 'act' : ''}`}
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
              className={`nav-txt ${selectedCategory === 'pulses' ? 'act' : ''}`}
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
              className={`nav-txt ${selectedCategory === 'flour' ? 'act' : ''}`}
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
              className={`nav-txt ${selectedCategory === 'Salt & Sugar' ? 'act' : ''}`}
              href="#action4"
            >
              SALT & SUGAR
            </p>
          </Nav.Link>
          <Nav.Link
            className="nav-content"
            onClick={() => handleCategoryClick('snacksanddrinks')}
          >
            <p
              className={`nav-txt ${selectedCategory === 'snacksanddrinks' ? 'act' : ''}`}
              href="#action5"
            >
              SNACKS & DRINKS
            </p>
          </Nav.Link>
          <Nav.Link
            className="nav-content"
            onClick={() => handleCategoryClick('oilsanddryfruits')}
          >
            <p
              className={`nav-txt ${selectedCategory === 'oilsanddryfruits' ? 'act' : ''}`}
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
