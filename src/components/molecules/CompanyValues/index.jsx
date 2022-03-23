import React from 'react';

import { Container,ImgContainer,TextContainer } from './style';

function CompanyValues({img, heading ,desciption}) {
  return (
    <Container>
      <ImgContainer>
        <img src={img} alt="images valores" />
      </ImgContainer>
      <TextContainer>
        <h2>{heading}</h2>
        <p>{desciption}</p>
      </TextContainer>
    </Container>
  );
}

export default CompanyValues;