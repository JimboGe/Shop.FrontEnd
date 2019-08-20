﻿import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem, Col, Row, Carousel, Form, FormControl, Dropdown } from "react-bootstrap";
import './NavMenu.css';

export class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {content: ''};
    }
  
  dropItemMan() {
    return (
      <div className='container dropdown'>
        <div className="row">
          <div className="col-sm">
            <ul className='droplist'>
              <Link to='#'>
                ОДЕЖА
              </Link>
              <Link to='#'>
                <li style={{ paddingTop: '10px' }}>
                  Джинси
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Джинсові шорти
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Футболки
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Спорт. штани
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Спорт. кофти
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Спорт. костюми
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Шорти
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Куртки
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Світшоти, толстовки
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-sm">
            <ul className='droplist'>
              <Link to='#'>
                РЮКЗАКИ, СУМКИ
              </Link>
              <Link to='#'>
                <li style={{ paddingTop: '10px' }}>
                  Бананки
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Рюкзаки
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Сумки на плече
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-sm">
            <ul className='droplist'>
              <Link to='#'>
                ВЗУТТЯ
              </Link>
              <Link to='#'>
                <li style={{ paddingTop: '10px' }}>
                  Кеди
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Кроссівки
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Мокасіни
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Туфлі
                </li>
              </Link>
              <Link to='#'>
                <li>
                  Шльопанці
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  dropItemWoman() {
    return (
      <div className='container dropdown'>
        <div className="row">
          <div className="col-sm">
            <ul className='droplist'>
              <Link to='#'>
                ОДЕЖА
            </Link>
              <Link to='#'>
                <li style={{ paddingTop: '10px' }}>
                  Джинси
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Джинсові шорти
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Футболки
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Плаття, сукні
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Спорт. кофти
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Спорт. костюми
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Шорти
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Юбки
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Комбінезони
              </li>
              </Link>
            </ul>
          </div>
          <div className="col-sm">
            <ul className='droplist'>
              <Link to='#'>
                РЮКЗАКИ, СУМКИ
            </Link>
              <Link to='#'>
                <li style={{ paddingTop: '10px' }}>
                  Бананки
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Рюкзаки
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Сумки на плече
              </li>
              </Link>
            </ul>
          </div>
          <div className="col-sm">
            <ul className='droplist'>
              <Link to='#'>
                ВЗУТТЯ
            </Link>
              <Link to='#'>
                <li style={{ paddingTop: '10px' }}>
                  Кеди
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Кроссівки
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Мокасіни
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Туфлі
              </li>
              </Link>
              <Link to='#'>
                <li>
                  Шльопанці
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  setDropItem(name){
    if(name == 'Man')this.setState({content: this.dropItemMan()});
    if(name == 'Woman')this.setState({content: this.dropItemWoman()});
}
 test(){
   alert('a');
 }
  render() {
    return (
      <div style={{ width: '100%' }}>
        <div style={{ borderRadius: '0' }} className='navbar top'>
          <nav>
            <div className='container'>
              <div style={{ float: 'left', marginTop: '3.5px' }}>
                <i className="fa fa-phone" style={{ fontSize: '25px', color: '#919191' }}></i>
              </div>
              <div style={{ float: 'left', marginLeft: '0.7%', marginTop: '3.5px' }}>
                <a href="#" className='phone'>+38 (096) 787 27 81</a>
              </div>
              <div style={{ float: 'left', marginLeft: '1%', paddingTop: '1px', marginTop: '3.5px' }}>
                <Link to='/services' className='services'> Доставка, оплата, повернення</Link>
              </div>
              <div style={{ float: 'right' }}>
                <Link to='/cart'>
                  <i className="fa fa-shopping-cart" style={{ fontSize: '18px' }}></i>
                </Link>
              </div>
              <div style={{ float: 'right' }}>
                <Form inline>
                  <FormControl type="text" placeholder="Пошук..." />
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
                  <Link className="nav-link" to="/man" onMouseEnter={()=>this.setDropItem('Man')} >Чоловіче</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/woman" onMouseEnter={()=>this.setDropItem('Woman')}>Жіноче</Link>
                  { this.state.content }
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
