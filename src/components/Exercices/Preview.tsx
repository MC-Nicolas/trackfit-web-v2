import { EditLocation } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';
import Container from '../Containers';
import { containerTypes } from '../Containers/types';

type Props = {
  title: string;
  imgUrl?: string;
  efficiency?: number | string;
};

const Preview = ({ title, imgUrl, efficiency }: Props) => {
  return (
    <Container
      type={containerTypes.FLEX_VERTICAL}
      width="300px"
      height="300px"
      style={{
        backgroundColor: 'white',
        borderRadius: 5,
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
      }}
    >
      <Container type={containerTypes.FLEX_VERTICAL} width="300px" height="50px">
        <p style={{ color: 'black', fontSize: 24 }}>{title}</p>
      </Container>
      <div style={{ width: 250, height: 180, position: 'relative' }}>
        <Image
          alt={title}
          layout={'fill'}
          objectFit={'contain'}
          src={
            imgUrl ??
            'https://images.unsplash.com/photo-1595571024048-45a59177f538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
          }
        />
      </div>
      <Container
        type={containerTypes.FLEX_HORIZONTAL}
        width="300px"
        height="80px"
        style={{ backgroundColor: 'white' }}
      >
        <p style={{ color: 'black', fontSize: 20 }}>{efficiency || 0} / 10</p>
      </Container>
    </Container>
  );
};

export default Preview;
