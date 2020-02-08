import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 126px;
  height: 36px;
  margin: auto;
  padding: 5px;
  /* box-shadow: 0px 6px 20px rgba(13, 51, 32, 0.1); */

  background: #ffffff;
  border: 2px solid #30be76;
  box-sizing: border-box;
  border-radius: 8px;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;

  letter-spacing: 0.32px;

  color: #30be76;

  cursor: pointer;

  transition: all 0.4s ease-in-out;

  align-items: center;
  justify-content: center;

  :hover {
    background: #30be76;
    color: #ffffff;
    box-shadow: 0px 6px 20px rgba(13, 51, 32, 0.1);
  }

  ${props => {
    const { children, ...rest } = props;
    return rest;
  }};
`;

export default Container;
