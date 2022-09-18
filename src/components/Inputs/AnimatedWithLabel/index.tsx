import React from 'react';
import styles from './index.module.scss';

type AnimatedWithLabelProps = {
  type: 'text' | 'password' | 'email' | 'number';
  label: string;
  value?: string;
  onChange?: any;
};

const AnimatedWithLabel = ({ type, label, value, onChange }: AnimatedWithLabelProps) => {
  return (
    <div className={styles.inputBox}>
      <input type={type} required value={value} onChange={onChange} />
      <span>{label}</span>
      <i></i>
    </div>
  );
};

export default AnimatedWithLabel;
