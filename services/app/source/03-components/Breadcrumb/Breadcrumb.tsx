import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import Link from 'next/link';
import { ElementType } from 'react';
import styles from './breadcrumb.module.css';

interface Crumbs {
  url?: string;
  text: string;
}

interface BreadcrumbProps extends GessoComponent {
  title?: string;
  titleElement?: ElementType;
  breadcrumb: Crumbs[];
  hideTitle?: boolean;
}

function Breadcrumb({
  title = 'Breadcrumb',
  titleElement: TitleElement = 'h2',
  breadcrumb,
  hideTitle = true,
}: BreadcrumbProps): JSX.Element {
  const breadcrumbId = 'breadcrumb-label';

  return (
    <nav
      role="navigation"
      aria-labelledby={breadcrumbId}
      className={styles.breadcrumb}
    >
      <div className="constrain">
        <TitleElement
          id={breadcrumbId}
          className={clsx(styles.title, hideTitle && 'u-visually-hidden')}
        >
          {title}
        </TitleElement>
        <ol className={styles.list}>
          {breadcrumb.map(crumb => (
            <li key={crumb.url || 'current'} className={styles.item}>
              {crumb.url ? (
                <Link href={crumb.url} className={styles.link}>
                  {crumb.text}
                </Link>
              ) : (
                <span aria-current="page">{crumb.text}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumb;
