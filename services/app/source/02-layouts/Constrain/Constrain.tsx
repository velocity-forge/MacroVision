import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ReactNode } from 'react';
import styles from './constrain.module.css';

interface ConstrainProps extends GessoComponent {
  children?: ReactNode;
  isHidden?: boolean;
}

function Constrain({
  children,
  isHidden = false,
  modifierClasses,
}: ConstrainProps): JSX.Element {
  return isHidden ? (
    <>{children}</>
  ) : (
    <div className={clsx(styles.constrain, modifierClasses)}>{children}</div>
  );
}

export default Constrain;
