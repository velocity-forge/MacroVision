import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ReactNode } from 'react';
import styles from './menu.module.css';

interface MenuWrapperProps extends GessoComponent {
  listItems: ReactNode[];
}

function MenuWrapper({
  modifierClasses,
  listItems,
  ...props
}: MenuWrapperProps): JSX.Element {
  return (
    <ul className={clsx(styles.menu, modifierClasses)} {...props}>
      {listItems.map(item => item)}
    </ul>
  );
}

export default MenuWrapper;
export type { MenuWrapperProps };
