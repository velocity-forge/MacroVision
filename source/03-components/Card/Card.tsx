import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import Link from 'next/link';
import { ReactNode } from 'react';
import ReadMoreLink from '../ReadMoreLink/ReadMoreLink';
import { TagProps } from '../Tag/Tag';
import TagList from '../TagList/TagList';
import styles from './card.module.css';

interface CardProps extends GessoComponent {
  date?: string;
  url?: string;
  title: string;
  children?: ReactNode;
  footer?: ReactNode;
  media?: ReactNode;
  readMore?: boolean;
  tags?: TagProps[];
}

function Card({
  date,
  url,
  title,
  children,
  footer,
  media,
  readMore,
  tags,
  modifierClasses,
}: CardProps): JSX.Element {
  return (
    <div className={clsx(styles.card, modifierClasses)}>
      <div className={styles.body}>
        <div className={styles.header}>
          {date && <div className={styles.date}>{date}</div>}
          <h3 className={styles.title}>
            {url ? <Link href={url}>{title}</Link> : title}
          </h3>
        </div>
        <div className={styles.content}>{children}</div>
        {(footer || readMore || tags) && (
          <div className={styles.footer}>
            {footer}
            {tags && (
              <div className={styles.tags}>
                <TagList items={tags} />
              </div>
            )}
            {readMore && url && (
              <div className={styles.readmore}>
                <ReadMoreLink url={url} title={title} />
              </div>
            )}
          </div>
        )}
      </div>
      {media && (
        <div className={styles.media}>
          {url ? <Link href={url}>{media}</Link> : media}
        </div>
      )}
    </div>
  );
}

export type { CardProps };
export default Card;
