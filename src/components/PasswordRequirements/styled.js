import styled from 'styled-components';

const Container = styled.div`
  width: calc(100% - 32px);
`;

const LineItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: ${({ color }) => color};
  font-size: 12px;

  svg {
    line-height: 12px;
  }
`;

export { Container, LineItem };
