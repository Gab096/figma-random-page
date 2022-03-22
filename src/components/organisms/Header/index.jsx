import React from 'react';

import { ButtonsContainer, Container, LogoContainer } from './style';
import Button from '../../../components/atomics/Button'
import { Icons } from '../../../assets/index';
import COLORS from '../../../common/colors';

function Header() {
  return (
  <Container>
    <LogoContainer>
        <img src={Icons.Logo} alt="logo" />
    </LogoContainer>
    <ButtonsContainer>
        <Button color={COLORS.BLACK} title="Home"  />
        <Button color={COLORS.BLACK} title="Home1"  />
        <Button color={COLORS.BLACK} title="Home2"  />
        <Button color={COLORS.BLACK} title="Home3"  />
        <Button color={COLORS.BLACK} title="contact us"  />
    </ButtonsContainer>
  </Container>
  );
}

export default Header;