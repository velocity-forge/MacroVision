import { ReactNode } from 'react';
import styles from './form-item.module.css';

interface FormItemWrapperProps {
  children: ReactNode;
  wrapItems?: boolean;
}

export default function FormItemWrapper({
  children,
  wrapItems,
}: FormItemWrapperProps): JSX.Element {
  if (wrapItems) {
    return <div className={styles.element}>{children}</div>;
  }
  return <>{children}</>;
}
