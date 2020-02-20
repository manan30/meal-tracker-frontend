import styled, { createGlobalStyle } from 'styled-components';
import { Link as anchor } from 'react-router-dom';

export default createGlobalStyle`
  html, body {
    overflow: hidden;
  }

  body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    position: relative;
    background-color: #F2F2F2;
    font-family: 'Nunito Sans', sans-serif;
  }
`;

const Link = styled(anchor)`
  text-decoration: none;

  ${({ children, ...rest }) => rest}
`;

export { Link };
