import React from 'react';
import { CardButton } from './style';

const Button = ({ title, onClick, img, background, color, type ,width ,height }) => {
  return (
    <CardButton background={background} color={color} width={width} height={height}>
      <button type={type} onClick={onClick}>
        <img src={img} alt="" />
        {title}
      </button>
    </CardButton>
  );
};


export default Button;
