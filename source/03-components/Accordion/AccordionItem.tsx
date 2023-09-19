import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { ElementType, useId } from 'react';
import styles from './accordion-item.module.css';

export interface AccordionItemProps extends GessoComponent {
  title: string;
  content: string;
  titleElement?: ElementType;
  isOpen?: boolean;
}

function AccordionItem({
  title,
  content,
  titleElement: TitleElement = 'h3',
  isOpen,
  modifierClasses,
}: AccordionItemProps): JSX.Element {
  const itemId = useId();

  const sectionId = `accordion-section-${itemId}`;
  const buttonId = `accordion-button-${itemId}`;

  return (
    <div
      className={clsx(styles.accordionItem, modifierClasses)}
      data-accordion-open={isOpen}
    >
      <div className={styles.panel}>
        <TitleElement className={styles.heading}>
          <button
            className={styles.toggle}
            id={buttonId}
            aria-expanded="true"
            aria-controls={sectionId}
            tabIndex={-1}
          >
            {title}
            <span className={styles.icon}></span>
          </button>
        </TitleElement>
        <div
          className={styles.drawer}
          id={sectionId}
          aria-labelledby={buttonId}
          aria-expanded="true"
        >
          <div className={styles.drawerInner}>{content}</div>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
