import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, #11998e, #38ef7d);
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 570px;
  width: 910px;

  /* background: rgba(0, 0, 0, 0.0001); */
  background-color: #ffffff;
  box-shadow: 0px 6px 20px rgba(13, 51, 32, 0.1);
  border-radius: 8px;
`;

const FormContainer = styled.div`
  display: inline-block;
  height: calc(100% - 33px);
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
  transition: all 0.4s linear;

  :focus {
    border-bottom: 1px solid #30be76;
  }

  :hover {
    border-bottom: 1px solid #30be76;
  }

  ${({ children, type, value, onChange, ...rest }) => rest}
`;

export { Wrapper, Container, FormContainer, FormInput };
