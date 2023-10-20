import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ReactNode } from 'react';
import styles from './page-title.module.css';

interface PageTitleProps extends GessoComponent {
  pageTitle: ReactNode;
}

function PageTitle({
  pageTitle,
  modifierClasses,
}: PageTitleProps): JSX.Element {
  return (
    <h1 className={clsx(styles['page-title'], modifierClasses)}>{pageTitle}</h1>
  );
}

export default PageTitle;
