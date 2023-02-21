import clsx from 'clsx';
import { ConstrainComponent } from 'gesso';
import { ReactNode } from 'react';
import styles from './footer.module.css';

interface FooterProps extends ConstrainComponent {
  children?: ReactNode;
}

function Footer({
  children,
  hasConstrain = true,
  modifierClasses,
  constrainClasses,
}: FooterProps): JSX.Element {
  return (
    <footer
      className={clsx(styles.wrapper, modifierClasses)}
      role="contentinfo"
    >
      <div
        className={clsx(
          styles.inner,
          hasConstrain && 'constrain',
          constrainClasses,
        )}
      >
        {children}
      </div>
    </footer>
  );
}

export default Footer;
