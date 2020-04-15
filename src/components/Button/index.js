import PropTypes from 'prop-types';
import React from 'react';
import Container from './styled';

function Button(props) {
  const { children, ...styles } = props;
  return <Container {...styles}> {children} </Container>;
}

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: '',
};

export default Button;
