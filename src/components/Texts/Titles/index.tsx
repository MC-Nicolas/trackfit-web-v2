import React from 'react';

type TitleProps = {
  text: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  [key: string]: any;
};

const Title = ({ text, type, ...rest }: TitleProps): JSX.Element => {
  const titleRenderer = (): JSX.Element => {
    switch (type) {
      case 'h1':
        return <h1 {...rest}>{text}</h1>;
      case 'h2':
        return <h2 {...rest}>{text}</h2>;
      case 'h3':
        return <h3 {...rest}>{text}</h3>;
      case 'h4':
        return <h4 {...rest}>{text}</h4>;
      case 'h5':
        return <h5 {...rest}>{text}</h5>;
      case 'h6':
        return <h6 {...rest}>{text}</h6>;
      default:
        return <h1 {...rest}>Error in your title</h1>;
    }
  };
  return titleRenderer();
};

export default Title;
