import React, { Component } from 'react';
import Product from '../../Product';
class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{marginTop:'40px', marginBottom:'40px'}}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        );
    }
}
export default ListProduct