import React from 'react';
import './search-page.css'
import { IoSearchOutline } from "react-icons/io5"
import { FormControl, Container } from 'react-bootstrap';
import ProductList from '../Products';
import nothing from '../../assests/images/no-result.png'
import { FiHome } from "react-icons/fi";



function Search() {
  
  const style = { color: "#01664a", size: "10px" }
   return (
   <div className='search-page'>
    <div className='container section-content py-5'>
      <div>
      <div className="mb-4 d-flex align-items-center search-bar">
        <FormControl
          className="food_search border-right-0 form-control form-control-lg input_search"
          placeholder="Search Product Items"
          aria-label="Search Product Items"
          style={{ width: '100%' }} 
        />
        <div
          variant="outline-primary"
          className="p-0 ml-2 search-icon"
        >
          <IoSearchOutline style={style}/>
        </div>
      </div>
      </div>
      <div>
        <ul className='nav seachpage-list'>
          <li className='nav-item'>
            <a href="" className='nav-link Home-Tab'>
            <FiHome className='home-icon' />
              <span className='product-count'>Items (41)</span>
            </a>
          </li>
        </ul>
      </div>
      <div className='text-center py-5' style={{display:'none'}}>
        <img src={nothing} alt="" />
      </div>
      {/* <ProductList /> */}
    </div>
    </div>
  );
}

export default Search;
