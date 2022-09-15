import React from 'react';
import Rounded from './Rounded';

type ButtonProps = {
  type: 'login' | 'signup';
  variant?: 'primary' | 'secondary';
};

const Button = ({ type, variant = 'primary' }: ButtonProps): JSX.Element => {
  const buttonsRenderer = (): JSX.Element => {
    let button = null;
    switch (type) {
      case 'login':
        button = <Rounded text="Login" variant="primary" />;
        break;
      case 'signup':
        button = <Rounded text="Sign up" variant="secondary" />;
        break;
      default:
        button = <button>Error in your button </button>;
    }
    return button;
  };
  return buttonsRenderer();
};

export default Button;
