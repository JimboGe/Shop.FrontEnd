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
    scroll() {
        ///NEED FIX!!!
        try {                                                  
            let classNameFilter = 'filter';
            const element = document.getElementById('filter');
            if (window.pageYOffset >= 300) {
                element.setAttribute('class', 'filter fixed')
            }
            else {
                element.setAttribute('class', 'filter')
            }
        }
        catch(ex){console.warn(ex)}
         ///NEED FIX!!!
    }
    clickAnimation = (e) => {
        const element = e.target;
        const te = document.getElementById(e.target.id+'-menu');
        if (element.getAttribute('class') == 'hide-filter') {
            element.setAttribute('class', 'show-filter');
            
            te.setAttribute('class', 'visible');
        }
        else {
            element.setAttribute('class', 'hide-filter');
            te.setAttribute('class', 'hidden');
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
                                <li className='main'>
                                    <button className='hide-filter' id='gender' onClick={(e) => this.clickAnimation(e)}><span>СТАТЬ</span></button>
                                    <ul className='visible' id='gender-menu'>
                                        <li className='secondary'>
                                            <input type='checkbox' id='man'/>
                                            <span>Чоловіча</span>
                                        </li>
                                        <li className='secondary'>
                                            <input type='checkbox' id='woman'/>
                                            <span>Жіноча</span>
                                        </li>
                                    </ul>
                                </li>
                                <li className='main'>
                                    <button className='hide-filter' id='category' onClick={(e) => this.clickAnimation(e)}><span id='category'>КАТЕГОРІЯ</span></button>
                                </li>
                                <li className='main'>
                                    <button className='hide-filter' id='brand' onClick={(e) => this.clickAnimation(e)}><span>БРЕНД</span></button>
                                </li>
                                <li className='main'>
                                    <button className='hide-filter' id='color' onClick={(e) => this.clickAnimation(e)}><span>КОЛІР</span></button>
                                </li>
                                <li className='main'>
                                    <button className='hide-filter' id='size' onClick={(e) => this.clickAnimation(e)}><span>РОЗМІР</span></button>
                                </li>
                                <li className='main'>
                                    <button className='hide-filter' id='price' onClick={(e) => this.clickAnimation(e)}><span>ЦІНА</span></button>
                                </li>
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