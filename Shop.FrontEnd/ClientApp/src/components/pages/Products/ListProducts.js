import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import Product from '../../Product';
import './ListProducts.css';

class ListProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        window.addEventListener('scroll', this.scroll)
      }
    scroll=()=>{
        let classNameFilter = 'filter';
        let element = document.getElementById('filter');
        if(window.pageYOffset >= 300){
            element.setAttribute('class','filter-fixed')
        }
        else{
            element.setAttribute('class','filter')
        }
    }
    render() {
        return (
            <div className='list-products'>
                <Row>
                    <Col lg={2}>
                        <div id='filter' className='filter'>
                            <ul>
                                <li className='title'>
                                    МЕНЮ
                                </li>
                                <Link to='#'>
                                    <li className='main'>
                                        <span>СТАТЬ</span>
                                       
                                    </li>
                                </Link>
                                <Link to='#'>
                                    <li className='main'>
                                        <span>КАТЕГОРІЯ</span>
                                       
                                    </li>
                                </Link>
                                <Link to='#'>
                                    <li className='main'>
                                        <span>БРЕНД</span>
                                       
                                    </li>
                                </Link>
                                <Link to='#'>
                                    <li className='main'>
                                        <span>КОЛІР</span>
                                        
                                    </li>
                                </Link>
                                <Link to='#'>
                                    <li className='main'>
                                        <span> РОЗМІР</span>
                                        
                                    </li>
                                </Link>
                                <Link to='#'>
                                    <li className='main'>
                                        <span> ЦІНА</span>
                                        
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={10}>
                        <div className='products'>
                            <Row>
                                <Product src_first='https://gard.com.ua/image/cache/catalog/shop/products/790ff25c-6d88-11e9-af82-9e1680149fdf-450x600.jpg'
                                    src_second='https://gard.com.ua/image/cache/catalog/shop/products/790ff25e-6d88-11e9-af82-9e1680149fdf-450x600.jpg' />
                                <Product src_first='https://gard.com.ua/image/cache/catalog/shop/products/ccc1c473-6cac-11e9-af82-9e1680149fdf-450x600.jpg'
                                    src_second='https://gard.com.ua/image/cache/catalog/shop/products/ccc1c474-6cac-11e9-af82-9e1680149fdf-450x600.jpg' />
                                <Product src_first='https://gard.com.ua/image/cache/catalog/shop/products/790ff25c-6d88-11e9-af82-9e1680149fdf-450x600.jpg'
                                    src_second='https://gard.com.ua/image/cache/catalog/shop/products/790ff25e-6d88-11e9-af82-9e1680149fdf-450x600.jpg' />
                                <Product src_first='https://gard.com.ua/image/cache/catalog/shop/products/790ff25c-6d88-11e9-af82-9e1680149fdf-450x600.jpg'
                                    src_second='https://gard.com.ua/image/cache/catalog/shop/products/790ff25e-6d88-11e9-af82-9e1680149fdf-450x600.jpg' />

                            </Row>
                            <Row>
                                <Product src_first='https://gard.com.ua/image/cache/catalog/shop/products/790ff25c-6d88-11e9-af82-9e1680149fdf-450x600.jpg'
                                    src_second='https://gard.com.ua/image/cache/catalog/shop/products/790ff25e-6d88-11e9-af82-9e1680149fdf-450x600.jpg' />
                                <Product src_first='https://gard.com.ua/image/cache/catalog/shop/products/790ff25c-6d88-11e9-af82-9e1680149fdf-450x600.jpg'
                                    src_second='https://gard.com.ua/image/cache/catalog/shop/products/790ff25e-6d88-11e9-af82-9e1680149fdf-450x600.jpg' />
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default ListProducts