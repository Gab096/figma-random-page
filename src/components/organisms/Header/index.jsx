import React from 'react';

import { AccordionUl, UlContainer, Container, LogoContainer, Divider } from './style';
import { Icons } from '../../../assets/index';

function Header() {

  return (
  <Container>
    <LogoContainer>
        <img src={Icons.Logo} alt="logo" />
    </LogoContainer>
    <UlContainer>
        <li><a href="df">HOME</a></li>
        <li><a href="sdf">HOME1</a></li>
        <li data-dropdown >
          <a href="fds">HOME2</a>
          <AccordionUl className='dropdown-menu' >
            <li><a href='321'>Home Sub Field 1</a></li>
            <Divider/> 
            <li><a href='13'>Home Sub Field 2</a></li>
          </AccordionUl>        
        </li>
        <li><a href="fds">HOME3</a></li>
        <li><a href="fds">HOME4</a></li>
    </UlContainer>
  </Container>
  );
}

export default Header;