import React from 'react';
import FlexContainer from '../FlexContainer';

import styles from './index.module.scss';

type BorderAnimatedProps = {
  width?: string;
  height?: string;
  children: any;
};

const BorderAnimated = ({ width, height, children }: BorderAnimatedProps) => {
  return (
    <FlexContainer style={{ width, height }}>
      <div className={styles.box}>{children}</div>
    </FlexContainer>
  );
};

export default BorderAnimated;
