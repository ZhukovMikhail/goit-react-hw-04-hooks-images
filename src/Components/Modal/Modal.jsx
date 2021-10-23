import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children, onCloseModal }) {
  useEffect(() => {
    window.addEventListener('keydown', idEscapeEvent);

    return () => {
      window.removeEventListener('keydown', idEscapeEvent);
    };
  });

  function idEscapeEvent(e) {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  }

  function onBackdropClick(e) {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  }

  return createPortal(
    <div className="Overlay" onClick={onBackdropClick}>
      <div className="Modal">{children}</div>
    </div>,
    modalRoot,
  );
}
