'use client';

import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import {
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useId,
  useRef,
} from 'react';
import styles from './modal.module.css';

interface ModalProps extends GessoComponent {
  id?: string;
  title?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function Modal({
  id,
  title,
  children,
  defaultOpen = false,
  modifierClasses,
}: ModalProps): JSX.Element {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const generatedId = useId();
  const modalId = id || generatedId;

  useEffect(() => {
    if (defaultOpen) {
      openModal();
    }

    const modalOpenButtons = document.querySelectorAll(
      `[aria-controls="modal-${modalId}"]`,
    );
    modalOpenButtons.forEach(button => {
      button.addEventListener('click', openModal);
    });

    // Cleanup
    return () => {
      modalOpenButtons.forEach(button => {
        button.removeEventListener('click', openModal);
      });
    };
  }, [defaultOpen, modalId]);

  // Close modal on overlay click
  const handleOverlayClick: MouseEventHandler<HTMLDialogElement> = event => {
    const target = event.target as HTMLElement;
    if (target && target.closest && target.closest(`.${styles.inner}`)) return;
    closeModal();
  };

  // Function to handle key downs while modal is open
  const handleKeyDown: KeyboardEventHandler<HTMLDialogElement> = event => {
    const modal = dialogRef.current;
    if (!modal) return;

    const focusableElements = modal.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',
    );
    const firstFocusableElement = focusableElements[0] as HTMLElement;
    const lastFocusableElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    if (event.key === 'Tab') {
      // If shift key pressed for shift + tab combination
      if (event.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          // Add focus for the last focusable element
          lastFocusableElement.focus();
          event.preventDefault();
        }
      }
      // If focused has reached to last focusable element then focus first focusable element after pressing tab
      else if (document.activeElement === lastFocusableElement) {
        // Add focus for the first focusable element
        firstFocusableElement.focus();
        event.preventDefault();
      }
    } else if (event.key === 'Escape') {
      // Close modal on escape key press
      event.preventDefault();
      closeModal();
    }
  };

  // Function to show modal
  const openModal = () => {
    const modal = dialogRef.current;
    if (!modal) return;

    modal.showModal();

    // Turn off scrolling on the body
    document.body.classList.add('has-open-modal');

    const event = new CustomEvent('openmodal');
    modal.dispatchEvent(event);
  };

  // Function to close modal
  const closeModal = () => {
    const modal = dialogRef.current;
    if (!modal) return;

    modal.close();

    // Turn on scrolling on the body
    document.body.classList.remove('has-open-modal');

    const event = new CustomEvent('closemodal');
    modal.dispatchEvent(event);
  };

  return (
    <dialog
      ref={dialogRef}
      className={clsx(styles.modal, modifierClasses)}
      id={`modal-${modalId}`}
      aria-labelledby={`modal-title-${modalId}`}
      aria-describedby={`modal-content-${modalId}`}
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.inner}>
        <button
          type="button"
          className={styles.closeButton}
          aria-label="Close modal"
          aria-controls={`modal-${modalId}`}
          autoFocus
          onClick={closeModal}
        ></button>
        <div className={styles.content} id={`modal-content-${modalId}`}>
          {title && (
            <h2 className={styles.title} id={`modal-title-${modalId}`}>
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
