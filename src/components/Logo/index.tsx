import React from 'react';
import logo from '@/assets/images/logo.svg';
import styles from './index.scss';

function Logo(): JSX.Element {
  return <img src={logo} className={styles.logo} alt="logo" />;
}

export default Logo;
