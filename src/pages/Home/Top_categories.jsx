import React , { useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/esm/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import snacks from "../../assests/images/category-2.png"
import left from "../../assests/images/left.svg"
import right from "../../assests/images/right.svg"
import banner from "../../assests/images/category-banner.jpeg"
import './Top_category.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/slices/categories-slice';


function Categories() {

  const dispatch = useDispatch();
  const { categories, loading: categoryLoading, error: categoryError } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  if (categoryLoading) {
    return <p>Loading categories</p>;
  }

  if (categoryError) {
    return <p>Error: {categoryError}</p>;
  }

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={'arrow ${className}'}>
        <img src={left} alt="" class="arrows" className="position-absolute bottom-50 start-0 translate-middle-x  arrows"
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
    <div style={{ backgroundColor: 'rgb(244, 244, 244)' }}><img src={banner} alt="" className="before-banner-img"/>
        <Container>
      <div className="pt-5 container section-container">
          <div className="Category-heading"><h3>TOP CATEGORIES</h3></div>
          <div className="pb-5">
            <Slider {...settings} style={{ background: 'transparent' }}>
            
            {categories.map((category) => (
             category.publish && (
              <Link to={`/categories/${category._id}`} className="category-card">
  <img
    className="category-img img-fluid"
    src={category.image ? `http://192.168.0.111:3001${category.image}` : snacks} // default to 'snacks' image if category has no image
    alt={category.name}
  />
  <h4 className="pt-3">{category.name}</h4>
  <h6 className="pt-1">({category.itemsCount} items)</h6>
</Link>
                )
              ))}
  
            </Slider>
          </div>
      </div>
        </Container>
    </div>
  );
}

export default Categories;