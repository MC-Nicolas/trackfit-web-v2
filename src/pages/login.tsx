import Container from '@/components/Containers';
import Form from '@/components/Forms';
import Text from '@/components/Texts';
import Link from 'next/link';
import React from 'react';

import styles from '../styles/Login.module.scss';

const Login = () => {
  return (
    <div className={styles.container}>
      <Container type="borderAnimated" width="380px" height="420px">
        <Form type="login" />
      </Container>
    </div>
  );
};

export default Login;
