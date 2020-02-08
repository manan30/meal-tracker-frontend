import styled from 'styled-components';

const Container = styled.div`
  height: ${({ height, margin }) =>
    height ? `calc(${height} - ${margin * 2})` : '100%'};
  width: ${({ width, margin }) =>
    width ? `calc(${width} - ${margin * 2})` : '100%'};
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 6px 20px rgba(13, 51, 32, 0.1);

  ${({ children, ...rest }) => rest}
`;

export { Container };
