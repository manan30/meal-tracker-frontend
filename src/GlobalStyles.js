import { createGlobalStyle } from 'styled-components';

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

  a{
    text-decoration: none;
  }
`;
