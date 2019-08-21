import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import  NavMenu  from './NavMenu';
import  Footer  from './Footer';

export default props => (
  <Grid fluid>
    <Row>
      <NavMenu />
    </Row>
    <Row>
      {props.children}
    </Row>
    <Row>
      <Footer/>
    </Row>
  </Grid>
);  
