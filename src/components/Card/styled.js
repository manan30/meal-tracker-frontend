import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(13, 51, 32, 0.1);

  transition: all 0.3s ease-in-out;

  ${props => {
    const { children, marginLeft, ...rest } = props;
    return rest;
  }}
`;

export default CardContainer;
