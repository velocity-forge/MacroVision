import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ReactNode } from 'react';
import styles from './details.module.css';

interface DetailsProps extends GessoComponent {
  isRequired?: boolean;
  detailsSummary?: string | ReactNode;
  detailsDescription?: string | ReactNode;
  children: ReactNode;
}

function Details({
  isRequired,
  detailsSummary,
  detailsDescription,
  children,
  modifierClasses,
}: DetailsProps): JSX.Element {
  return (
    <details className={clsx(styles.details, modifierClasses)}>
      {detailsSummary && (
        <summary
          role="button"
          className={clsx(styles.summary, isRequired && 'is-required')}
        >
          {detailsSummary}
        </summary>
      )}
      <div className={styles.content}>
        {detailsDescription && (
          <div className={styles.description}>{detailsDescription}</div>
        )}
        {children}
      </div>
    </details>
  );
}

export default Details;
