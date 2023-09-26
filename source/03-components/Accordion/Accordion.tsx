import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { useEffect, useId, useRef, useState } from 'react';
import styles from './accordion.module.css';
import stylesAccordionItem from './accordion-item.module.css';
import getCssVar from '../../06-utility/getCssVar';
import { KEYCODE } from '../../00-config/constants';
import AccordionItem, { AccordionItemProps } from './AccordionItem';

interface AccordionProps extends GessoComponent {
  accordionItems: AccordionItemProps[];
  accordionSpeed?: string;
  allowMultiple?: boolean;
  allowToggle?: boolean;
}

function Accordion({
  accordionItems,
  accordionSpeed = getCssVar('duration-standard'),
  allowMultiple,
  allowToggle,
  modifierClasses,
}: AccordionProps): JSX.Element {
  const accordionId = useId();
  const accordionRef = useRef(null);
  const [accordionItemsStatus, setAccordionItemsStatus] = useState(
    accordionItems.map((item, index) => ({
      ...item,
      id: `${accordionId}-${index}`,
    })),
  );

  const openAccordionItem = (items: AccordionItemProps[], index: number) => {
    return items.with(index, {
      ...items[index],
      isOpen: true,
    });
  };

  const closeAccordionItem = (items: AccordionItemProps[], index: number) => {
    return items.with(index, {
      ...items[index],
      isOpen: false,
    });
  };

  const handleClick = (id: string, isOpen = false) => {
    const toggleAllowed = allowMultiple ? true : allowToggle;
    const active = accordionItemsStatus.findIndex(item => item.isOpen);
    const itemIndex = accordionItemsStatus.findIndex(item => item.id === id);
    let itemStatusUpdated = [...accordionItemsStatus];

    // Without allowMultiple, close the open accordion
    if (!allowMultiple && active !== -1 && active !== itemIndex) {
      itemStatusUpdated = closeAccordionItem(itemStatusUpdated, active);
    }

    if (!isOpen) {
      itemStatusUpdated = openAccordionItem(itemStatusUpdated, itemIndex);
    } else if (toggleAllowed && isOpen) {
      itemStatusUpdated = closeAccordionItem(itemStatusUpdated, itemIndex);
    }

    return setAccordionItemsStatus(itemStatusUpdated);
  };

  const handleKeydown = (event: KeyboardEvent) => {
    const currentTarget = event.target as HTMLElement;
    const accordion = accordionRef.current as HTMLElement | null;
    const ACCORDION_TOGGLE_CLASS = stylesAccordionItem.toggle;

    // Create the array of toggle elements for the accordion group
    const triggers = Array.prototype.slice.call(
      accordion ? accordion.querySelectorAll(`.${ACCORDION_TOGGLE_CLASS}`) : [],
    );

    // Is this coming from an accordion header?
    if (currentTarget.tagName === 'BUTTON') {
      // Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
      if (
        event.code === KEYCODE.UP ||
        event.code === KEYCODE.DOWN ||
        event.code === KEYCODE.PAGEDOWN ||
        event.code === KEYCODE.UP
      ) {
        const index = triggers.indexOf(currentTarget);
        let direction;
        if (event.code === KEYCODE.DOWN || event.code === KEYCODE.PAGEDOWN) {
          direction = 1;
        } else {
          direction = -1;
        }
        const triggerLength = triggers.length;
        const newIndex = (index + triggerLength + direction) % triggerLength;
        triggers[newIndex].focus();
        event.preventDefault();
      } else if (event.code === KEYCODE.HOME || event.code === KEYCODE.END) {
        switch (event.code) {
          // Go to first accordion
          case KEYCODE.HOME:
            triggers[0].focus();
            break;
          // Go to last accordion
          case KEYCODE.END:
            triggers[triggers.length - 1].focus();
            break;
          default:
            triggers[0].focus();
            break;
        }
        event.preventDefault();
      }
    }
  };

  useEffect(() => {
    const accordion = accordionRef.current as HTMLElement | null;
    if (accordion) {
      accordion.addEventListener('keydown', handleKeydown);
    }
  });

  return (
    <>
      <div
        ref={accordionRef}
        className={clsx(styles.accordion, modifierClasses)}
        id={accordionId}
      >
        <div className={styles.content}>
          {accordionItemsStatus.map(item => {
            return (
              <AccordionItem
                key={item.id}
                {...item}
                accordionSpeed={accordionSpeed}
                handleClick={() => handleClick(item.id, item.isOpen)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Accordion;
