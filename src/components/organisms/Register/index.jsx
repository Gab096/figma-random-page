import React from 'react';
import { Icons, Images } from '../../../assets/index'

import Input from '../../atomics/Input';
import Button from '../../atomics/Button';
import COLORS from '../../../common/colors';

import { Container, Form, FormContainer, ImgContainer } from './style';

function Register() {
  return (
  <Container>
    <FormContainer>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <h4>Lorem ipsum dolor sit amet.</h4>
      <Form>
        <Input type="text"  placeholder="insert your E-mail"/>
        <div>
          <Button background={COLORS.BLUE}  color={COLORS.WHITE} type="submit" title="Register" />
        </div>
      </Form>
    </FormContainer>
    <ImgContainer>
      <img className='WL' src={Images.WL} alt="woman lamp icon" />
      <img className='BWL' src={Icons.Vector} alt="backgorundWL" />
    </ImgContainer>
  </Container>
  );
}

export default Register;