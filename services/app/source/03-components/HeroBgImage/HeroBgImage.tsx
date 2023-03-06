import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ReactNode } from 'react';
import { LinkButton, LinkProps } from '../Button/Button';
import styles from './hero-bg-image.module.css';

interface HeroBgImageProps extends GessoComponent {
  hasOverlay?: boolean;
  heroImage?: ReactNode;
  title?: string;
  summary?: ReactNode;
  button?: LinkProps;
}

function HeroBgImage({
  hasOverlay,
  heroImage,
  title,
  summary,
  button,
  modifierClasses,
}: HeroBgImageProps): JSX.Element {
  return (
    <div
      className={clsx(
        styles.hero,
        hasOverlay && styles['has-overlay'],
        modifierClasses,
      )}
    >
      {heroImage}
      <div className={styles.content}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {summary && <div className={styles.summary}>{summary}</div>}
        {button && <LinkButton {...button} styleSize="large" />}
      </div>
    </div>
  );
}

export default HeroBgImage;
