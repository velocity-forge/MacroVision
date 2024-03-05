import clsx from 'clsx';
import { ConstrainComponent } from 'gesso';
import { ReactNode } from 'react';
import Constrain from '../Constrain/Constrain';
import styles from './main.module.css';

interface MainProps extends ConstrainComponent {
  id?: string;
  children: ReactNode;
}

function Main({
  id = 'main',
  children,
  hasConstrain = true,
  modifierClasses,
  constrainClasses,
}: MainProps): JSX.Element {
  return (
    <main
      className={clsx(styles.main, modifierClasses)}
      id={id}
      role="main"
      tabIndex={-1}
    >
      <Constrain isHidden={!hasConstrain} modifierClasses={constrainClasses}>
        {children}
      </Constrain>
    </main>
  );
}

export default Main;
