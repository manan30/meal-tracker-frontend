import styled from 'styled-components';

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  background: rgba(40, 41, 40, 0.5);
  mix-blend-mode: normal;
  border-radius: 8px;

  ${({ children, ...rest }) => rest}
`;

export { ModalBackground };
