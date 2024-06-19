// AdvancedLoader.js

import React from 'react';
import styles from './style.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles['loader-dots']}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
