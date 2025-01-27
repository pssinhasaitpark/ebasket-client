import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slider.css";
import sc_1 from "../asset/images/t1.png";
import sc_2 from "../asset/images/t2.png";
import sc_3 from "../asset/images/t3.png";
import sc_4 from "../asset/images/t4.png";
import sc_5 from "../asset/images/t2.png";
import sc_6 from "../asset/images/t1.png";
import arrow_left from "../asset/images/arrow-left.svg";
import arrow_right from "../asset/images/arrow-right.svg";

export default function SimpleSlider() {
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <img src={arrow_right} class="arrows" style={{ color: "white" }} />
      </div>
    );
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <img
          src={arrow_left}
          className="position-absolute top-50 start-50 translate-middle-x arrows"
          style={{ color: "white" }}
        />
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow to="next" />,
    // prevArrow: <SamplePrevArrow to="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <>
      <Slider {...settings} className="">

            <div className="p-1 border">
              <img src="https://firebasestorage.googleapis.com/v0/b/ebasket-85209.appspot.com/o/images%2Fbasket-white-potatoes_1720518201922.jpg?alt=media&token=5d68c1d0-3578-4235-951f-b87181e9e618" variant="top" className="img-fluid item-img w-100" alt="" className="slider-img" />
              <h3 className="slider-heding cart-text m-2"></h3>
            </div>
            <div className="p-1 border">
              <img src="https://firebasestorage.googleapis.com/v0/b/ebasket-85209.appspot.com/o/images%2Fbasket-white-potatoes_1720518201922.jpg?alt=media&token=5d68c1d0-3578-4235-951f-b87181e9e618" variant="top" className="img-fluid item-img w-100" alt="" className="slider-img"/>
              <h3 className="slider-heding m-2"></h3>
            </div>
            <div className="p-1 border">
              <img src="https://firebasestorage.googleapis.com/v0/b/ebasket-85209.appspot.com/o/images%2Fbasket-white-potatoes_1720518201922.jpg?alt=media&token=5d68c1d0-3578-4235-951f-b87181e9e618" variant="top" className="img-fluid item-img w-100" alt="" className="slider-img"/>
              <h3 className="slider-heding m-2"></h3>
            </div>
            <div className="p-1 border">
              <img src="https://firebasestorage.googleapis.com/v0/b/ebasket-85209.appspot.com/o/images%2Fbasket-white-potatoes_1720518201922.jpg?alt=media&token=5d68c1d0-3578-4235-951f-b87181e9e618" variant="top" className="img-fluid item-img w-100" alt="" className="slider-img"/>
              <h3 className="slider-heding m-2"></h3>
            </div>
          
      
      </Slider>
    </>
  );
}
