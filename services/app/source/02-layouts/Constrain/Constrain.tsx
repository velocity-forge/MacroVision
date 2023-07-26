import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ReactNode } from 'react';
import styles from './constrain.module.css';

interface ConstrainProps extends GessoComponent {
  children?: ReactNode;
  isRendered?: boolean;
}

function Constrain({
  children,
  isRendered = true,
  modifierClasses,
}: ConstrainProps): JSX.Element {
  return isRendered ? (
    <div className={clsx(styles.constrain, modifierClasses)}>{children}</div>
  ) : (
    <>{children}</>
  );
}

export default Constrain;
