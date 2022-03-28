import React from 'react';

import { 
  ContainerSection, 
  Container,
  TitleContainer,
  ServicesIconContainer,
  ServicesCardContainer, 
} from './style';
import { Icons } from '../../../assets';
import ServicesCard from '../../molecules/ServicesCard';

function OurServices() {
  return (
  <ContainerSection>
    <ServicesIconContainer>
      <img src={Icons.Services} alt="servicos icone" />
    </ServicesIconContainer>
    <Container>
      <TitleContainer>
        <h2>OUR SERVICES</h2>
        <p>
        Lorem Ipsum is simply dummy text of the printing and
       typesetting industry. Lorem Ipsum has been the
       industry's standard dummy text ever since the 1500s,
        </p>
      </TitleContainer>
      <ServicesCardContainer>
          <ServicesCard img={Icons.Graphic}/>
          <ServicesCard img={Icons.Coneect}/>
          <ServicesCard img={Icons.Atendace}/>
          <ServicesCard img={Icons.Terminal}/>
          <ServicesCard img={Icons.Safety}/>
          <ServicesCard img={Icons.PieaceCircle}/>
      </ServicesCardContainer>
    </Container>
  </ContainerSection>
  );
}

export default OurServices;