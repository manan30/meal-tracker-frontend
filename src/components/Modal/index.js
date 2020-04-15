import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import {
  ModalBackground,
  ModalContainer,
  ModalHeaderContainer,
  ModalText,
  CancelIcon,
} from './styled';

function Modal({ children, title, closeHandler }) {
  return (
    <ModalBackground>
      <ModalContainer>
        <ModalHeaderContainer>
          <ModalText>{title}</ModalText>
          <CancelIcon onClick={closeHandler}>
            <MdClose />
          </CancelIcon>
        </ModalHeaderContainer>
        {children}
      </ModalContainer>
    </ModalBackground>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.elementType),
    PropTypes.elementType,
  ]).isRequired,
  title: PropTypes.string,
  closeHandler: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  title: '',
};

export default Modal;
