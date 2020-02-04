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

  background: #ffffff;
  border-radius: 8px;

  ${props => {
    const { children, marginRight, ...rest } = props;
    return rest;
  }}
`;

export default CardContainer;
