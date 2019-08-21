import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormControl } from "react-bootstrap";
import styles from './NavMenu.css';

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '', 
      displayMan:false,
      displayWoman:false,
      displayCart:false,
      contentCart: ''
    };
    }
  dropItemMan() {
    return (
      <div className='container dropdown' style={{marginTop:'0px',marginLeft:'-27px'}}>
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
                  Куртки, анораки
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
              <Link to='#' >
                <p style={{marginTop:'20px'}}>БЕЙСБОЛКИ</p>
              </Link> 
               <Link to='#'>
               <p style={{marginTop:'15px'}}>ШКАРПЕТКИ</p>
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
      <div className='container dropdown'style={{marginTop:'0px'}}>
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
              <Link to='#'>
                <li>
                  Куртки
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
              <Link to='#' >
                <p style={{marginTop:'20px'}}>ШКАРПЕТКИ</p>
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
  dropItemCart(){
   return(
      <div className='cart'>
        <Link to='/cart'><p>1 товар (Дивитися)</p></Link>
        <div className='price'>
           <p>Сума <span>100 грн.</span></p>
        </div>
        <Link to='cart'><Button className='btn-cart'>Оформить заказ</Button></Link>
      </div>
   );
  }
  setDropItem(name){
    if(name == 'Man'){
      this.setState({content: this.dropItemMan(), displayMan: true, displayWoman:false});
    }
    if(name == 'Woman')
    {
      this.setState({content: this.dropItemWoman(), displayMan: false, displayWoman:true});
    }
    if(name == 'none'){
      this.setState({content:'',displayMan: false, displayWoman:false});
    }
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
              <div style={{ float: 'left', marginLeft: '0.7%', marginTop: '3.5px' }} className='phone'>
                <a href="#" className='phone'>+38 (096) 787 27 81</a>
              </div>
              <div style={{ float: 'left', marginLeft: '1%', paddingTop: '1px', marginTop: '3.5px' }}>
                <Link to='/services' className='services'> Доставка, оплата, повернення</Link>
              </div>
              <div style={{ float: 'right' }}>
                <Link to='/cart' onMouseEnter={()=>this.setState({displayCart:true,contentCart:this.dropItemCart()})} 
                      onMouseLeave={()=>this.setState({displayCart:false, contentCart:''})}>
                  <i className="fa fa-shopping-cart" style={{ fontSize: '18px' }}></i>
                </Link>
                {this.state.displayCart && this.state.contentCart}
                <Link to='/user/login' className='login-logo' >
                    <i className="fa fa-user" style={{ fontSize: '18px' }}></i>
                    <span>Вхід</span>
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
              <ul className="nav">
                <li className="nav-item" onMouseEnter={()=>this.setDropItem('Man')} onMouseLeave={()=>this.setDropItem('none')}>
                  <Link className="nav-link" to="/man">Чоловіче
                  </Link>
                    { this.state.displayMan &&
                      this.state.content
                    }
                </li>
                <li className="nav-item" onMouseEnter={()=>this.setDropItem('Woman')} onMouseLeave={()=>this.setDropItem('none')}>
                  <Link className="nav-link" to="/woman">Жіноче</Link>
                    { this.state.displayWoman &&
                      this.state.content
                    }
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
export default NavMenu;