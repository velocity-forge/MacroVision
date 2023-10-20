import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ReactNode } from 'react';
import styles from './fieldset.module.css';

interface FieldsetProps extends GessoComponent {
  legend: string;
  children: ReactNode;
  description?: ReactNode;
  id: string;
  errors?: ReactNode;
  prefix?: string;
  suffix?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
}

function Fieldset({
  legend,
  children,
  description,
  id,
  modifierClasses,
  errors,
  prefix,
  suffix,
  isDisabled,
  isRequired,
}: FieldsetProps): JSX.Element {
  return (
    <fieldset
      className={clsx(
        styles.fieldset,
        modifierClasses,
        isRequired && styles['is-required'],
        isDisabled && styles['is-disabled'],
      )}
      aria-describedby={id && description ? id : undefined}
      disabled={isDisabled}
    >
      <legend
        className={clsx(styles.legend, isDisabled && styles['is-disabled'])}
      >
        <span
          className={clsx(
            styles['legend-text'],
            isRequired && styles['is-required'],
          )}
        >
          {legend}
        </span>
      </legend>
      <div className={styles.content}>
        {errors && <div>{errors}</div>}
        {prefix && <span>{prefix}</span>}
        {children}
        {suffix && <span>{suffix}</span>}
        {description && (
          <div id={id} className={styles.description}>
            {description}
          </div>
        )}
      </div>
    </fieldset>
  );
}

export default Fieldset;
