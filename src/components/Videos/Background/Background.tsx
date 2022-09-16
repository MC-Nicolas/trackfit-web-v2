import { containerTypes } from '@/components/Containers/types';
import useWindowSize, { Size } from '@/hooks/useWindowSize';
import { generateWithMinMax } from '@/utils/numbers';
import React, { useEffect, useState } from 'react';
import Button from '../../Buttons';
import Container from '../../Containers';
import Overlay from '../../Overlay';
import Text from '../../Texts';

import styles from './Background.module.scss';

const Background = () => {
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(true);
  const [randomNum] = useState(() => generateWithMinMax(1, 3));
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    setImgSrc(`/videos/BW${randomNum}.mp4`);
  }, [randomNum]);

  const { width }: Size = useWindowSize();
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
        {imgSrc && <source src={imgSrc} type="video/mp4" />}
      </video>
      <div className={styles.content}>
        <Container
          type={containerTypes.FLEX_VERTICAL}
          width={width && width > 510 ? '50%' : '80%'}
          height="300px"
        >
          <Text text="Welcome to Track Fit" type="homeTitle" />
          <Text text="Track your health and fitness" type="homeDescription" />
          <Container type={containerTypes.FLEX_HORIZONTAL} height="80px" width="60%">
            {userIsAuthenticated ? (
              <Button text="Start" type="rounded" isLink href="/dashboard" />
            ) : (
              <>
                <Button type="login" />
                <Button type="signup" />
              </>
            )}
          </Container>
        </Container>
      </div>
    </div>
  );
};

export default Background;
