import type { NextPage } from 'next';
import Head from 'next/head';
import Video from '../components/Videos';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Track Fit</title>
        <meta name="description" content="Track your health and fitness" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Video type="background" />
      </main>
    </div>
  );
};

export default Home;
