import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import Icon from '../Icon/Icon';
import styles from './back-to-top.module.css';

interface BackToTopProps extends GessoComponent {
  text: string;
  topElement: string;
  threshold?: number;
  smoothScroll?: boolean;
  isDemo?: boolean;
}

function BackToTop({
  text,
  topElement,
  // threshold = 200,
  // smoothScroll = true,
  // isDemo = false,
  modifierClasses,
}: BackToTopProps): JSX.Element {
  return (
    <a
      href={`#${topElement}`}
      className={clsx(styles['back-to-top'], modifierClasses)}
      title={text}
      aria-hidden={true}
      tabIndex={-1}
    >
      <Icon iconName="angle-up" isHidden={true} />
    </a>
  );
}

export default BackToTop;
