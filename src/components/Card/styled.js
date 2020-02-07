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

  :first-child {
    margin-left: ${props => props.marginLeft && props.marginLeft}
  }

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
