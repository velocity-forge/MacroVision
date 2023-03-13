import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import Link from 'next/link';
import styles from './read-more-link.module.css';

interface ReadMoreLinkProps extends GessoComponent {
  url: string;
  label?: string;
  hideDescription?: boolean;
  descriptionPrefix?: string;
  title?: string;
}

function ReadMoreLink({
  url,
  label = 'Read more',
  hideDescription = false,
  descriptionPrefix = 'about',
  title,
  modifierClasses,
}: ReadMoreLinkProps): JSX.Element {
  return (
    <Link href={url} className={clsx(styles.link, modifierClasses)}>
      {label}{' '}
      <span className={styles.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
        >
          <path
            fill="#231f20"
            d="M14 4.648l9.352 9.352-9.352 9.352-1.641-1.641 6.508-6.563h-14.219v-2.297h14.219l-6.508-6.563z"
          ></path>
        </svg>
      </span>
      {!hideDescription && title && (
        <span className={styles.description}>
          {descriptionPrefix} {title}
        </span>
      )}
    </Link>
  );
}

export default ReadMoreLink;
