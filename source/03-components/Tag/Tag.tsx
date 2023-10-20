import clsx from 'clsx';
import Link from 'next/link';
import styles from './tag.module.css';

interface TagProps {
  type?: string;
  size?: string;
  url: string;
  title: string;
}

function Tag({ type, size, url, title }: TagProps): JSX.Element {
  return (
    <Link
      href={url}
      className={clsx(styles.tag, type && styles[type], size && styles[size])}
      rel="tag"
    >
      {title}
    </Link>
  );
}

export type { TagProps };
export default Tag;
