import React from 'react';
import Background from './Background/Background';

type VideoProps = {
  type: 'background';
};

const Video = ({ type }: VideoProps) => {
  const videoRenderer = (): JSX.Element => {
    switch (type) {
      case 'background':
        return <Background />;
      default:
        return <p>Video</p>;
    }
  };
  return videoRenderer();
};

export default Video;
