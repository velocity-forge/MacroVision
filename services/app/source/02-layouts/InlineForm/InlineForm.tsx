import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ReactNode } from 'react';
import styles from './inline-form.module.css';

interface InlineFormProps extends GessoComponent {
  children?: ReactNode;
  wrap?: boolean;
}

function InlineForm({
  children,
  wrap = true,
  modifierClasses,
}: InlineFormProps): JSX.Element {
  return (
    <div
      className={clsx(wrap ? styles.wrap : styles['no-wrap'], modifierClasses)}
    >
      {children}
    </div>
  );
}

export default InlineForm;
