import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ReactNode } from 'react';
import { LinkButton, LinkProps } from '../Button/Button';
import styles from './hero-inline-image.module.css';

interface HeroInlineImageProps extends GessoComponent {
  hasOverlay?: boolean;
  heroImage?: ReactNode;
  title?: string;
  summary?: ReactNode;
  button?: LinkProps;
}

function HeroInlineImage({
  hasOverlay,
  heroImage,
  title,
  summary,
  button,
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
      <div className={styles.image}>{heroImage}</div>
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
