import React , { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import rice from "../asset/images/Basmati.jpg"
import left from "../asset/images/left.svg"
import right from "../asset/images/right.svg"
import Container from 'react-bootstrap/Container';  
import './Slick-Slider.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from "../store/slices/products-slice";


function Slick() 
{     
  const dispatch = useDispatch();
  const items = useSelector(state => state.items.items);

   useEffect(() => {
          dispatch(fetchItems());
      }, [dispatch]);

 useEffect(() => {
    console.log('Items:', items);
  }, [items]);

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
              breakpoint: 320,  
              settings: {
                slidesToShow: 1, 
                slidesToScroll: 1,
                nextArrow:false,
                prevArrow:false,
              }
            }]

        };
    return(
      <div>
                    <div className="pb-5" style={{position:'relative'}}>
                      <Container>
                        <Slider {...settings} style={{background:'tranparent'}}>
                        {items.length > 0 && items.map((item, index) => (
                            item.publish && (
                              <div key={index} className="Slick-card">
                                <div className="Slick-img-section">
                                  <img
                                    className="Slick-img img-fluid"
                                    src={
                                      item.itemDetails.mediaFiles && item.itemDetails.mediaFiles[0]?.url
                                        ? `http://192.168.0.111:3001${item.itemDetails.mediaFiles[0].url}`
                                        : rice 
                                    }
                                    alt={item.itemDetails.name}
                                  />
                                </div>
                                <div className="py-2 slick-content">
                                  <h6 className="mb-2 pt-2 slick-title">
                                    <a className="title-link">{item.itemDetails.name}</a>
                                  </h6>
                                  <h6 className="mb-1 pt-2 slick-price">
                                    <span className="actual-price">${item.itemDetails.price}</span>
                                    <s>${item.itemDetails.discountedPrice || item.itemDetails.price}</s>
                                  </h6>
                                </div>
                              </div>
                            )
                          ))}
                                </Slider>
                
                      </Container>
                    </div>
             </div>
    );
}

export default Slick;