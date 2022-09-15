import React from 'react';
import Title from './Titles';

import styles from './index.module.scss';

type TextProps = {
  text: string;
  type: 'homeTitle' | 'homeDescription';
  [key: string]: any;
};

const Text = ({ text, type, ...rest }: TextProps): JSX.Element => {
  const textRenderer = (): JSX.Element => {
    let textComponent = null;
    switch (type) {
      case 'homeTitle':
        textComponent = <Title text={text} type="h1" {...rest} className={styles.homeTitle} />;
        break;
      case 'homeDescription':
        textComponent = (
          <p className={styles.homeDescription} {...rest}>
            {text}
          </p>
        );
        break;
      default:
        textComponent = <p>Error in your text</p>;
    }
    return textComponent;
  };
  return textRenderer();
};

export default Text;
