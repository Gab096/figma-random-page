import React from 'react';
import Company from '../../components/organisms/Company';
import Header from '../../components/organisms/Header';
import Register from '../../components/organisms/Register';
import { Container } from './style';

function Home() {
  return( 
  <Container>
    <Header />
    <Register />
    <Company />
  </Container>
  );
}

export default Home;