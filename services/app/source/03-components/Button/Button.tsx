import clsx from 'clsx';
import React, { ComponentProps } from 'react';
import styles from './button.module.css';

interface SharedButtonProps {
  /**
   * Which style variation should we use?
   */
  variant?: string;
  /**
   * How large should the button be?
   */
  styleSize?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
}

type ButtonProps = SharedButtonProps & ComponentProps<'button'>;
type LinkProps = SharedButtonProps & ComponentProps<'a'>;

/**
 * Primary UI component for user interaction
 */
const Button = ({
  variant,
  styleSize = 'medium',
  label,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        styles.button,
        variant && styles[`button--${variant}`],
        styleSize !== 'medium' && styles[`button--${styleSize}`],
      )}
      {...props}
    >
      {label}
    </button>
  );
};

const LinkButton = ({
  variant,
  styleSize = 'medium',
  label,
  ...props
}: LinkProps) => {
  return (
    <a
      className={clsx(
        styles.button,
        variant && styles[`button--${variant}`],
        styleSize !== 'medium' && styles[`button--${styleSize}`],
      )}
      {...props}
    >
      {label}
    </a>
  );
};

export type { SharedButtonProps };
export { Button, LinkButton };
