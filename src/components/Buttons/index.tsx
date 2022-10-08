import React from 'react';
import Rounded from './Rounded';

type ButtonProps = {
  text?: string;
  type: 'login' | 'signup' | 'rounded';
  variant?: 'primary' | 'secondary';
  isLink?: boolean;
  href?: string;
  onClick?: any;
};

const Button = ({
  text,
  type,
  variant = 'primary',
  isLink = false,
  href,
  onClick,
}: ButtonProps): JSX.Element => {
  const buttonsRenderer = (): JSX.Element => {
    switch (type) {
      case 'login':
        return <Rounded onClick={onClick} text="Login" variant="primary" isLink href="/login" />;
      case 'signup':
        return (
          <Rounded onClick={onClick} text="Sign up" variant="secondary" isLink href="/signup" />
        );
      case 'rounded':
        return (
          <Rounded
            onClick={onClick}
            text={text ?? 'No text in your button'}
            variant={variant}
            isLink={isLink}
            href={href}
          />
        );

      default:
        return <button>Error in your button </button>;
    }
  };
  return buttonsRenderer();
};

export default Button;
