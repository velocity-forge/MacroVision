import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ReactNode } from 'react';
import listStyles from '../List/list.module.css';
import PageTitle from '../PageTitle/PageTitle';
import Wysiwyg from '../Wysiwyg/Wysiwyg';
import styles from './article.module.css';

interface ArticleProps extends GessoComponent {
  title?: ReactNode | string;
  children?: ReactNode;
  showFooter?: boolean;
  author?: ReactNode;
  date?: ReactNode | string;
}

function Article({
  title,
  children,
  showFooter,
  author,
  date,
  modifierClasses,
}: ArticleProps): JSX.Element {
  return (
    <article className={clsx(styles.article, modifierClasses)}>
      {title && <PageTitle pageTitle={title} />}
      {showFooter && (
        <footer className={styles.footer}>
          <ul className={listStyles.pipeline}>
            {date && <li className={styles.date}>{date}</li>}
            {author && <li>{author}</li>}
          </ul>
        </footer>
      )}
      <Wysiwyg>{children}</Wysiwyg>
    </article>
  );
}

export default Article;
