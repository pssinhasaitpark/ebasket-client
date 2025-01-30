import {  Container } from 'react-bootstrap';
import React, { useEffect }  from "react";
import './Category.css'
import rice from '../../assests/images/rice-icon.jpg'
import amul from '../../assests/images/Brands1.png'
import ProductList from '../Products';
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchCategories } from '../../store/slices/categories-slice';  
import { fetchBrands } from '../../store/slices/brands-slice';


function Category() {
  const dispatch = useDispatch();
  
  const { categories, loading: categoryLoading, error: categoryError } = useSelector((state) => state.categories);
  const { brands, loading: brandLoading, error: brandError } = useSelector((state) => state.brands);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBrands()); 
  }, [dispatch]);

  if (categoryLoading || brandLoading) {
    return <p>Loading categories and brands...</p>;
  }

  if (brandError) {
    return <p>Error: {brandError}</p>;
  }

  if (categoryError) {
    return <p>Error: {categoryError}</p>;
  }

  return (
    <div className='pt-4 pb-4'>
    <Container>
      <div className='main-contain'><h3 className='main-heading'>ITEMS</h3></div>
      <div className='category-row row'>
        <div className='col-md-3 col-sm-4 check-boxes'>
              <div className='Category-list'>
                <div className='vandor-sidebar'>
                  <h3>Categories</h3>
                  <ul className='vandorcat-list'>
                  {categories.map((category) => (
                    category.publish &&
                        <li key={category._id} className="category-item">
                          <a href="#">
                            <input
                              className="form-check-input category-item"
                              type="checkbox"
                              name={category.name}/>
                            <span className='input-title'>
                            <img
                              src={category.image ? `http://192.168.0.111:3001${category.image}` : rice}
                              alt={category.name}
                            />
                            {category.name}
                            </span>
                          </a>
                        </li>  ))}
                 </ul>
                </div>
              </div>  
              <div className='brands-list'>
                <div className='vandor-sidebar'>
                  <h3>Brands</h3>
                  <ul className='vandorcat-list'>
                  {brands.map((brand) => (
                    brand.publish && (
                      <li key={brand._id} className="brand-item">
                        <a href="#">
                          <input
                            className="form-check-input category-item"
                            type="checkbox"
                            name={brand.title}
                          />
                          <span className='input-title'>
                            <img
                              src={brand.image ? `http://192.168.0.111:3001${brand.image}` : amul}
                              alt={brand.title}
                            />
                            {brand.title}
                          </span>
                        </a>
                      </li>
                    )
                  ))}
                 </ul>
                </div>
              </div> 
        </div>
        <div className='col-md-9 col-sm-8'>
      <   ProductList/>
      
        </div>
      </div>
    </Container>
    </div>
);
};

export default Category;
