import styled from 'styled-components';
import Text from '../Text';

const ModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 60%;

  padding: 0 20%;

  background: rgba(40, 41, 40, 0.5);
  mix-blend-mode: normal;
  border-radius: 8px;
`;

const ModalContainer = styled.div`
  padding: 25px;
  width: calc(100% - 50px);

  box-shadow: 0px 0px 5px rgba(13, 51, 32, 0.1);
  border-radius: 8px;
  background: white;

  overflow: hidden;
`;

const ModalHeaderContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 16px;
`;

const ModalText = styled(Text)`
  font-size: 20px;
  line-height: 24px;
  color: #030f09;
`;

const CancelIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-left: auto;

  color: #363837;

  cursor: pointer;

  svg {
    height: 100%;
    width: 100%;

    opacity: 0.4;
  }
`;

export {
  ModalBackground,
  ModalContainer,
  ModalHeaderContainer,
  ModalText,
  CancelIcon,
};
