import React from 'react';
import { useRouter } from 'next/router';
import IconsWithInvert from '../Buttons/ButtonWithInvert';
import styles from './index.module.scss';

import dashboardIcon from '../../assets/icons/dashboard.png';
import dashboardIconInverted from '../../assets/icons/dashboard-invert.png';
import listIcon from '../../assets/icons/list.png';
import listIconInverted from '../../assets/icons/list-invert.png';
import chartIcon from '../../assets/icons/chart.png';
import chartIconInverted from '../../assets/icons/chart-invert.png';
import measureIcon from '../../assets/icons/measure.png';
import measureIconInverted from '../../assets/icons/measure-invert.png';
import plusIcon from '../../assets/icons/plus.png';
import plusIconInverted from '../../assets/icons/plus-invert.png';
import settingsIcon from '../../assets/icons/settings.png';
import settingsIconInverted from '../../assets/icons/settings-invert.png';
import apertureIcon from '../../assets/icons/aperture.png';
import apertureIconInverted from '../../assets/icons/aperture-invert.png';

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.navbar}>
      <IconsWithInvert
        isInverted={router.pathname === '/dashboard'}
        baseIcon={dashboardIcon}
        invertedIcon={dashboardIconInverted}
        section="dashboard"
      />
      <IconsWithInvert
        isInverted={router.pathname === '/exercices'}
        baseIcon={listIcon}
        invertedIcon={listIconInverted}
        section="exercices"
      />
      <IconsWithInvert
        isInverted={router.pathname === '/performances'}
        baseIcon={chartIcon}
        invertedIcon={chartIconInverted}
        section="performances"
      />
      <IconsWithInvert
        isInverted={router.pathname === '/gallery'}
        baseIcon={apertureIcon}
        invertedIcon={apertureIconInverted}
        section="gallery"
      />

      <IconsWithInvert
        isInverted={router.pathname === '/measurements'}
        baseIcon={measureIcon}
        invertedIcon={measureIconInverted}
        section="measurements"
      />
      <IconsWithInvert
        isInverted={router.pathname === '/create'}
        baseIcon={plusIcon}
        invertedIcon={plusIconInverted}
        section="create"
      />
      <IconsWithInvert
        isInverted={router.pathname === '/settings'}
        baseIcon={settingsIcon}
        invertedIcon={settingsIconInverted}
        section="settings"
      />
    </div>
  );
};

export default Navbar;
