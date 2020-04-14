import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  height: 100%;
  width: 100%;
`;

function EmptyContent({ text }) {
  return (
    <Container>
      <Text>No {text} available</Text>
    </Container>
  );
}

EmptyContent.propTypes = {
  text: PropTypes.string,
};

EmptyContent.defaultProps = {
  text: '',
};

export default EmptyContent;
