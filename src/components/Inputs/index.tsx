import React from 'react';
import AnimatedWithLabel from './AnimatedWithLabel';
import { inputTypes } from './types';

type InputProps = {
  type: string;
  inputType?: 'text' | 'password' | 'email' | 'number';
  label: string;
};

const Input = ({ type, inputType = 'text', label }: InputProps) => {
  const inputRenderer = (): JSX.Element => {
    switch (type) {
      case inputTypes.ANIMATED_WITH_LABEL:
        return <AnimatedWithLabel type={inputType} label={label} />;
      default:
        return <div>Error with your input</div>;
    }
  };
  return inputRenderer();
};

export default Input;
