'use client';

import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { KeyboardEvent, createRef, useId, useMemo, useState } from 'react';
import getCssVar from '../../06-utility/getCssVar';
import AccordionItem, { AccordionItemProps } from './AccordionItem';
import styles from './accordion.module.css';

interface AccordionProps extends GessoComponent {
  accordionItems: AccordionItemProps[];
  accordionSpeed?: string;
  allowMultiple?: boolean;
  allowToggle?: boolean;
  isStepList?: boolean;
}

function Accordion({
  accordionItems,
  accordionSpeed = getCssVar('duration-standard'),
  allowMultiple,
  allowToggle,
  isStepList,
  modifierClasses,
}: AccordionProps): JSX.Element {
  const accordionId = useId();
  const [accordionItemsStatus, setAccordionItemsStatus] = useState(
    accordionItems.map((item, index) => ({
      ...item,
      id: `${accordionId}-${index}`,
    })),
  );
  const accordionItemRefs = useMemo(() => {
    const refs: { [key: string]: React.RefObject<HTMLButtonElement> } = {};
    accordionItemsStatus.forEach(item => (refs[item.id] = createRef()));
    return refs;
  }, [accordionItemsStatus]);

  const openAccordionItem = (items: AccordionItemProps[], index: number) => {
    return [
      ...items.slice(0, index),
      {
        ...items[index],
        isOpen: true,
      },
      ...items.slice(index + 1),
    ];
  };

  const closeAccordionItem = (items: AccordionItemProps[], index: number) => {
    return [
      ...items.slice(0, index),
      {
        ...items[index],
        isOpen: false,
      },
      ...items.slice(index + 1),
    ];
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
    const currentTarget = event.target as HTMLButtonElement;

    // Create the array of toggle elements for the accordion group
    const toggles = Object.values(accordionItemRefs).map(ref => ref.current);

    // Is this coming from an accordion header?
    if (toggles && currentTarget.tagName === 'BUTTON') {
      // Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
      if (
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown' ||
        event.key === 'PageDown' ||
        event.key === 'PageUp'
      ) {
        const index = toggles.indexOf(currentTarget);
        let direction;
        if (event.key === 'ArrowDown' || event.key === 'PageDown') {
          direction = 1;
        } else {
          direction = -1;
        }
        const triggerLength = toggles.length;
        const newIndex = (index + triggerLength + direction) % triggerLength;
        toggles[newIndex]?.focus();
        event.preventDefault();
      } else if (event.key === 'Home') {
        // Home navigates to the first accordion item
        if (toggles[0]) {
          toggles[0].focus();
        }
      } else if (event.key === 'End') {
        // End navigates to the last accordion item
        const lastToggle = toggles[toggles.length - 1];
        if (lastToggle != null) {
          lastToggle.focus();
          event.preventDefault();
        }
      }
    }
  };

  return (
    <>
      <div
        className={clsx(
          styles.accordion,
          isStepList && styles['is-step-list'],
          modifierClasses,
        )}
        id={accordionId}
        onKeyDown={handleKeydown}
      >
        <div className={styles.content}>
          {accordionItemsStatus.map(item => {
            return (
              <AccordionItem
                key={item.id}
                {...item}
                accordionSpeed={accordionSpeed}
                toggleRef={accordionItemRefs[item.id]}
                handleClick={() => handleClick(item.id, item.isOpen)}
                isStepList={isStepList}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Accordion;
