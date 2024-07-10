import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { MouseEventHandler, useEffect, useRef } from 'react';
import styles from './modal.module.css';

interface ModalProps extends GessoComponent {
  id: string;
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

  useEffect(() => {
    if (defaultOpen) {
      openModal();
    }

    handleKeyDown();

    const modalOpenButtons = document.querySelectorAll(
      `[aria-controls="modal-${id}"]`,
    );
    modalOpenButtons.forEach(button => {
      button.addEventListener('click', openModal);
    });
  });

  // Close modal on overlay click
  const handleOverlayClick: MouseEventHandler<HTMLDialogElement> = event => {
    const target = event.target as HTMLElement;
    if (target && target.closest && target.closest(`dialog > div`)) return;
    closeModal();
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

  // Function to handle key downs while modal is open
  const handleKeyDown = () => {
    const modal = dialogRef.current;
    if (!modal) return;

    const focusableElements = modal.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',
    );
    const firstFocusableElement = focusableElements[0] as HTMLElement;
    const lastFocusableElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    modal.addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        // If shift key pressed for shift + tab combination
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            // Add focus for the last focusable element
            lastFocusableElement.focus();
            e.preventDefault();
          }
        }
        // If focused has reached to last focusable element then focus first focusable element after pressing tab
        else if (document.activeElement === lastFocusableElement) {
          // Add focus for the first focusable element
          firstFocusableElement.focus();
          e.preventDefault();
        }
      } else if (e.key === 'Escape') {
        // Close modal on escape key press
        e.preventDefault();
        closeModal();
      }
    });
  };

  return (
    <dialog
      ref={dialogRef}
      className={clsx(styles.modal, modifierClasses)}
      id={`modal-${id}`}
      aria-labelledby={`modal-title-${id}`}
      aria-describedby={`modal-content-${id}`}
      onClick={handleOverlayClick}
    >
      <div className={styles.inner}>
        <button
          className={styles.closeButton}
          aria-label="Close modal"
          aria-controls={`modal-${id}`}
          autoFocus
          onClick={closeModal}
        ></button>
        <div className={styles.content} id={`modal-content-${id}`}>
          {title && (
            <h2 className={styles.title} id={`modal-title-${id}`}>
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
