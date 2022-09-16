import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import styles from './index.module.scss';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useRouter();

  return (
    <div className={styles.layout}>
      <Toaster />
      {pathname !== '/login' && pathname !== '/' && <Navbar />}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
