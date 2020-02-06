import React from 'react';
import Container from './styled';

function Text({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

export default Text;
