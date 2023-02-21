import { ReactNode } from 'react';
import styles from './main.module.css';

interface MainProps {
  id?: string;
  children: ReactNode;
}

function Main({ id = 'main', children }: MainProps): JSX.Element {
  return (
    <main className={styles.main} id={id} role="main" tabIndex={-1}>
      {children}
    </main>
  );
}

export default Main;
