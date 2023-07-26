import clsx from 'clsx';
import { ConstrainComponent } from 'gesso';
import Constrain from '../Constrain/Constrain';
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
      <Constrain isHidden={!hasConstrain} modifierClasses={constrainClasses}>
        <div className={styles.inner}>{children}</div>
      </Constrain>
    </footer>
  );
}

export default Footer;
