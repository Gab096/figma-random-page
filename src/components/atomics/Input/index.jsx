import React from 'react';
import { CardInput } from './style';

const Input = ({ name, type, onChange, placeholder, img, required, value }) => {
  const Masks = {
    tel: () => {
      return value
        ?.replace(/\D/g, '')
        ?.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
        .substring(0, 15);
    },
    cep: () => {
      return value
        ?.replace(/\D/g, '')
        ?.replace(/^(\d{5})(\d{0})/, ' $1-$2')
        .substring(0, 10);
    },
  };

  return (
    <CardInput>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        value={Masks?.[name]?.() || value}
      />
    </CardInput>
  );
};

export default Input;
