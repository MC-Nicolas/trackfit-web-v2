import React from 'react';

import styles from './BasicSelect.module.scss';

type BasicSelectProps = {
  options: string[] | { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  [key: string]: any;
};

const BasicSelect = ({ value, options, onChange, ...rest }: BasicSelectProps) => {
  return (
    <select value={value} onChange={onChange} className={styles.basic} {...rest}>
      {options.map((option) => {
        if (typeof option === 'string')
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        else
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
      })}
    </select>
  );
};

export default BasicSelect;
