import styled from 'styled-components';

const CardContainer = styled.div`
  /* ${props => {
    return {
      height: props.height,
      width: props.width,
      marginRight: props.marginRight
    };
  }}
  ${props => {
    return (
      props.rlc &&
      `:last-child {
        margin-right: 0px !important;
    }`
    );
  }}; */

  background-color: #ffffff;
  border-radius: 8px;

  transition: all 0.3s ease-in-out;

  :first-child {
    margin-left: ${props => props.marginLeft && props.marginLeft}
  }

  ${({ hover }) =>
    hover &&
    `:hover {
      /* border: 2px solid #30BE76; */
      border-radius: 10px;
      transform: scale(0.9);
  }`}

  ${({ deduct }) =>
    deduct &&
    `:nth-child(odd) {
        margin-right: 25px;
        width: 50%;
      }`}

  ${props => {
    const { children, marginLeft, ...rest } = props;
    return rest;
  }}

`;

export default CardContainer;
