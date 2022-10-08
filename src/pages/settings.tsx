import Button from '@/components/Buttons';
import Container from '@/components/Containers';
import { containerTypes } from '@/components/Containers/types';
import { deepCopy } from '@firebase/util';
import React, { useEffect, useState } from 'react';

const userEmail: string = 'example@gmail.com'; // use a redux slicer

const healthInfos = {
  weight: 78,
  size: 170,
};

const Settings = () => {
  return (
    <Container
      type={containerTypes.FLEX_VERTICAL}
      style={{ justifyContent: 'space-evenly', minHeight: '100vh', color: 'black' }}
    >
      <p>Email: {userEmail}</p>
      <p>Health infos </p>
      <Button type="rounded" text="Log out" />
    </Container>
  );
};

export default Settings;
