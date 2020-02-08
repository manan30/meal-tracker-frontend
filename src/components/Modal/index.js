import React from 'react';
import { Container } from './styled';

function Modal({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

export default Modal;
