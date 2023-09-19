import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ComponentProps } from 'react';
import styles from './hamburger-button.module.css';

interface HamburgerButtonProps
  extends ComponentProps<'button'>,
    GessoComponent {
  text: string;
}

function HamburgerButton({
  text,
  modifierClasses,
  ...props
}: HamburgerButtonProps): JSX.Element {
  return (
    <button {...props} className={clsx(styles.button, modifierClasses)}>
      <span className={styles.icon}>{text}</span>
    </button>
  );
}

export default HamburgerButton;
