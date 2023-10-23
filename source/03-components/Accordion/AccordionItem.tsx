import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ElementType, MouseEventHandler, useEffect, useRef } from 'react';
import styles from './accordion-item.module.css';
import { slideCollapse, slideExpand } from '../../06-utility/slide';

export interface AccordionItemProps extends GessoComponent {
  id: string;
  title: string;
  content: string;
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
    <div
      className={clsx(
        styles.accordionItem,
        isOpen ? `accordion-item_is-open` : '',
        modifierClasses,
      )}
    >
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
