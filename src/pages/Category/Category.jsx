import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { Card, Badge, Row, Col } from 'react-bootstrap';
import './Category.css';
import rice from '../../asset/images/rice-icon.jpg';
import amul from '../../asset/images/Brands1.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/slices/categories-slice';
import { fetchBrands } from '../../store/slices/brands-slice';
import { useLocation , useParams } from "react-router-dom";
import { fetchItems } from '../../store/slices/products-slice';
import potatoImg from '../../asset/images/t3.png';
import useProductNavigation from "../../hooks/useProductNavigation";
import sorry from '../../asset/images/no-result copy.png'

const BASE_URL = process.env.REACT_APP_BASE_URL;
function Category() {
    const dispatch = useDispatch();
    const handleCardClick = useProductNavigation();

    const items = useSelector(state => state.items.items);
    const categories = useSelector(state => state.categories.categories);
    const brands = useSelector(state => state.brands.brands);

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const location = useLocation();
    const { id } = useParams();
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchBrands());
        dispatch(fetchItems());
    }, [dispatch]);

    useEffect(() => {
        console.log("Fetched items: ", items);
        console.log("Fetched Categories: ", categories);
        console.log("Fetched Brands: ", brands);
    }, [items, categories, brands]);

    useEffect(() => {
        if (id) {
            setSelectedCategories([id]); 
        }
    }, [id]);

    const handleCategoryChange = (event) => {
      const checked = event.target.checked;
      const category = event.target.value;
      setSelectedCategories(
          checked
              ? [...selectedCategories, category]
              : selectedCategories.filter((item) => item !== category)
      );
  };
  

    const handleBrandChange = (event) => {
        const brand = event.target.value;
        setSelectedBrands((prev) =>
            prev.includes(brand) ? prev.filter((item) => item !== brand) : [...prev, brand]
        );
    };

    const filteredItems = items.filter((item) => {
        const categoryMatches =
            selectedCategories.length === 0 || selectedCategories.includes(item?.itemDetails?.category?._id); 
    
        const brandMatches =
            selectedBrands.length === 0 || selectedBrands.includes(item?.itemDetails?.brand?.title);  
    
        return categoryMatches && brandMatches;
    });
    

    useEffect(() => {
        console.log("Filtered items: ", filteredItems);
    }, [filteredItems]);

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
                                    {categories.map((category, i) => (
                                        category.publish && (
                                            <li key={category._id} className="category-item">
                                                <a href="#">
                                                {/* onClick={(e) => e.preventDefault()} */}
                                                    <input
                                                        className="form-check-input category-item"
                                                        type="checkbox"
                                                        value={category._id}
                                                        id={`category-${i}`}
                                                        checked={selectedCategories.includes(category._id)}
                                                        onChange={handleCategoryChange}
                                                    />
                                                    <span className='input-title'>
                                                        <img
                                                            src={category.image ? `${category.image}` : rice}
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
                                                <a href="#">
                                                {/* onClick={(e) => e.preventDefault()} */}
                                                    <input
                                                        className="form-check-input category-item"
                                                        type="checkbox"
                                                        value={brand.title}
                                                        id={`brand-${brand._id}`}
                                                        checked={selectedBrands.includes(brand.title)}
                                                        onChange={handleBrandChange}
                                                    />
                                                    <span className='input-title'>
                                                        <img
                                                            src={brand.image ? `${brand.image}` : amul}
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
                        <Row className="mt-5">
                            {filteredItems.length === 0 ? (
                               <p className="no-products"><img src={sorry} alt="" /></p>
                            ) : (
                                filteredItems.map((item, index) => (
                                    <Col key={index} md={4} className="pb-3">
                                        <Card className="list-card position-relative" onClick={() => handleCardClick(item._id)}>
                                            <div className="list-card-image">
                                                <div className="member-plan position-absolute">
                                                    <Badge className="badge" pill variant="dark">-{item.itemDetails.discount}%</Badge>
                                                </div>
                                                <a href="#">
                                                    <Card.Img
                                                        src={item.itemDetails.mediaFiles[0]?.url ? `${item.itemDetails.mediaFiles[0].url}` : potatoImg}
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
                                                            ₹{ (item.itemDetails.price)-((item.itemDetails.discount*item.itemDetails.price)/100)}<s className='orignal-price'>₹{item.itemDetails.price}</s>
                                                        </span>
                                                    </Card.Text>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            )}
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Category;
