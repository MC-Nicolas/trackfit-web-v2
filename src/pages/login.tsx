import Container from '@/components/Containers';
import { containerTypes } from '@/components/Containers/types';
import Form from '@/components/Forms';
import { formTypes } from '@/components/Forms/types';
import React from 'react';

import styles from '../styles/Login.module.scss';

const Login = () => {
  return (
    <div className={styles.container}>
      <Container type={containerTypes.BORDER_ANIMATED} width="380px" height="420px">
        <Form type={formTypes.LOGIN} />
      </Container>
    </div>
  );
};

export default Login;
