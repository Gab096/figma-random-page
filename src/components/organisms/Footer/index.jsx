import React from 'react';
import { Icons } from '../../../assets';

import { Container,SocialMediaContainer } from './style';


const anoAtual = new Date().getFullYear();

function Footer() {
  return (
   <Container>
      <h5>&copy; copyright {anoAtual} | all rights reserved</h5>
      <SocialMediaContainer>
        <h1>Fallow Us:</h1>
        <img src={Icons.SocialMedia} alt="social media" />
      </SocialMediaContainer>
   </Container>
  );
}

export default Footer;