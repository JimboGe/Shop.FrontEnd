import React, { Component } from 'react';
import Product from '../../Product';
import './ListProducts.css';
import { Row } from "react-bootstrap";
class ListProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='container'>
                <div style={{ margin: '20px 40px', width: '100%' }}>
                    <div className='menu'>
                        MENU
                    </div>
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
                </div>
            </div>
        );
    }
}
export default ListProducts