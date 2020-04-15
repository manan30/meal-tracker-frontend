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
    background-color: #f2f2f2;
    font-family: 'Nunito Sans', sans-serif;

    @media screen and (max-width: 767px){
      background-color: #ffffff;
    }
  }

  a{
    text-decoration: none;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;

const Link = styled(anchor)`
  text-decoration: none;

  :link {
    color: ${(props) => props.color && props.color};
  }

  :visited {
    color: ${(props) => props.visitedColor || '#363837'};
  }

  /* :active {
    text-decoration: none;
  } */

  ${({ children, ...rest }) => rest}
`;

export { Link };
