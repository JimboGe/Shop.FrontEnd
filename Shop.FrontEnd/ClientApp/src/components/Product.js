import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormControl, Row, Col } from "react-bootstrap";
import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Col md={4} lg={3} xl={3} className='product'>
                <div style={{ textAlign: 'center' }}>
                    <div className='image-box'>
                        <Link to='#'>
                            <span className='first-image'>
                                <img src='https://gard.com.ua/image/cache/catalog/shop/products/ccc1c473-6cac-11e9-af82-9e1680149fdf-450x600.jpg' />
                            </span>
                             <span className='second-image'>
                                <img src='https://gard.com.ua/image/cache/catalog/shop/products/ccc1c474-6cac-11e9-af82-9e1680149fdf-450x600.jpg'/>
                            </span> 
                        </Link>
                    </div>
                    <div className='description'>
                        <div>
                            <Link to='#'>
                                Футболка Brotherhood | світло-пісочний 2/19
                            </Link>
                        </div>
                        <div className='price'>250 грн</div>
                        <div className='size'>
                            <span>S,</span>
                            <span>M,</span>
                            <span>L,</span>
                            <span>XL,</span>
                            <span>XXL</span>
                        </div>
                        <div>
                            <button className='btn btn-dark'>Купити</button>
                        </div>
                    </div>
                </div>
            </Col>
        );
    }
}
export default Product