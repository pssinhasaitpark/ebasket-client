import Slick from '../component/Slick-Slider';
import {  Container } from 'react-bootstrap';
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import '../component/Slick-Slider.css'
import left from "../asset/images/left.svg"
import right from "../asset/images/right.svg"
import './Most_selling.css'
import img1 from '../asset/images/offer-banner1.png';
import img2 from '../asset/images/offer-banner2.png';
import img3 from '../asset/images/offer-banner3.png';



function Selling() {
    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return(
            <div onClick={onClick} className={'arrow ${className}'}>
                <img src={left} alt="" class="arrows" className="position-absolute bottom-50 start-0 translate-middle-x  arrows" 
                    style={{width:"8%",color:"white", paddingRight:"4%"}}/>
            </div>  
        );
        } ;

        const SampleNextArrow = (props) => {
            const { className, style, onClick } = props;
            return(
                <div onClick={onClick} className={'arrow ${className}'}>
                    <img src={right} alt="" className="position-absolute bottom-50  start-100 translate-middle-x arrows" 
                    style={{width:"8%",color:"white", paddingLeft:"4%" }}/>
                </div>
            );
            } ;


        var settings = {
          dots: false,
          infinite: true,
          speed: 500,
          gap: 20,
          slidesToShow: 3,
          slidesToScroll: 1,
        //   nextArrow: <SampleNextArrow to="next" />,
        //   prevArrow: <SamplePrevArrow to="prev" />,
          responsive: [
            {
              breakpoint: 1199,  
              settings: {
                slidesToShow: 3, 
                slidesToScroll: 1,
                nextArrow:false,
                prevArrow:false,
              },
            },
            {
              breakpoint: 977,  
              settings: {
                slidesToShow: 3, 
                slidesToScroll: 1,
                nextArrow:false,
                prevArrow:false,
              },
            },
            {
              breakpoint: 768,  
              settings: {
                slidesToShow: 1, 
                slidesToScroll: 1,
                dots: true,
                // nextArrow:<SampleNextArrow to="next" />,
                // prevArrow:<SamplePrevArrow to="prev" />,
              },
            },
            {
              breakpoint: 320,  
              settings: {
                slidesToShow: 1, 
                dots: true,
                slidesToScroll: 1,
                // nextArrow:<SampleNextArrow to="next" />,
                // prevArrow:<SamplePrevArrow to="prev" />,
              }
            }]

        };
  return (
    <div className='pt-4 pb-4'>
    <Container>
        <div className='main-contain'><h3 className='main-heading'>MOST SELLING PRODUCTS</h3></div>
        <div>
            <Slick/>
        </div>
        <div style={{padding:"0%"}}>
                    <div className="pb-5">
                        <Slider {...settings} style={{background:'transparent'}}>
                                <div className="offer-banner">
                                  <div className="offer-banner"> <img className="Slick-img img-fluid" src={img1} alt=""  /></div>
                                </div>
                                <div className="offer-banner">
                                  <div className=""> <img className="Slick-img img-fluid" src={img2} alt=""  /></div>
                                </div>
                                <div className="offer-banner">
                                  <div className="offer-banner"> <img className="Slick-img img-fluid" src={img3} alt=""  /></div>
                                </div>
                        </Slider>
                
                    </div>
             </div>
    </Container>
    </div>
);
};

export default Selling;
