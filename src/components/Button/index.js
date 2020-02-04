import PropTypes from 'prop-types';
import React from 'react';
import Container from './styled';

function Button(props) {
  const { text, ...styles } = props;
  return <Container {...styles}> {text} </Container>;
}

Button.propTypes = {
  text: PropTypes.string
};

Button.defaultProps = {
  text: ''
};

export default Button;
