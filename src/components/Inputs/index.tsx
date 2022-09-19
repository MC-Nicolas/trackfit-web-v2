import React from 'react';
import AnimatedWithLabel from './AnimatedWithLabel';
import AutoComplete from './Autocomplete';
import BasicSelect from './BasicSelect/BasicSelect';
import { inputTypes } from './types';

type InputProps = {
  type: string;
  inputType?: 'text' | 'password' | 'email' | 'number';
  label: string;
  value?: string;
  options?: string[];
  onChange?: any;
};

const Input = ({ type, inputType = 'text', label, value, options, onChange }: InputProps) => {
  const inputRenderer = (): JSX.Element => {
    switch (type) {
      case inputTypes.ANIMATED_WITH_LABEL:
        return (
          <AnimatedWithLabel type={inputType} label={label} value={value} onChange={onChange} />
        );
      case inputTypes.AUTOCOMPLETE:
        return (
          <AutoComplete
            label={label}
            value={value}
            options={options ?? ['No option available']}
            onChange={onChange}
          />
        );
      case inputTypes.BASIC_SELECT:
        return (
          <BasicSelect
            value={value ?? ''}
            options={options ?? ['No option available']}
            onChange={onChange}
          />
        );
      default:
        return <div>Error with your input</div>;
    }
  };
  return inputRenderer();
};

export default Input;
