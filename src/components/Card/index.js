import React from 'react';
import CardContainer from './styled';

function Card({ children, ...props }) {
  return <CardContainer {...props}>{children}</CardContainer>;
}

export default Card;
