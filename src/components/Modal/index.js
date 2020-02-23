import React from 'react';
import { ModalBackground } from './styled';

function Modal({ children }) {
  return <ModalBackground>{children}</ModalBackground>;
}

export default Modal;
