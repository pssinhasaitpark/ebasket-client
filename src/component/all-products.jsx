import React , { useEffect, useState } from 'react';
import Slick from '../component/Slick-Slider';
import { Container } from 'react-bootstrap';
import './all_product.css'
import Viewall from '../component/view_all-button';
import useProductNavigation from '../hooks/useProductNavigation';
const BASE_URL = process.env.REACT_APP_BASE_URL;

function All() {
    const [products, setProducts] = useState([]);
    const fetchProducts = async (id) => {
        try {
          const response = await fetch(`${BASE_URL}/items/itemsid/${id}`);
          const data = await response.json();
          setProducts(data.products); // Assuming response contains 'products' array
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
    
    return (
    <div className='pt-4 pb-4'>
    <Container>
        <div className='titlebar-contain'><h5 className='title-heading'>Rice</h5><span><Viewall/></span></div>
        <div>
            <Slick category="rice"  />
        </div>
        <div className='titlebar-contain'><h5 className='title-heading'>Pulses</h5><span><Viewall/></span></div>
        <div>
            <Slick category="pulses"/>
        </div>
        <div className='titlebar-contain'><h5 className='title-heading'>Flour</h5><span><Viewall/></span></div>
        <div>
            <Slick category="Flour"/>
        </div>
        <div className='titlebar-contain'><h5 className='title-heading'>Salt & Sugar</h5><span><Viewall/></span></div>
        <div>
            <Slick category=""/>
        </div>
    </Container>
    </div>
    
);
};

export default All;
