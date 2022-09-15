import React from 'react';
import styles from './index.module.scss';

type OverlayProps = {
  opacity: number;
};

const Overlay = ({ opacity }: OverlayProps) => (
  <div className={styles.overlay} style={{ opacity }} />
);

export default Overlay;
