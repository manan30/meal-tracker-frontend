import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: calc(100vw - 40px);
  padding: 20px;
  background-color: white;
  align-items: center;
`;

const IconsContainer = styled.div`
  display: inline-flex;
  flex-basis: auto;
  flex-grow: 2;
  justify-content: space-evenly;
  color: #363837;
`;

export { Container, IconsContainer };
