import React from 'react';
import Rounded from './Rounded';

type ButtonProps = {
  text?: string;
  type: 'login' | 'signup' | 'rounded';
  variant?: 'primary' | 'secondary';
  isLink?: boolean;
  href?: string;
};

const Button = ({
  text,
  type,
  variant = 'primary',
  isLink = false,
  href,
}: ButtonProps): JSX.Element => {
  const buttonsRenderer = (): JSX.Element => {
    switch (type) {
      case 'login':
        return <Rounded text="Login" variant="primary" isLink href="/login" />;
      case 'signup':
        return <Rounded text="Sign up" variant="secondary" isLink href="/signup" />;
      case 'rounded':
        return (
          <Rounded
            text={text ?? 'Error in your button'}
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
