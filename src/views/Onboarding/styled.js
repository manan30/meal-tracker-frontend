import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ffffff;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 570px;
  width: 910px;

  background: rgba(0, 0, 0, 0.0001);
  box-shadow: 0px 6px 20px rgba(13, 51, 32, 0.1);
  border-radius: 8px;
`;

const FormContainer = styled.div`
  display: inline-block;
  height: calc(100% - 52px);
  width: calc(50% - 32px);
  padding: 16px;
  margin-left: 50%;
  margin-bottom: 20px;
  overflow-y: scroll;
`;

const FormInput = styled.input`
  height: 32px;
  width: calc(100% - 32px);
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #cccccc;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #030f09;
  ${({ children, ...rest }) => rest}
`;

export { Wrapper, Container, FormContainer, FormInput };
