import styled from 'styled-components';

const CarouselContainer = styled.div`
  height: 100%;
  width: ${props =>
    props.marginRight ? `calc(100 % -props.marginRight)` : '100%'};
  overflow-x: scroll;
  overflow-y: hidden;
  /* background: white; */
  white-space: nowrap;

  ${({ marginRight }) => {
    console.log(marginRight);
    return `
    :last-child {
    margin-right: ${marginRight};
  }`;
  }}
`;

export { CarouselContainer };
