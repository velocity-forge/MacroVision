import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ReactNode } from 'react';
import { LinkButton, LinkProps } from '../Button/Button';
import styles from './hero-inline-image.module.css';

interface HeroInlineImageProps extends GessoComponent {
  hasOverlay?: boolean;
  title?: string;
  summary?: ReactNode;
  button?: LinkProps;
  heroImage?: ReactNode;
}

function HeroInlineImage({
  hasOverlay,
  title,
  summary,
  button,
  heroImage,
  modifierClasses,
}: HeroInlineImageProps): JSX.Element {
  return (
    <div
      className={clsx(
        styles.hero,
        hasOverlay && styles['has-overlay'],
        modifierClasses,
      )}
    >
      <div className={styles.media}>{heroImage}</div>
      <div className={styles.content}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {summary && <div className={styles.summary}>{summary}</div>}
        {button && (
          <div>
            <LinkButton {...button} styleSize="large" />
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroInlineImage;
