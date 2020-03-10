import React from 'react';
import ReactDOM from 'react-dom';
// import { whyDidYouUpdate } from 'why-did-you-update';
import App from './App';
import GlobalStyles from './GlobalStyles';

// if (process.env.NODE_ENV !== 'production') {
//   whyDidYouUpdate(React);
// }

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
