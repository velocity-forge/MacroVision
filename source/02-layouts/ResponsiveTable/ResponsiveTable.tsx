import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ReactNode } from 'react';
import styles from './responsive-table.module.css';

interface ResponsiveTableProps extends GessoComponent {
  children?: ReactNode;
  labelledBy?: string;
}

function ResponsiveTable({
  children,
  modifierClasses,
  labelledBy,
}: ResponsiveTableProps): JSX.Element {
  return (
    <div
      className={clsx(styles.wrapper, modifierClasses)}
      role="region"
      tabIndex={0}
      aria-labelledby={labelledBy}
    >
      {children}
    </div>
  );
}

export default ResponsiveTable;
