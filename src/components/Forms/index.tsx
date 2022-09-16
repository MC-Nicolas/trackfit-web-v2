import React from 'react';
import LoginForm from './LoginForm';

type FormProps = {
  type: 'login';
};

const Form = ({ type }: FormProps) => {
  const formRenderer = (): JSX.Element => {
    switch (type) {
      case 'login':
        return <LoginForm />;
      default:
        return <div>Error with your form</div>;
    }
  };
  return formRenderer();
};

export default Form;
