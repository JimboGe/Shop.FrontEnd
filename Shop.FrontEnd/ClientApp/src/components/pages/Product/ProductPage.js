import React, { Component } from 'react';
import './ProductPage.css';
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup, Image, ImageWithZoom } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='product-page container'>
                <Row>
                    <Col lg={6}>
                        <CarouselProvider
                            naturalSlideWidth={70}
                            naturalSlideHeight={95}
                            totalSlides={5}>
                            <Slider classNameTray='test'>
                                <Slide index={0}><ImageWithZoom src='https://gard.com.ua/image/cache/catalog/shop/products/54a6416c-cbc0-11e8-ab13-ee24cb1b971f-930x1240.jpg' /></Slide>
                                <Slide index={1}><ImageWithZoom src='https://gard.com.ua/image/cache/catalog/shop/products/b917841c-ce0e-11e8-ab13-ee24cb1b971f-930x1240.jpg' /></Slide>
                                <Slide index={2}><ImageWithZoom src='https://gard.com.ua/image/cache/catalog/shop/products/54a6416b-cbc0-11e8-ab13-ee24cb1b971f-930x1240.jpg' /></Slide>
                                <Slide index={3}><ImageWithZoom src='https://gard.com.ua/image/cache/catalog/shop/products/54a6416b-cbc0-11e8-ab13-ee24cb1b971f-930x1240.jpg' /></Slide>
                                <Slide index={4}><ImageWithZoom src='https://gard.com.ua/image/cache/catalog/shop/products/54a6416b-cbc0-11e8-ab13-ee24cb1b971f-930x1240.jpg' /></Slide>
                            </Slider>
                            <ButtonBack className='button-move back'/>
                            <ButtonNext className='button-move next'/>
                            <DotGroup className='dot-group'/>
                        </CarouselProvider>
                    </Col>
                    <Col lg={5}>
                        <div>dd</div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default ProductPage;