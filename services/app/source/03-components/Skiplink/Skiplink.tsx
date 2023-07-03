import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { MAIN_ID } from '../../00-config/constants';
import styles from './skiplink.module.css';

interface SkiplinkProps extends GessoComponent {
  id?: string;
}

function Skiplink({
  id = MAIN_ID,
  modifierClasses,
}: SkiplinkProps): JSX.Element {
  return (
    <div className={clsx(styles.skiplink, modifierClasses)}>
      <a
        href={`#${id}`}
        className={clsx(styles.link, 'u-visually-hidden', 'u-focusable')}
      >
        Skip to main content
      </a>
    </div>
  );
}

export default Skiplink;
