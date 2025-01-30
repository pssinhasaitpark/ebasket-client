import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import './Category.css';
import rice from '../../assests/images/rice-icon.jpg';
import amul from '../../assests/images/Brands1.png';
import ProductList from '../Products';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/slices/categories-slice';
import { fetchBrands } from '../../store/slices/brands-slice';
import { useLocation } from "react-router-dom";

function Category() {
  const dispatch = useDispatch();

  const { categories, loading: categoryLoading, error: categoryError } = useSelector((state) => state.categories);
  const { brands, loading: brandLoading, error: brandError } = useSelector((state) => state.brands);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBrands());
  }, [dispatch]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryFromURL = queryParams.get('category');
    if (categoryFromURL) {
      setSelectedCategories([categoryFromURL]); 
    }
  console.log('url',categoryFromURL);
  }, [location]
);


  useEffect(() => {
    console.log('Selected Categories:', selectedCategories);
    console.log('Selected Brands:', selectedBrands);
  }, [selectedCategories, selectedBrands]);

  const handleCategoryChange = (event) => {
    const categoryName = event.target.name;
    console.log('Category changed:', categoryName); 
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((item) => item !== categoryName)
        : [...prev, categoryName]
    );
  };

  const handleBrandChange = (event) => {
    const brandName = event.target.name;
    setSelectedBrands((prev) =>
      prev.includes(brandName)
        ? prev.filter((item) => item !== brandName)
        : [...prev, brandName]
    );
  };

  if (categoryLoading || brandLoading) {
    return <p>Loading categories and brands...</p>;
  }

  if (brandError) {
    return <p>Error: {brandError}</p>;
  }

  if (categoryError) {
    return <p>Error: {categoryError}</p>;
  }
  const filteredCategories = categories.filter((category) => {
    const categoryMatches =
      selectedCategories.length === 0 || selectedCategories.includes(category.name);

    const brandMatches =
      selectedBrands.length === 0 || selectedBrands.includes(category.brand); 

    return categoryMatches && brandMatches;
    
  });



  return (
    <div className='pt-4 pb-4'>
      <Container>
        <div className='main-contain'>
          <h3 className='main-heading'>ITEMS</h3>
        </div>
        <div className='category-row row'>
          <div className='col-md-3 col-sm-4 check-boxes'>
            <div className='Category-list'>
              <div className='vandor-sidebar'>
                <h3>Categories</h3>
                <ul className='vandorcat-list'>
                  {categories.map((category) => (
                    category.publish && (
                      <li key={category._id} className="category-item">
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          <input
                            className="form-check-input category-item"
                            type="checkbox"
                            name={category.name}
                            checked={selectedCategories.includes(category.name)} 
                            onChange={handleCategoryChange} 
                          />
                          <span className='input-title'>
                            <img
                              src={category.image ? `http://192.168.0.111:3001${category.image}` : rice}
                              alt={category.name}
                            />
                            {category.name}
                          </span>
                        </a>
                      </li>
                    )
                  ))}
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
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          <input
                            className="form-check-input category-item"
                            type="checkbox"
                            name={brand.title}
                            checked={selectedBrands.includes(brand.title)} 
                            onChange={handleBrandChange} 
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
            <ProductList selectedCategories={selectedCategories} selectedBrands={selectedBrands} />
            {/* <Row className="mt-5">
        {items.length > 0 && items.map((item, index) => (
          <Col key={index} md={4} className="pb-3">
            <Card className="list-card position-relative">
              <div className="list-card-image">
                <div className="member-plan position-absolute">
                  <Badge className="badge" pill variant="dark">-2%</Badge>
                </div>
                <a href="#">
                  <Card.Img
                    src={item.itemDetails.image ? `http://your-server-url${item.itemDetails.image}` : potatoImg} 
                    variant="top"
                    className="img-fluid item-img w-100"
                    alt={item.itemDetails.name}
                  />
                </a>
              </div>
              <Card.Body className="py-2 position-relative product-desc">
                <div className="list-card-body">
                  <Card.Title>
                    <a href="#" className="product-title">
                      {item.itemDetails.name}
                    </a>
                  </Card.Title>
                  <Card.Text>
                    <span className="pro-price products-price">
                      ${item.itemDetails.price} <s className='orignal-price'>${item.itemDetails.discountedPrice || item.itemDetails.price}</s>
                    </span>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}

          </div>
        </div>
      </Container>
    </div>
  );
}

export default Category;
