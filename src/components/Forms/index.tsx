import React from 'react';
import LoginForm from './LoginForm';
import { formTypes } from './types';

type FormProps = {
  type: string;
};

const Form = ({ type }: FormProps) => {
  const formRenderer = (): JSX.Element => {
    switch (type) {
      case formTypes.LOGIN:
        return <LoginForm />;
      default:
        return <div>Error with your form</div>;
    }
  };
  return formRenderer();
};

export default Form;
