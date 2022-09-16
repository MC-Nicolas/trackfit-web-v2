import React from 'react';
import styles from './index.module.scss';

type AnimatedWithLabelProps = {
  type: 'text' | 'password' | 'email' | 'number';
  label: string;
};

const AnimatedWithLabel = ({ type, label }: AnimatedWithLabelProps) => {
  return (
    <div className={styles.inputBox}>
      <input type={type} required />
      <span>{label}</span>
      <i></i>
    </div>
  );
};

export default AnimatedWithLabel;
