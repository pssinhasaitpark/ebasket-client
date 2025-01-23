import Carousel from 'react-bootstrap/Carousel';
import home_hero_slider1 from '../../assests/images/home_hero_slider-image_1.png';
import home_hero_slider2 from '../../assests/images/home_hero_slider-image_2.png';
import home_hero_slider3 from '../../assests/images/home_hero_slider-image_3.png';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home_hero_slider1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home_hero_slider2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home_hero_slider3} 
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    
  );
}

export default Slider;
