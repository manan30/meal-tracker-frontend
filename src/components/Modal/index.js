import React from 'react';
import { ModalBackground } from './styled';

function Modal({ children, ...styles }) {
  return <ModalBackground {...styles}>{children}</ModalBackground>;
}

export default Modal;
