import Container from '@/components/Containers';
import { containerTypes } from '@/components/Containers/types';
import type { AppProps } from 'next/app';

import ReduxProvider from '@/redux/Provider';
import store from '@/redux/store';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ReduxProvider store={store}>
      <Container type={containerTypes.LAYOUT}>
        <Component {...pageProps} />
      </Container>
    </ReduxProvider>
  );
};

export default MyApp;
