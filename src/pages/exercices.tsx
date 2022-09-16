import Container from '@/components/Containers';
import { containerTypes } from '@/components/Containers/types';
import React from 'react';

type Props = {};

const Exercices = (props: Props) => {
  return (
    <Container type={containerTypes.FLEX_VERTICAL}>
      <p>test</p>
    </Container>
  );
};

export default Exercices;
