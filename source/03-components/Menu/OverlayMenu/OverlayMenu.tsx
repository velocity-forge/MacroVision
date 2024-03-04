'use client';

import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { useEffect, useId, useState } from 'react';
import buttonStyles from '../../HamburgerButton/hamburger-button.module.css';
import HamburgerButton from '../../HamburgerButton/HamburgerButton';
import Menu, { MenuItem } from '../Menu';
import styles from './overlay-menu.module.css';

interface OverlayMenuProps extends GessoComponent {
  items: MenuItem[];
}

function OverlayMenu({
  items,
  modifierClasses,
}: OverlayMenuProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const navId = useId();

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('has-open-menu');
      window.addEventListener('keydown', handleKeydown);
    } else {
      document.body.classList.remove('has-open-menu');
      window.removeEventListener('keydown', handleKeydown);
    }
    return () => {
      document.body.classList.remove('has-open-menu');
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [isOpen]);

  return (
    <>
      <HamburgerButton
        aria-controls={navId}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        hidden={isOpen}
        text="Menu"
        modifierClasses={buttonStyles['button--menu']}
      />
      <nav
        className={clsx(
          styles.overlay,
          isOpen && styles['is-open'],
          modifierClasses,
        )}
        id={navId}
      >
        <HamburgerButton
          onClick={() => setIsOpen(false)}
          aria-controls={navId}
          aria-expanded={isOpen}
          hidden={!isOpen}
          text="Close"
          modifierClasses={buttonStyles['button--close']}
        />
        <Menu
          items={items}
          modifierClasses={styles.menu}
          linkClasses={styles.link}
        />
      </nav>
    </>
  );
}

export default OverlayMenu;
