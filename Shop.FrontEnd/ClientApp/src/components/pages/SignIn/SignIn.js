import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormControl, Row, Col } from "react-bootstrap";
import './SignIn.css'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='container'>
                <Row>
                    <Col md={6}>
                        <div className='signin left'>
                            <h2>Увійти</h2>
                            <p>
                                Якщо ви вже зареєстровані на shop4u.com.ua, введіть ваші email та пароль для входу.
                            </p>
                            <div className="form-group">
                                <label >Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ваш Email" />
                            </div>
                            <div className="form-group">
                                <label >Пароль</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-dark">Увійти</button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='signin right'>
                            <h2>Ще не зареєстровані?</h2>
                            <p>Якщо ви ще не реєструвалися на нашому сайті, натисніть кнопку "Зареєструватися".</p>
                           <Link to='/user/signup'><button className="btn btn-dark">Зареєструватися</button></Link> 
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default SignIn