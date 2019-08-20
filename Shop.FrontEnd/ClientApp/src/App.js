import React, { Component } from 'react';
import { Route } from 'react-router';
import  Layout  from './components/Layout';
import { Home } from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default () => (
  <Layout>
      <Route exact path='/' component={Home} />
  </Layout>
);
