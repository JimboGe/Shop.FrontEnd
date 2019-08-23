import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='container'>
                <div className='signup'>
                    <h3>Форма реєстрації</h3>
                    <p>
                        Зареєструвавшись на сайті, ви зможете повною мірою використовувати всі його можливості.
                        Всі поля обов'язкові до заповнення.
                    </p>
                    <div className="form-group">
                        <label>Ім'я</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ваше Ім'я" />
                    </div>
                    <div className="form-group">
                        <label>Прізвище</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ваше Прізвище" />
                    </div>
                    <div className="form-group">
                        <label>Місто</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ваше Місто" />
                    </div>
                    <div className="form-group">    
                        <label >Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ваш Email" />
                        <small id="emailHelp" className="form-text text-muted">Ми ніколи не поділимося вашим електронним листом ні з ким іншим.</small>
                    </div>
                    <div className="form-group">
                        <label >Пароль</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-dark">Зареєструватися</button>
                </div>
            </div>
        )
    }
}
export default SignUp