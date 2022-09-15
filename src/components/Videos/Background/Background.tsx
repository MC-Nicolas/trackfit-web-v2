import React from 'react';
import Button from '../../Buttons';
import Container from '../../Containers';
import Overlay from '../../Overlay';
import Text from '../../Texts';

import styles from './Background.module.scss';

const Background = () => {
  return (
    <div className={styles.main}>
      <Overlay opacity={0.5} />
      <video
        autoPlay
        loop
        muted
        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        className={styles.video}
      >
        <source src="/videos/BW.mp4" type="video/mp4" />
      </video>
      <div className={styles.content}>
        <Container type="flexVertical" width="50%" height="300px">
          <Text text="Welcome to Track Fit" type="homeTitle" />
          <Text text="Track your health and fitness" type="homeDescription" />
          <Container type="flexHorizontal" height="80px" width="60%">
            <Button type="login" />
            <Button type="signup" />
          </Container>
        </Container>
      </div>
    </div>
  );
};

export default Background;
