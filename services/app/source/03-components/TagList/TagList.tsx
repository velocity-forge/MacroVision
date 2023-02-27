import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import Tag, { TagProps } from '../Tag/Tag';
import styles from './tag-list.module.css';

interface TagListProps extends GessoComponent {
  items: TagProps[];
}

function TagList({ items, modifierClasses }: TagListProps): JSX.Element {
  return (
    <ul className={clsx(styles['tag-list'], modifierClasses)}>
      {items.map((item, i) => (
        <li key={i} className={styles.item}>
          <Tag {...item} />
        </li>
      ))}
    </ul>
  );
}

export default TagList;
