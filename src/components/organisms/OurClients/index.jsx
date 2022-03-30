import React from 'react';
import ClientsCard from '../../molecules/ClientsCard';

import { Container, ClientsContainer } from './style';

function OurClients() {
  return (
  <Container>
      <h1>OUR EXCITING CLIENTS</h1>
      <ClientsContainer>
        {[1,2,3,4,5,6].map((i)=>{ return <ClientsCard />})}
      </ClientsContainer>
  </Container>
  );
}

export default OurClients;