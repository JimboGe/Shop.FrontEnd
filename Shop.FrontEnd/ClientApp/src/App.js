import React, { Component } from 'react';
import { Route } from 'react-router';
import  Layout from './components/Layout';
import  Home from './components/pages/Home/Home';
import  Service from './components/pages/Service/Service'
import  SignUp from './components/pages/SignUp/SignUp'
import SignIn from './components/pages/SignIn/SignIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default () => (
  <Layout>
      <Route exact path='/' component={Home} />
      <Route exact path='/services' component={Service} />
      <Route path='/user/signup' component={SignUp }/>
      <Route path='/user/signin' component={SignIn }/>
  </Layout>
);
