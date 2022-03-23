import React from 'react';
import Header from '../../components/organisms/Header';
import Register from '../../components/organisms/Register/indesx';
import { Container } from './style';

function Home() {
  return( 
  <Container>
    <Header />
    <Register />
  </Container>
  );
}

export default Home;