import React, { useState, useEffect } from 'react';
import './search-page.css';
import { IoSearchOutline } from "react-icons/io5";
import { FormControl, Container } from 'react-bootstrap';
import ProductList from '../../pages/Products/Products';
import nothing from '../../asset/images/no-result.png'
import { FiHome } from "react-icons/fi";
import { useSelector } from 'react-redux';


function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const { items } = useSelector((state) => state.items);
  const style = { color: "#01664a", size: "10px" };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter((item) => {
    const productName = item?.itemDetails?.name || '';
    return productName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className='search-page'>
      <div className='container section-content py-5'>

        <div className="mb-4 d-flex align-items-center search-bar">
          <FormControl
            className="food_search border-right-0 form-control form-control-lg input_search"
            placeholder="Search Product Items"
            aria-label="Search Product Items"
            style={{ width: '100%' }}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div variant="outline-primary" className="p-0 ml-2 search-icon">
            <IoSearchOutline style={style} />
          </div>
        </div>


        <div>
          <ul className='nav seachpage-list'>
            <li className='nav-item'>
              <a className='nav-link Home-Tab'>
                <FiHome className='home-icon' />
                <span className='product-count'>Items ({filteredItems?.length})</span>
              </a>
            </li>
          </ul>
        </div>
        
        {filteredItems?.length === 0 && searchTerm.length ===0 ?
         <ProductList itemss={filteredItems} />
         : 
          (filteredItems?.length > 0 ? (
            <ProductList itemss={filteredItems} />
          ) : (
            <div className='text-center py-5'>
              <img src={nothing} alt="No results" />
            </div>
          )) 
        }

      </div>
    </div>

  );
}

export default Search;
