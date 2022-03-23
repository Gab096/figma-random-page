import React from 'react';
import { Images } from '../../../assets/index'

import Input from '../../atomics/Input';
import Button from '../../atomics/Button';
import COLORS from '../../../common/colors';

import { Container, Form, FormContainer } from './style';

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
    <img src={Images.WL} alt="woman lamp icon" />
  </Container>
  );
}

export default Register;