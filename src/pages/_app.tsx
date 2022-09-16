import Container from '@/components/Containers';
import { containerTypes } from '@/components/Containers/types';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Container type={containerTypes.LAYOUT}>
      <Component {...pageProps} />
    </Container>
  );
};

export default MyApp;
