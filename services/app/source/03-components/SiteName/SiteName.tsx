import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import Link from 'next/link';
import styles from './site_name.module.css';

interface SiteNameProps extends GessoComponent {
  siteName: string;
  url?: string;
  title?: string;
}

function SiteName({
  siteName,
  url = '/',
  title = 'Home',
  modifierClasses,
}: SiteNameProps): JSX.Element {
  return (
    <Link
      href={url}
      title={title}
      rel="home"
      className={clsx(styles['site-name'], modifierClasses)}
    >
      <span className={styles.text}>{siteName}</span>
    </Link>
  );
}

export default SiteName;
