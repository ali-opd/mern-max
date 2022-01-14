import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';
import './Modal.css';

const ModalOverlay = ({
  children,
  header,
  className,
  style,
  headerClass,
  onSubmit,
  footerClass,
  contentClass,
  footer,
}) => {
  const content = (
    <div className={`modal ${className}`} style={style}>
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
      </header>

      <form onSubmit={onSubmit ? onSubmit : (e) => e.preventDefault()}>
        <div className={`modal__content ${contentClass}`}>{children}</div>

        <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

export default function Modal({ show, onCancel, ...restProps }) {
  return (
    <>
      {show && <Backdrop onClick={onCancel} />}
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...restProps} />
      </CSSTransition>
    </>
  );
}
