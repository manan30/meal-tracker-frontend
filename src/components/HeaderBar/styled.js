import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: calc(100vw - 40px);
  padding: 20px;
  background-color: white;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 1024px) {
    box-shadow: 0px 0px 5px rgba(13, 51, 32, 0.1);
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-basis: auto;
  flex-grow: 2;
  justify-content: space-evenly;
  align-items: center;
  color: #363837;
`;

export { Container, IconsContainer };
