import Container from '@/components/Containers';
import { containerTypes } from '@/components/Containers/types';
import React from 'react';

type Props = {};

const Gallery = (props: Props) => {
  return (
    <Container
      type={containerTypes.FLEX_VERTICAL}
      style={{ justifyContent: 'space-evenly', minHeight: '100vh', backgroundColor: '#212121' }}
    >
      <p>Gallery</p>
    </Container>
  );
};

export default Gallery;
