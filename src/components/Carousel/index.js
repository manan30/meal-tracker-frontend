import React from 'react';
import { CarouselContainer } from './styled';

function Carousel({ children, ...rest }) {
  return <CarouselContainer {...rest}>{children}</CarouselContainer>;
}

export default Carousel;
