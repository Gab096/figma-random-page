import React from 'react';
import { CardButton } from './style';

const Button = ({ title, onClick, img, background, color, type }) => {
  return (
    <CardButton background={background} color={color}>
      <button type={type} onClick={onClick}>
        <img src={img} alt="" />
        {title}
      </button>
    </CardButton>
  );
};


export default Button;
