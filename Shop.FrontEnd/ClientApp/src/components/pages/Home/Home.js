import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import './Home.css';
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";


class Home extends Component {

  render() {
    return (
      <div className='container'>
        <div className='grid'>
          <div className='item1'>
            <div className='carousel big ' >
              <Carousel slidesToShow={1} cellAlign="center"  speed={600} autoplay={true} autoplayInterval={2000}
                wrapAround={true} pauseOnHover={true}
                renderCenterLeftControls={({ previousSlide }) => (
                  <button className='left' onClick={previousSlide} />
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button className='right' onClick={nextSlide} />
                )}>
                <Link to='#1'><img src="https://www.lesitedelasneaker.com/wp-content/images/2019/05/adidas-yeezy-350-boost-v2-black-non-reflective-banner1.jpg" /></Link>
                <Link to='#2'><img src="https://photo.yupoo.com/vans1966666666/0add2c40/3e3fad3c.jpeg" /></Link>
                <Link to='#3'><img src="https://photo.yupoo.com/vans1966666666/07534044/dc2fc888.jpeg" /></Link>
              </Carousel>
            </div>
          </div>
          <div className='item2'>
            <div className='carousel small ' >
              <Carousel slidesToShow={1} cellAlign="center" speed={600} autoplay={true} autoplayInterval={2000}
                wrapAround={true} pauseOnHover={true}
                renderCenterLeftControls={({ previousSlide }) => (
                  <button className='left' onClick={previousSlide} />
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button className='right' onClick={nextSlide} />
                )}>
                <Link to='#1'><img src="https://photo.yupoo.com/vans1966666666/ae014356/dcfff5ea.jpeg" /></Link>
                <Link to='#2'><img src="https://photo.yupoo.com/vans1966666666/0add2c40/3e3fad3c.jpeg" /></Link>
                <Link to='#3'><img src="https://photo.yupoo.com/vans1966666666/07534044/dc2fc888.jpeg" /></Link>
              </Carousel>
            </div>
          </div>
          <div className='item3'>
            <div className='carousel small ' >
              <Carousel slidesToShow={1} cellAlign="center" speed={600} autoplay={true} autoplayInterval={2000}
                wrapAround={true} pauseOnHover={true}
                renderCenterLeftControls={({ previousSlide }) => (
                  <button className='left' onClick={previousSlide} />
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button className='right' onClick={nextSlide} />
                )}>
                <Link to='#1'><img src="https://photo.yupoo.com/vans1966666666/ae014356/dcfff5ea.jpeg" /></Link>
                <Link to='#2'><img src="https://photo.yupoo.com/vans1966666666/0add2c40/3e3fad3c.jpeg" /></Link>
                <Link to='#3'><img src="https://photo.yupoo.com/vans1966666666/07534044/dc2fc888.jpeg" /></Link>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;