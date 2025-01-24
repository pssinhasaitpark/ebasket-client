import React from 'react';
import Slick from '../../component/Slick-Slider';
import { Container } from 'react-bootstrap';
import './all_product.css'
import Viewall from '../../component/view_all-button';


function All() {
  return (
    <div className='pt-4 pb-4'>
    <Container>
        <div className='titlebar-contain'><h5 className='title-heading'>Rice</h5><span><Viewall/></span></div>
        <div>
            <Slick/>
        </div>
        <div className='titlebar-contain'><h5 className='title-heading'>Pulses</h5><span><Viewall/></span></div>
        <div>
            <Slick/>
        </div>
        <div className='titlebar-contain'><h5 className='title-heading'>Flour</h5><span><Viewall/></span></div>
        <div>
            <Slick/>
        </div>
        <div className='titlebar-contain'><h5 className='title-heading'>Salt & Sugar</h5><span><Viewall/></span></div>
        <div>
            <Slick/>
        </div>
    </Container>
    </div>
    
);
};

export default All;
