import React from 'react';
import { Icons } from '../../../assets'
import { Container } from './style';

function ClientsCard() {
  return (
  <Container>
    <img src={Icons.LogoGray} alt="logo" />
  </Container>
  );
}

export default ClientsCard;