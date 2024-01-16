import React from 'react';

import { Link, Logo } from '@/components';

import styles from './index.scss';

function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Logo />
      <p>
        Edit <code>src/pages/Home/index.tsx</code> and save to reload.
      </p>
      <Link url="https://reactjs.org">Learn React</Link>
    </div>
  );
}

export default Home;
