import Image from 'next/image';
import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type IconsWithInvertProps = {
  isInverted: boolean;
  baseIcon: any;
  invertedIcon: any;
  section: string;
};

const IconsWithInvert = ({ isInverted, baseIcon, invertedIcon, section }: IconsWithInvertProps) => {
  return (
    <AnimatePresence>
      {!isInverted ? (
        <Link href={`/${section}`}>
          <motion.div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '70px',
            }}
            initial={{ opacity: 0, backgroundColor: '#FFF' }}
            animate={{ opacity: 1, cursor: 'pointer', backgroundColor: '#1a1a1a' }}
            exit={{ opacity: 0, backgroundColor: '#FFF' }}
          >
            <Image src={invertedIcon} alt="inverted icon" width={40} height={40} />
          </motion.div>
        </Link>
      ) : (
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '70px',
          }}
          initial={{ opacity: 0, backgroundColor: '#1a1a1a' }}
          animate={{ opacity: 1, cursor: 'pointer', backgroundColor: '#FFF' }}
          exit={{ opacity: 0, backgroundColor: '#1a1a1a' }}
        >
          <Image src={baseIcon} alt="inverted icon" width={40} height={40} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IconsWithInvert;
