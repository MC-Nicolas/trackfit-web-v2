import Container from '@/components/Containers';
import { containerTypes } from '@/components/Containers/types';
import Text from '@/components/Texts';
import React, { useEffect, useState } from 'react';

type Props = {
  width?: string;
  height?: string;
  title: string;
  onClose: () => void;
  children: any;
};

const BasicModal = ({ title, width = '400px', height = '600px', onClose, children }: Props) => {
  return (
    <Container type={containerTypes.BLUR_LAYER}>
      <Container
        type={containerTypes.FLEX_VERTICAL}
        width={width}
        height={height}
        style={{
          backgroundColor: '#222',
          borderRadius: 10,
          boxShadow: '0 0 10px 0 #000',
          justifyContent: 'flex-start',
        }}
      >
        <Container
          type={containerTypes.FLEX_VERTICAL}
          height="80px"
          style={{ borderBottom: '1px solid gray' }}
        >
          <Text type="sectionTitle" text={title} />
        </Container>
        {children}
      </Container>
    </Container>
  );
};

export default BasicModal;
