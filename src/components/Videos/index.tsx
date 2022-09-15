import React from 'react';
import Background from './Background/Background';

type VideoProps = {
  type: 'background';
};

const Video = ({ type }: VideoProps) => {
  const videoRenderer = (): JSX.Element => {
    let videoComponent = null;
    switch (type) {
      case 'background':
        videoComponent = <Background />;
        break;
      default:
        videoComponent = <p>Video</p>;
    }
    return videoComponent;
  };
  return videoRenderer();
};

export default Video;
