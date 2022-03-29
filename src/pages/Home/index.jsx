import React from 'react';
import { Slideshow } from '../../components/molecules/Slide';
import Company from '../../components/organisms/Company';
import Header from '../../components/organisms/Header';
import OurServices from '../../components/organisms/OurServices';
import Register from '../../components/organisms/Register';
import { Container } from './style';

function Home() {
  return( 
  <Container>
    <Header />
    <Register />
    <Company />
    <OurServices />
    <Slideshow />
  </Container>
  );
}

export default Home;