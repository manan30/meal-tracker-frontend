import React from 'react';
import SpinnerDiv from './styled';

function Spinner({ children, ...rest }) {
  return <SpinnerDiv {...rest} />;
}

export default Spinner;
