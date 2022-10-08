import React from 'react';

import styles from './index.module.scss';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const BlurLayer = ({ children }: Props) => {
  return <div className={styles.blurLayer}>{children}</div>;
};

export default BlurLayer;
