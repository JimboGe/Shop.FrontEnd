import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import './Home.css';
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";


class Home extends Component {

  render() {
    return (
      <div>
        <div className='grid'>
          <div className='item1'>
            <div className='carousel big ' >
              <Carousel slidesToShow={1} cellAlign="center" speed={1000} autoplay={true} autoplayInterval={4000}
                wrapAround={true} 
                renderCenterLeftControls={({ previousSlide }) => (
                  <button className='left' onClick={previousSlide} />
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button className='right' onClick={nextSlide} />
                )}>
                <Link to='#'><img src='/img/home/carousel/1big-1920x500.jpg' /></Link>
                <Link to='#'><img src='/img/home/carousel/43-1920x500.jpg' /></Link>
                <Link to='#'><img src='/img/home/carousel/banner-new-size-RU-1920x500.jpg' /></Link>
                <Link to='#'><img src='/img/home/carousel/ru-1920x500.jpg' /></Link>
              </Carousel>
            </div>
          </div>
          <div className='item item2'>
            <div>
              <Link to='#'><img src='/img/home/backpacks.jpg' /></Link>
            </div>
          </div>
          <div className='item item3'>
            <div>
              <Link to='#'><img src='/img/home/accessories.jpg' /></Link>
            </div>
          </div>
          <div className='item item4'>
            <div>
              <Link to='#'><img src='/img/home/outerwear.jpg' /></Link>
            </div>
          </div>
          <div className='item item5'>
            <div>
              <Link to='#'><img src='/img/home/shtani.jpg' /></Link>
            </div>
          </div>
          <div className='item item6'>
            <div>
              <Link to='#'><img src='/img/home/hudi.jpg' /></Link>
            </div>
          </div>
          <div className='item item7'>
            <div>
              <Link to='/cart'><img src='/img/home/shoes.jpg' /></Link>
            </div>
          </div>
         
        </div>
      </div>
    );
  }
}
export default Home;