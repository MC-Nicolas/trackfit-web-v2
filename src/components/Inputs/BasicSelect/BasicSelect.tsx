import React from 'react';

import styles from './BasicSelect.module.scss';

type BasicSelectProps = {
  options: string[] | { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const BasicSelect = ({ value, options, onChange }: BasicSelectProps) => {
  return (
    <select value={value} onChange={onChange} className={styles.basic}>
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
