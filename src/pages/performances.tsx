import Container from '@/components/Containers';
import { containerTypes } from '@/components/Containers/types';
import React from 'react';

type Props = {};

const Performances = (props: Props) => {
  return (
    <Container
      type={containerTypes.FLEX_VERTICAL}
      style={{ backgroundColor: 'red', minHeight: 500 }}
    >
      <p>test</p>
    </Container>
  );
};

export default Performances;
