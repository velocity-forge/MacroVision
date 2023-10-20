import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import styles from './form-item.module.css';

interface FormItemLabelProps extends GessoComponent {
  label: string;
  isRequired?: boolean;
  id: string;
  requiredText?: string;
}

export default function FormItemLabel({
  label,
  isRequired = false,
  id,
  requiredText = 'This field is required.',
  modifierClasses,
}: FormItemLabelProps) {
  return (
    <label htmlFor={id} className={clsx(styles.label, modifierClasses)}>
      {label}
      {isRequired && (
        <span className={styles.marker}>
          <span className="u-visually-hidden">{requiredText}</span>
        </span>
      )}
    </label>
  );
}
