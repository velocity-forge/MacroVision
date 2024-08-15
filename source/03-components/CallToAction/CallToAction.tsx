import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ReactNode } from 'react';
import { LinkButton, LinkProps } from '../Button/Button';
import styles from './call-to-action.module.css';

interface CallToActionProps extends GessoComponent {
  media?: ReactNode;
  heading?: string;
  body?: ReactNode;
  button?: LinkProps;
}

function CallToAction({
  media,
  heading,
  body,
  button,
  modifierClasses,
}: CallToActionProps): JSX.Element {
  return (
    <div className={clsx(styles['call-to-action'], modifierClasses)}>
      <div className={styles.layout}>
        <div className={styles.media}>{media}</div>
        <div className={styles.content}>
          {heading && <h2 className={styles.title}>{heading}</h2>}
          {body && <div className={styles.text}>{body}</div>}
          {button && (
            <div className={styles.button}>
              <LinkButton {...button} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export type { CallToActionProps };
export default CallToAction;
