import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import FormItemLabel from './FormItemLabel';
import FormItemWrapper from './FormItemWrapper';
import styles from './form-item.module.css';

interface FormItemProps extends GessoComponent {
  id: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  labelDisplay?: 'before' | 'after' | 'invisible';
  /** The field description or help text. */
  description?: ReactNode;
  descriptionDisplay?: 'before' | 'after' | 'invisible';
  prefix?: string;
  suffix?: string;
  errors?: ReactNode;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isRequired?: boolean;
  children: ReactNode;
}

type InputProps = Omit<FormItemProps, 'children'> &
  InputHTMLAttributes<HTMLInputElement>;
type SelectProps = FormItemProps & SelectHTMLAttributes<HTMLSelectElement>;
type TextareaProps = FormItemProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

function FormItem({
  id,
  type,
  label,
  labelDisplay,
  prefix,
  suffix,
  description,
  descriptionDisplay,
  errors,
  modifierClasses,
  isDisabled,
  isFullWidth,
  isRequired,
  children,
}: FormItemProps): JSX.Element {
  return (
    <div
      className={clsx(
        styles['form-item'],
        styles[`form-item--${type}`],
        isDisabled && styles['disabled'],
        isFullWidth && styles['is-full-width'],
        labelDisplay === 'after' && styles['has-visible-label-after'],
        modifierClasses,
      )}
    >
      {label && (labelDisplay === 'before' || labelDisplay === 'invisible') && (
        <FormItemLabel
          label={label}
          isRequired={isRequired}
          id={id}
          modifierClasses={
            labelDisplay === 'invisible' ? 'u-visually-hidden' : undefined
          }
        />
      )}
      <FormItemWrapper wrapItems={!!(prefix || suffix)}>
        <>
          {prefix && <span>{prefix}</span>}
          {description && descriptionDisplay === 'before' && (
            <div className={styles.description}>{description}</div>
          )}
          {children}
          {suffix && <span>{suffix}</span>}
        </>
      </FormItemWrapper>
      {label && labelDisplay === 'after' && (
        <FormItemLabel label={label} isRequired={isRequired} id={id} />
      )}
      {errors && <div className={styles.errors}>{errors}</div>}
      {description &&
        (descriptionDisplay === 'after' ||
          descriptionDisplay === 'invisible') && (
          <div
            className={clsx(
              styles.description,
              descriptionDisplay === 'invisible' && 'u-visually-hidden',
            )}
          >
            {description}
          </div>
        )}
    </div>
  );
}

function Input({
  id,
  type,
  label,
  labelDisplay = 'before',
  prefix,
  suffix,
  description,
  descriptionDisplay = 'after',
  errors,
  modifierClasses,
  isDisabled = false,
  isFullWidth = false,
  isRequired = false,
  ...props
}: InputProps): JSX.Element {
  return (
    <FormItem
      id={id}
      type={type}
      label={label}
      labelDisplay={labelDisplay}
      prefix={prefix}
      suffix={suffix}
      description={description}
      descriptionDisplay={descriptionDisplay}
      errors={errors}
      modifierClasses={modifierClasses}
      isDisabled={isDisabled}
      isFullWidth={isFullWidth}
      isRequired={isRequired}
    >
      <input
        id={id}
        type={type}
        disabled={isDisabled}
        required={isRequired}
        aria-required={isRequired && type !== 'range' ? 'true' : undefined}
        {...props}
      />
    </FormItem>
  );
}

function Select({
  children,
  id,
  label,
  labelDisplay = 'before',
  prefix,
  suffix,
  description,
  descriptionDisplay,
  errors,
  modifierClasses,
  isDisabled = false,
  isFullWidth = false,
  isRequired = false,
  ...props
}: SelectProps): JSX.Element {
  return (
    <FormItem
      id={id}
      type="select"
      label={label}
      labelDisplay={labelDisplay}
      prefix={prefix}
      suffix={suffix}
      description={description}
      descriptionDisplay={descriptionDisplay}
      errors={errors}
      modifierClasses={modifierClasses}
      isDisabled={isDisabled}
      isFullWidth={isFullWidth}
      isRequired={isRequired}
    >
      <select
        id={id}
        required={isRequired}
        aria-required={isRequired ? 'true' : 'false'}
        disabled={isDisabled}
        {...props}
      >
        {children}
      </select>
    </FormItem>
  );
}

function Textarea({
  id,
  label,
  labelDisplay = 'before',
  prefix,
  suffix,
  description,
  descriptionDisplay = 'after',
  errors,
  modifierClasses,
  isDisabled = false,
  isFullWidth = false,
  isRequired = false,
  ...props
}: TextareaProps): JSX.Element {
  return (
    <FormItem
      id={id}
      type="textarea"
      label={label}
      labelDisplay={labelDisplay}
      prefix={prefix}
      suffix={suffix}
      description={description}
      descriptionDisplay={descriptionDisplay}
      errors={errors}
      modifierClasses={modifierClasses}
      isDisabled={isDisabled}
      isFullWidth={isFullWidth}
      isRequired={isRequired}
    >
      <textarea
        id={id}
        disabled={isDisabled}
        required={isRequired}
        aria-required="true"
        {...props}
      />
    </FormItem>
  );
}

export default FormItem;
export { Input, Select, Textarea };
