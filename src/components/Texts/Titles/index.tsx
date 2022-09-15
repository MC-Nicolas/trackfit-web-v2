import React from 'react';

type TitleProps = {
  text: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  [key: string]: any;
};

const Title = ({ text, type, ...rest }: TitleProps): JSX.Element => {
  const titleRenderer = (): JSX.Element => {
    let titleComponent = null;
    switch (type) {
      case 'h1':
        titleComponent = <h1 {...rest}>{text}</h1>;
        break;
      case 'h2':
        titleComponent = <h2 {...rest}>{text}</h2>;
        break;
      case 'h3':
        titleComponent = <h3 {...rest}>{text}</h3>;
        break;
      case 'h4':
        titleComponent = <h4 {...rest}>{text}</h4>;
        break;
      case 'h5':
        titleComponent = <h5 {...rest}>{text}</h5>;
        break;
      case 'h6':
        titleComponent = <h6 {...rest}>{text}</h6>;
        break;
      default:
        titleComponent = <h1 {...rest}>Error in your title</h1>;
    }
    return titleComponent;
  };
  return titleRenderer();
};

export default Title;
