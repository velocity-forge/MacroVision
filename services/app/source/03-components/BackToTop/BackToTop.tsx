import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { MouseEvent, useEffect, useState } from 'react';
import AngleUp from '../../01-global/icon/icons/AngleUp';
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
  threshold = 200,
  smoothScroll = true,
  modifierClasses,
}: BackToTopProps): JSX.Element {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= threshold && isHidden) {
        setIsHidden(false);
      } else if (window.scrollY < threshold && !isHidden) {
        setIsHidden(true);
      }
    };
    let stillScrolling: number;
    const throttleScroll = () => {
      if (typeof stillScrolling !== 'undefined') {
        window.clearTimeout(stillScrolling);
      }
      stillScrolling = window.setTimeout(scrollHandler, 60);
    };
    if (!Number.isNaN(threshold) && threshold > 0) {
      window.addEventListener('scroll', throttleScroll);
    }
    return () => {
      window.removeEventListener('scroll', throttleScroll);
    };
  }, [isHidden, threshold]);

  const handleClick = (event: MouseEvent) => {
    const target = document.querySelector(topElement);

    if (target instanceof HTMLElement) {
      event.preventDefault();
      const coords = target.getBoundingClientRect();
      target.setAttribute('tabIndex', '-1');
      window.scrollTo({
        top: coords.top,
        behavior: 'smooth',
      });
      target.focus();
    }
  };

  return (
    <a
      href={`#${topElement}`}
      className={clsx(styles.link, modifierClasses)}
      title={text}
      aria-hidden={isHidden}
      tabIndex={isHidden ? -1 : undefined}
      onClick={smoothScroll ? handleClick : undefined}
    >
      <AngleUp title={text} isHidden={false} />
    </a>
  );
}

export default BackToTop;
