import React from 'react';
import { Slideshow } from '../../components/molecules/Slide';
import Company from '../../components/organisms/Company';
import Footer from '../../components/organisms/Footer';
import Form from '../../components/organisms/Form';
import Header from '../../components/organisms/Header';
import OurClients from '../../components/organisms/OurClients';
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
    <OurClients />
    <Form />
    <Footer />
  </Container>
  );
}

export default Home;