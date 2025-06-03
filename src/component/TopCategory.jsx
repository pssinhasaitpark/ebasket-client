import React, { useEffect } from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/esm/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import snacks from "../asset/images/category-2.png"
import left from "../asset/images/left.svg"
import right from "../asset/images/right.svg"
import './TopCategory.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../store/slices/categories-slice';
import sorry from "../asset/images/no-result copy.png"
import Browse_All from "../asset/images/Browse_all.png"

function TopCategories() {
  /* eslint-disable */
  const dispatch = useDispatch();
  const { categories, loading: categoryLoading, error: categoryError } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={'arrow ${className}'}>
        <img src={left} alt="" className="arrows position-absolute bottom-50 start-0 translate-middle-x  arrows"
          style={{ width: "8%", color: "white", paddingRight: "4%" }} />
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={'arrow ${className}'}>
        <img src={right} alt="" className="position-absolute bottom-50  start-100 translate-middle-x arrows"
          style={{ width: "8%", color: "white", paddingLeft: "4%" }} />
      </div>
    );
  };


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    gap: 20,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 977,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 291,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        }
      }]

  };
  return (
    <div>
      {categories.length > 0 ? (
        <div className="top-category-container">


          <Container>
            <div className="pt-5 container section-container">
              <div className="Category-heading"><h3>TOP CATEGORIES</h3></div>
              <div className="pb-5">
                <Slider {...settings} style={{ background: 'transparent' }}>
                  {[ {
                  _id: 'browse-all',
                  name: 'Browse All', 
                  image: `${Browse_All}`,
                  itemCount: categories.reduce((total, category) => total + category.itemCount, 0),
                  publish: true,  
                  }, ...categories]
                    .map((category) => (
                      category.publish && (
                        <Link key={category._id} 
                        to={category._id === 'browse-all' ? '/productList' : `/categories/${category._id}`} 
                        className="category-card">
                          <img
                            className="category-img img-fluid"
                            src={category.image ? `${category.image}` : snacks}
                            alt={category.name}
                          />
                          <h4 className="pt-3">{category.name}</h4>
                          <h6 className="pt-1">({category.itemCount} items)</h6>
                        </Link>
                      )
                    ))
                  }
                </Slider>


              </div>
            </div>
          </Container>
        </div>
      ) : (<p className="no-products"><img src={sorry} alt="" /></p>)
      }
    </div>
  );
}

export default TopCategories;


//demo.jsx
