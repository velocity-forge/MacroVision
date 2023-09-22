import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ReactNode } from 'react';
import styles from './grid.module.css';

interface GridProps extends GessoComponent {
  children?: ReactNode;
  numCols?: number;
}

function Grid({
  children,
  numCols = 1,
  modifierClasses,
}: GridProps): JSX.Element {
  return (
    <div
      className={clsx(
        styles[numCols > 1 ? `grid--${numCols}-col` : 'grid'],
        modifierClasses,
      )}
    >
      {children}
    </div>
  );
}

export default Grid;
