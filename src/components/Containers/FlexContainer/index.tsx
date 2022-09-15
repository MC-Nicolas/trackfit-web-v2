import { Restaurant } from '@mui/icons-material';
import React from 'react';

import styles from './index.module.scss';

type FlexContainerProps = {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly';
  align?: 'center' | 'start' | 'end' | 'stretch' | 'baseline';
  children: JSX.Element | JSX.Element[];
  width?: string;
  height?: string;
  [key: string]: any;
};

const FlexContainer = ({
  direction = 'column',
  justify = 'center',
  align = 'center',
  children,
  width = '100%',
  height = '100%',
  ...rest
}: FlexContainerProps) => {
  console.log(justify);
  return (
    <div
      className={`${styles.flex} 
      ${styles[`direction-${direction}`]}  
      ${styles[`justify-${justify}`]}
      ${styles[`align-${align}`]}`}
      {...rest}
      style={{ width, height, ...rest.style }}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
