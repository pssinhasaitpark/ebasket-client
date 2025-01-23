import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/esm/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import salt from "../../assests/images/Category-1.jpg"
import snacks from "../../assests/images/category-2.png"
import dry_fruits from "../../assests/images/category-3.jpg"
import all from "../../assests/images/category-all.png"
import rice from "../../assests/images/category-5.jpg"
import pulses from "../../assests/images/category-6.jpg"
import flour from "../../assests/images/category-7.jpg"
import left from "../../assests/images/left.svg"
import right from "../../assests/images/right.svg"
import banner from "../../assests/images/category-banner.jpeg"
import './Top_category.css'

function Categories() 
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
            <div style={{ backgroundColor:'rgb(244, 244, 244)'}}><img src={banner} alt="" style={{width:'100%', height:'300px', marginBottom:'-270px', objectFit:'cover' }} />
             <div  className="pt-5" style={{padding:"0% 7%"}}>
                 <div className="Category-heading"><h3>TOP CATEGORIES</h3></div>
                    <div className="pb-5">
                        <Slider {...settings} style={{background:'transparent'}}>
                                <div className="category-card"> <img className="category-img img-fluid" src={salt  } alt=""  style={{width:"120px", height:"120px", objectFit:"cover"}}/><h4 className="pt-3">Salt & Sugar</h4><h6 className="pt-1">(7 items)</h6></div>
                                <div className="category-card"> <img className="category-img img-fluid" src={snacks} alt=""  style={{width:"120px", height:"120px", objectFit:"cover"}}/><h4 className="pt-3">Snacks & Dry Fruits</h4><h6 className="pt-1">(7 items)</h6></div>
                                <div className="category-card"> <img className="category-img img-fluid" src={dry_fruits} alt=""  style={{width:"120px", height:"120px", objectFit:"cover"}}/><h4 className="pt-3">Oils & Dry Fruits</h4><h6 className="pt-1">(6 items)</h6></div>
                                <div className="category-card"> <img className="category-img img-fluid" src={all} alt=""  style={{width:"120px", height:"120px", objectFit:"cover"}}/><h4 className="pt-3">Browse All</h4><h6 className="pt-1">(41 items)</h6></div>
                                <div className="category-card"> <img className="category-img img-fluid" src={rice} alt=""  style={{height:"120px", width:"120px", objectFit:"cover"}}/><h4 className="pt-3">Rice</h4><h6 className="pt-1">(7 items)</h6></div>
                                <div className="category-card"> <img className="category-img img-fluid" src={pulses} alt=""  style={{width:"120px", height:"120px", objectFit:"cover"}}/><h4 className="pt-3">Pulses</h4><h6 className="pt-1">(6 items)</h6></div>
                                <div className="category-card"> <img className="category-img img-fluid " src={flour} alt=""  style={{width:"120px", height:"120px", objectFit:"cover"}}/><h4 className="pt-3">Flour</h4><h6 className="pt-1">(6 items)</h6></div>
                        </Slider>
                
                    </div>
             </div>
            </div>
    );
}

export default Categories;