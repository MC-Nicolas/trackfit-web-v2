import React from 'react';
import Container from '../Containers';
import { containerTypes } from '../Containers/types';
import Text from '../Texts';
import BasicModal from './Basic';
import Measurement from './Measurements';
import { modalTypes } from './types';

type Props = {
  type: string;
  width?: string;
  height?: string;
  title: string;
  children?: JSX.Element | JSX.Element[];
  onClose: () => void;
};

const Modal = ({ title, children, width = '400px', height = '400px', type, onClose }: Props) => {
  const modalRenderer = (): JSX.Element => {
    switch (type) {
      case modalTypes.MEASUREMENTS:
        return <Measurement title={title} width={width} height="600px" onClose={onClose} />;

      case modalTypes.BASIC:
        return (
          <BasicModal title={title} width={width} height={height} onClose={onClose}>
            {children}
          </BasicModal>
        );

      default:
        return <p>Error with your modal</p>;
    }
  };
  return modalRenderer();
};

export default Modal;
