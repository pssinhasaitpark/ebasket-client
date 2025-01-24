import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import rice from "../assests/images/Basmati.jpg"
import left from "../assests/images/left.svg"
import right from "../assests/images/right.svg"
import './Slick-Slider.css'

function Slick() 
{   
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
                nextArrow:false,
                prevArrow:false,
              },
            },
            {
              breakpoint: 768,  
              settings: {
                slidesToShow: 2, 
                slidesToScroll: 1,
                nextArrow:false,
                prevArrow:false,
              },
            },
            {
              breakpoint: 291,  
              settings: {
                slidesToShow: 1, 
                slidesToScroll: 1,
                nextArrow:false,
                prevArrow:false,
              }
            }]

        };
    return(
            
             <div style={{padding:"0%"}}>
                    <div className="pb-5">
                        <Slider {...settings} style={{background:'transparent'}}>
                                <div className="Slick-card">
                                  <div className="Slick-img-section"> <img className="Slick-img img-fluid" src={rice} alt=""  /></div>
                                  <div className="py-2 slick-content">
                                    <h6 className="mb-2 pt-2 slick-title"><a className="title-link">India Gate Premium Basmati Rice</a></h6>
                                    <h6 className="mb-1 pt-2 slick-price"><span className="actual-price">$278.07</span><s>$299.00</s></h6>
                                  </div>
                                </div>
                                <div className="Slick-card">
                                  <div className="Slick-img-section"> <img className="Slick-img img-fluid" src={rice} alt=""  /></div>
                                  <div className="py-2 slick-content">
                                    <h6 className="mb-2 pt-2 slick-title"><a className="title-link">India Gate Premium Basmati Rice</a></h6>
                                    <h6 className="mb-1 pt-2 slick-price"><span className="actual-price">$278.07</span><s>$299.00</s></h6>
                                  </div>
                                </div>
                                <div className="Slick-card">
                                  <div className="Slick-img-section"> <img className="Slick-img img-fluid" src={rice} alt=""  /></div>
                                  <div className="py-2 slick-content">
                                    <h6 className="mb-2 pt-2 slick-title"><a className="title-link">India Gate Premium Basmati Rice</a></h6>
                                    <h6 className="mb-1 pt-2 slick-price"><span className="actual-price">$278.07</span><s>$299.00</s></h6>
                                  </div>
                                </div>
                                <div className="Slick-card">
                                  <div className="Slick-img-section"> <img className="Slick-img img-fluid" src={rice} alt=""  /></div>
                                  <div className="py-2 slick-content">
                                    <h6 className="mb-2 pt-2 slick-title"><a className="title-link">India Gate Premium Basmati Rice</a></h6>
                                    <h6 className="mb-1 pt-2 slick-price"><span className="actual-price">$278.07</span><s>$299.00</s></h6>
                                  </div>
                                </div>
                                <div className="Slick-card">
                                  <div className="Slick-img-section"> <img className="Slick-img img-fluid" src={rice} alt=""  /></div>
                                  <div className="py-2 slick-content">
                                    <h6 className="mb-2 pt-2 slick-title"><a className="title-link">India Gate Premium Basmati Rice</a></h6>
                                    <h6 className="mb-1 pt-2 slick-price"><span className="actual-price">$278.07</span><s>$299.00</s></h6>
                                  </div>
                                </div>
                                <div className="Slick-card">
                                  <div className="Slick-img-section"> <img className="Slick-img img-fluid" src={rice} alt=""  /></div>
                                  <div className="py-2 slick-content">
                                    <h6 className="mb-2 pt-2 slick-title"><a className="title-link">India Gate Premium Basmati Rice</a></h6>
                                    <h6 className="mb-1 pt-2 slick-price"><span className="actual-price">$278.07</span><s>$299.00</s></h6>
                                  </div>
                                </div> <div className="Slick-card">
                                  <div className="Slick-img-section"> <img className="Slick-img img-fluid" src={rice} alt=""  /></div>
                                  <div className="py-2 slick-content">
                                    <h6 className="mb-2 pt-2 slick-title"><a className="title-link">India Gate Premium Basmati Rice</a></h6>
                                    <h6 className="mb-1 pt-2 slick-price"><span className="actual-price">$278.07</span><s>$299.00</s></h6>
                                  </div>
                                </div>
                                <div className="Slick-card">
                                  <div className="Slick-img-section"> <img className="Slick-img img-fluid" src={rice} alt=""  /></div>
                                  <div className="py-2 slick-content">
                                    <h6 className="mb-2 pt-2 slick-title"><a className="title-link">India Gate Premium Basmati Rice</a></h6>
                                    <h6 className="mb-1 pt-2 slick-price"><span className="actual-price">$278.07</span><s>$299.00</s></h6>
                                  </div>
                                </div>
                                </Slider>
                
                    </div>
             </div>
    );
}

export default Slick;