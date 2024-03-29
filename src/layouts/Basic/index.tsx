import React, { type PropsWithChildren } from 'react';

import styles from './index.scss';

function Layout(props: PropsWithChildren): JSX.Element {
  return (
    <div className={styles.layout}>
      <header>React App with Craco</header>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
