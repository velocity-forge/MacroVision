import clsx from 'clsx';
import { ConstrainComponent } from 'gesso';
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
      <div
        className={clsx(
          styles.inner,
          hasConstrain && 'constrain',
          constrainClasses,
        )}
      >
        {children}
      </div>
    </header>
  );
}

export default Header;
