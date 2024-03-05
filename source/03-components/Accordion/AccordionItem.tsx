import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import {
  ElementType,
  MouseEventHandler,
  ReactElement,
  useEffect,
  useRef,
} from 'react';
import { slideCollapse, slideExpand } from '../../06-utility/slide';
import styles from './accordion-item.module.css';

export interface AccordionItemProps extends GessoComponent {
  id: string;
  title: string;
  content: ReactElement;
  titleElement?: ElementType;
  isOpen?: boolean;
  accordionSpeed?: string;
  toggleRef?: React.RefObject<HTMLButtonElement>;
  handleClick: MouseEventHandler;
}

function AccordionItem({
  id,
  title,
  content,
  titleElement: TitleElement = 'h3',
  isOpen,
  accordionSpeed,
  toggleRef,
  modifierClasses,
  handleClick,
}: AccordionItemProps): JSX.Element {
  const accordionItemSectionRef = useRef(null);

  const sectionId = `accordion-section-${id}`;
  const buttonId = `accordion-button-${id}`;

  useEffect(() => {
    if (isOpen && accordionItemSectionRef.current) {
      slideExpand(accordionItemSectionRef.current, accordionSpeed);
    } else if (!isOpen && accordionItemSectionRef.current) {
      slideCollapse(accordionItemSectionRef.current, accordionSpeed);
    }
  }, [isOpen, accordionSpeed]);

  return (
    <div className={clsx(styles.accordionItem, modifierClasses)}>
      <div className={styles.panel}>
        <TitleElement className={styles.heading}>
          <button
            className={styles.toggle}
            id={buttonId}
            aria-expanded={isOpen}
            aria-controls={sectionId}
            ref={toggleRef}
            onClick={handleClick}
          >
            {title}
            <span className={styles.icon}></span>
          </button>
        </TitleElement>
        <div
          ref={accordionItemSectionRef}
          className={styles.drawer}
          id={sectionId}
          aria-labelledby={buttonId}
          aria-expanded={isOpen}
        >
          <div className={styles.drawerInner}>{content}</div>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
