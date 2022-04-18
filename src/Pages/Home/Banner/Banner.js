import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import body1 from '../../../Images/b3.jpg'
import body2 from '../../../Images/b2.jpg'
import body3 from '../../../Images/b4.jpg'
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel className='mb-5' activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img style={{height:'500px'}}
            className="d-block w-100"
            src={body1} 
            alt="First slide"
          />
          <Carousel.Caption>
          <h1>As a trainner my first Success</h1>
            <h3 className='text-info'>After 25 days TrainedUp</h3>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'500px'}}
            className="d-block w-100"
            src={body2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
              <h1>As a trainner my second Success</h1>
            <h3 className='text-info'>After six month Trainedup</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'500px'}}
            className="d-block w-100"
            src={body3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
              <h1>As a trainner my Ultimate Success</h1>
            <h3 className='text-info'>After 1 year Trainedup</h3>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;