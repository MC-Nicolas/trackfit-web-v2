import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';

type Props = {
  text: string;
  variant: 'primary' | 'secondary';
  isLink?: boolean;
  href?: string;
  onClick?: any;
};

const Squared = ({ text, variant, isLink, href, onClick }: Props) => {
  if (isLink && href) {
    return (
      <button className={`${styles.squared} ${styles[variant]}`}>
        <Link href={href}>{text}</Link>
      </button>
    );
  }
  return (
    <button className={`${styles.squared} ${styles[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Squared;
