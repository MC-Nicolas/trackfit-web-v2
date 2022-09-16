import React from 'react';
import Title from './Titles';

import styles from './index.module.scss';

type TextProps = {
  text: string;
  type: 'homeTitle' | 'homeDescription' | 'sectionTitle';
  [key: string]: any;
};

const Text = ({ text, type, ...rest }: TextProps): JSX.Element => {
  const textRenderer = (): JSX.Element => {
    switch (type) {
      case 'homeTitle':
        return <Title text={text} type="h1" {...rest} className={styles.homeTitle} />;
      case 'homeDescription':
        return (
          <p className={styles.homeDescription} {...rest}>
            {text}
          </p>
        );
      case 'sectionTitle':
        return <Title text={text} type="h2" {...rest} />;
      default:
        return <p>Error in your text</p>;
    }
  };
  return textRenderer();
};

export default Text;
