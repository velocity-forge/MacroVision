import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ReactNode } from 'react';
import styles from './media.module.css';

interface MediaProps extends GessoComponent {
  media?: ReactNode;
  mediaContent: ReactNode | string;
}

function Media({
  media,
  mediaContent,
  modifierClasses,
}: MediaProps): JSX.Element {
  return (
    <div className={clsx(styles.media, modifierClasses)}>
      {media && <div className={styles.object}>{media}</div>}
      <div className={styles.content}>{mediaContent}</div>
    </div>
  );
}

export default Media;
