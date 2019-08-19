import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem, Col, Row, Carousel, Form, FormControl } from "react-bootstrap";
import './NavMenu.css';
import 'font-awesome/css/font-awesome.min.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <div style={{ width: '100%' }}>
        <div style={{ borderRadius: '0' }} className='navbar top'>
          <nav>
            <div className='container'>
              <div style={{ float: 'left', marginTop:'3.5px'}}><i className="fa fa-phone" style={{ fontSize: '25px', color: '#919191' }}></i></div>
              <div style={{ float: 'left', marginLeft: '0.7%', marginTop:'3.5px' }}><a href="#" className='phone'>+38 (096) 787 27 81</a></div>
              <div style={{ float: 'left', marginLeft: '1%', paddingTop: '1px', marginTop:'3.5px' }}><Link to='/services' className='services'> Доставка, оплата, повернення</Link></div>
              <div style={{ float: 'right' }}> <Link to='/cart'><i class="fa fa-shopping-cart" style={{ fontSize: '18px' }}></i></Link></div>
              <div style={{ float: 'right' }}>
                <Form inline>
                  <FormControl type="text" placeholder="Пошук..."/>
                </Form>
              </div>
            </div>
          </nav>
        </div>
        <div style={{ borderRadius: '0' }} className='navbar bot'>
          <nav>
            <div className='container'>
              <Link to="/" className='navbar-brand'>Shop4You</Link>
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/man">Чоловіче</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/woman">Жіноче</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/backpacks">Рюкзаки</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/bags">Сумки-бананки</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news">Новинки</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/discounts">Знижки</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
