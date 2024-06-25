import { PropsWithChildren } from 'react';

import { clsx } from 'clsx';

import styles from './index.module.scss';

const GNBLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={clsx(styles.wrap)}>
      <div className={clsx(styles.contentWrap)}>{children}</div>
    </main>
  );
};

export default GNBLayout;
