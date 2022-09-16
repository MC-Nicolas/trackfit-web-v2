import React from 'react';
import AnimatedWithLabel from './AnimatedWithLabel';

type InputProps = {
  type: 'animatedWithLabel';
  inputType?: 'text' | 'password' | 'email' | 'number';
  label: string;
};

const Input = ({ type, inputType = 'text', label }: InputProps) => {
  const inputRenderer = (): JSX.Element => {
    switch (type) {
      case 'animatedWithLabel':
        return <AnimatedWithLabel type={inputType} label={label} />;
      default:
        return <div>Error with your input</div>;
    }
  };
  return inputRenderer();
};

export default Input;
