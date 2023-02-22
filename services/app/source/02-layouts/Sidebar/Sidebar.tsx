import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ReactNode } from 'react';
import styles from './sidebar.module.css';

interface SidebarProps extends GessoComponent {
  header?: ReactNode;
  sidebarFirst?: ReactNode;
  sidebarSecond?: ReactNode;
  main?: ReactNode;
}

function Sidebar({
  header,
  sidebarFirst,
  sidebarSecond,
  main,
  modifierClasses,
}: SidebarProps): JSX.Element {
  return (
    <div
      className={clsx(
        styles.wrapper,
        modifierClasses,
        sidebarFirst && sidebarSecond && styles['wrapper--multi-2'],
      )}
    >
      {header && <div className={styles.full}>{header}</div>}
      {sidebarFirst && <aside className={styles.sidebar}>{sidebarFirst}</aside>}
      {main && <div>{main}</div>}
      {sidebarSecond && (
        <aside className={styles.sidebar}>{sidebarSecond}</aside>
      )}
    </div>
  );
}

export default Sidebar;
