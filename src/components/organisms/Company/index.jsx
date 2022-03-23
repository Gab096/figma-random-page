import React from 'react';
import CompanyValues from '../../molecules/CompanyValues';
import { Icons , Images } from '../../../assets';
import { Container,CompanyValuesContainer, CeoContainer } from './style';

function Company() {
  return (
  <Container>
    <CompanyValuesContainer>
      <CompanyValues 
      img={Icons.Info} 
      heading="HEADING 1"
      desciption="Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s," 
      />
      <CompanyValues 
      img={Icons.Espiral} 
      heading="HEADING 2"
      desciption="Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s," 
      />
      <CompanyValues 
      img={Icons.Glasses} 
      heading="HEADING 3"
      desciption="Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s," 
      />
    </CompanyValuesContainer> 
    <CeoContainer>
     <img src={Images.CEO} alt="ceoimage" />
    </CeoContainer>
  </Container>
  );
}

export default Company;