import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ReactNode } from 'react';
import styles from './sidebar.module.css';

interface SidebarProps extends GessoComponent {
  header?: ReactNode;
  sidebarFirst?: ReactNode;
  sidebarSecond?: ReactNode;
  sidebarFirstLabel?: string;
  sidebarSecondLabel?: string;
  main?: ReactNode;
}

function Sidebar({
  header,
  sidebarFirst,
  sidebarFirstLabel = 'First sidebar',
  sidebarSecond,
  sidebarSecondLabel = 'Second sidebar',
  main,
  modifierClasses,
}: SidebarProps): JSX.Element {
  return (
    <div
      className={clsx(
        styles.wrapper,
        modifierClasses,
        sidebarFirst && !sidebarSecond && styles['has-first-sidebar'],
        !sidebarFirst && sidebarSecond && styles['has-second-sidebar'],
        sidebarFirst && sidebarSecond && styles['has-both-sidebars'],
      )}
    >
      {header && <div className={styles.full}>{header}</div>}
      {sidebarFirst && (
        <aside className={styles.sidebar} aria-label={sidebarFirstLabel}>
          {sidebarFirst}
        </aside>
      )}
      {main && <div>{main}</div>}
      {sidebarSecond && (
        <aside className={styles.sidebar} aria-label={sidebarSecondLabel}>
          {sidebarSecond}
        </aside>
      )}
    </div>
  );
}

export default Sidebar;
