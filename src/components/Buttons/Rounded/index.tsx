import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';

type RoundedProps = {
  text: string;
  variant: 'primary' | 'secondary';
  isLink?: boolean;
  href?: string;
};

const Rounded = ({ text, variant, isLink, href }: RoundedProps) => {
  if (isLink && href) {
    return (
      <button className={`${styles.rounded} ${styles[variant]}`}>
        <Link href={href}>{text}</Link>
      </button>
    );
  }
  return <button className={`${styles.rounded} ${styles[variant]}`}>{text}</button>;
};

export default Rounded;
