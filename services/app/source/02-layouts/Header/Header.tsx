import clsx from 'clsx';
import { ConstrainComponent } from 'gesso';
import Constrain from '../Constrain/Constrain';
import { ReactNode } from 'react';
import styles from './header.module.css';

interface HeaderProps extends ConstrainComponent {
  children?: ReactNode;
}

function Header({
  children,
  hasConstrain = true,
  modifierClasses,
  constrainClasses,
}: HeaderProps): JSX.Element {
  return (
    <header role="banner" className={clsx(styles.wrapper, modifierClasses)}>
      <Constrain
        isRendered={hasConstrain}
        modifierClasses={clsx(constrainClasses)}
      >
        <div className={styles.inner}>{children}</div>
      </Constrain>
    </header>
  );
}

export default Header;
