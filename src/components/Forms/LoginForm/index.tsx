import Input from '@/components/Inputs';
import { inputTypes } from '@/components/Inputs/types';
import Text from '@/components/Texts';
import Link from 'next/link';
import React from 'react';

import styles from './index.module.scss';

const LoginForm = () => {
  return (
    <div className={styles.form}>
      <Text text="Log in" type="sectionTitle" />
      <Input type={inputTypes.ANIMATED_WITH_LABEL} label="Email" />
      <Input type={inputTypes.ANIMATED_WITH_LABEL} label="Password" inputType="password" />
      <div className={styles.links}>
        <Link href="/">Forgot password?</Link>
        <Link href="/">Sign up</Link>
      </div>
      <input className={styles.submit} type="submit" value="Log in" />
    </div>
  );
};

export default LoginForm;
