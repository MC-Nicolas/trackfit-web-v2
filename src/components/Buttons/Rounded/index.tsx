import React from 'react';
import styles from './index.module.scss';

type RoundedProps = {
  text: string;
  variant: 'primary' | 'secondary';
};

const Rounded = ({ text, variant }: RoundedProps) => {
  return <button className={`${styles.rounded} ${styles[variant]}`}>{text}</button>;
};

export default Rounded;
