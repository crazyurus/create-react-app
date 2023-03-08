import React from 'react';
import { Logo, Link } from '@/components';
import styles from './index.less';

function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Logo />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Link url="https://reactjs.org">Learn React</Link>
    </div>
  );
}

export default Home;
