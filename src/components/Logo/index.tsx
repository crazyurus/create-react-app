import React from 'react';
import logo from '@/assets/images/logo.svg';
import styles from './index.less';

function Logo(): JSX.Element {
  return (
    <img src={logo} className={styles.logo} alt="logo" />
  );
}

export default Logo;
