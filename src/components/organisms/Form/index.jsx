import React from 'react';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '../../atomics/Button';
import Input from '@mui/material/Input';
import COLORS from '../../../common/colors';
import { Container, Divider , FormContainer, FormHalfContainer} from './style';

function Form() {

  return ( 
  <Container>
      <h1>LET’S WORK TOGETHER</h1>
      <Divider />
      <FormContainer>
        <FormControl fullWidth>
          <NativeSelect>
            <option value={10}>How can we help you ?</option>
            <option value={20}>Hiring me 1</option>
            <option value={30}>Hiring me 2</option>
          </NativeSelect>
        </FormControl>
        <FormHalfContainer>
          <Input fullWidth placeholder="name*"/>
          <Input fullWidth placeholder="Email*"/>
        </FormHalfContainer>
          <FormHalfContainer>
          <Input fullWidth placeholder="Phone*"/>
          <Input fullWidth placeholder="Organization*"/>
        </FormHalfContainer>
        <textarea rows={4} placeholder='Message'>
        </textarea>
        <Button background={COLORS.BLUE} color={COLORS.WHITE} title="Send" />
      </FormContainer>

  </Container>
  );
}

export default Form;