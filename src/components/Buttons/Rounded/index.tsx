import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';

type RoundedProps = {
  text: string;
  variant: 'primary' | 'secondary';
  isLink?: boolean;
  href?: string;
  onClick?: any;
};

const Rounded = ({ text, variant, isLink, href, onClick }: RoundedProps) => {
  if (isLink && href) {
    return (
      <button className={`${styles.rounded} ${styles[variant]}`}>
        <Link href={href}>{text}</Link>
      </button>
    );
  }
  return (
    <button className={`${styles.rounded} ${styles[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Rounded;
