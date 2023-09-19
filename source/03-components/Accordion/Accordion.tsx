import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { useEffect, useId, useRef } from 'react';
import styles from './accordion.module.css';
import stylesAccordionItem from './accordion-item.module.css';
import getCssVar from '../../06-utility/getCssVar';
import { slideCollapse, slideExpand } from '../../06-utility/slide';
import { KEYCODE } from '../../00-config/constants';
import AccordionItem, { AccordionItemProps } from './AccordionItem';

interface AccordionProps extends GessoComponent {
  accordionItems?: AccordionItemProps[];
  allowMultiple?: boolean;
  allowToggle?: boolean;
}

function Accordion({
  accordionItems,
  allowMultiple,
  allowToggle,
  modifierClasses,
}: AccordionProps): JSX.Element {
  const accordionId = useId();
  const accordionRef = useRef(null);

  useEffect(() => {
    const ACCORDION_TOGGLE_CLASS = stylesAccordionItem.toggle;
    const ACCORDION_SPEED = getCssVar('duration-standard');

    const accordion = document.getElementById(accordionId);
    const multipleAllowed = allowMultiple;
    const toggleAllowed = allowMultiple ? true : allowToggle;

    const openAccordion = (button: Element | HTMLElement | null) => {
      if (button && button.getAttribute('aria-expanded') === 'false') {
        button.setAttribute('aria-expanded', 'true');
        const accordionSectionId = button.getAttribute(
          'aria-controls',
        ) as string;
        const accordionSection = document.getElementById(accordionSectionId);

        if (accordionSection) {
          accordionSection.setAttribute('aria-expanded', 'true');
          slideExpand(accordionSection, ACCORDION_SPEED);
        }
      }
    };

    const closeAccordion = (button: Element | HTMLElement | null) => {
      if (button && button.getAttribute('aria-expanded') === 'true') {
        button.setAttribute('aria-expanded', 'false');
        const accordionSectionId = button.getAttribute(
          'aria-controls',
        ) as string;
        const accordionSection = document.getElementById(accordionSectionId);

        if (accordionSection) {
          accordionSection.setAttribute('aria-expanded', 'false');
          slideCollapse(accordionSection, ACCORDION_SPEED);
        }
      }
    };

    const handleClick = (event: MouseEvent) => {
      const currentTarget = event.target as HTMLElement;

      // Set target differently depending on click vs. keydown
      // because the <span> inside <button> screws things up
      if (
        currentTarget &&
        (currentTarget.tagName === 'BUTTON' ||
          (currentTarget.parentElement &&
            currentTarget.parentElement.tagName === 'BUTTON'))
      ) {
        let target;
        // Set target based on click or keydown
        if (currentTarget.tagName === 'BUTTON') {
          target = currentTarget;
        } else {
          target = currentTarget.parentElement;
        }
        // Check if the current toggle is expanded.
        const isExpanded = target
          ? target.getAttribute('aria-expanded') === 'true'
          : false;
        const active = accordion
          ? accordion.querySelector('[aria-expanded="true"]')
          : null;

        // without allowMultiple, close the open accordion
        if (!multipleAllowed && active && active !== target) {
          closeAccordion(active);
        }

        if (!isExpanded) {
          openAccordion(target);
        } else if (toggleAllowed && isExpanded) {
          closeAccordion(target);
        }

        event.preventDefault();
      }
    };

    const handleKeydown = (event: KeyboardEvent) => {
      const currentTarget = event.target as HTMLElement;

      // Create the array of toggle elements for the accordion group
      const triggers = Array.prototype.slice.call(
        accordion
          ? accordion.querySelectorAll(`.${ACCORDION_TOGGLE_CLASS}`)
          : [],
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

    // Initiate accordions on page load
    if (accordion) {
      accordion.addEventListener('click', handleClick);
      accordion.addEventListener('keydown', handleKeydown);

      const accordionItems = accordion.querySelectorAll(
        `.${stylesAccordionItem.accordionItem}`,
      );
      accordionItems.forEach(item => {
        const toggle = item.querySelector(`.${ACCORDION_TOGGLE_CLASS}`);
        console.log(toggle);
        // Close all accordion items that are not 'default-open'
        if (
          !item.hasAttribute('data-accordion-open') ||
          item.getAttribute('data-accordion-open') === 'false'
        ) {
          closeAccordion(toggle);
        }
        // Update toggle tabindex
        if (toggle) {
          toggle.removeAttribute('tabindex');
        }
        // Add attribute 'processed'
        item.setAttribute('data-accordion-processed', '');
      });
    }
  }, [accordionId, allowMultiple, allowToggle]);

  return (
    <>
      {accordionItems && (
        <div
          ref={accordionRef}
          className={clsx(styles.accordion, modifierClasses)}
          id={accordionId}
        >
          <div className={styles.content}>
            {accordionItems.map((item, index) => {
              return <AccordionItem key={index} {...item} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Accordion;
