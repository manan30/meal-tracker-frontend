import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { MdChevronLeft } from 'react-icons/md';

const Container = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;

  margin-left: 20px;
  margin-top: 10px;
`;

const Button = styled.div`
  height: 20px;
  width: 20px;

  color: ${(props) => props.textColor || '#767676'};

  cursor: pointer;

  svg {
    height: 100%;
    width: 100%;
  }
`;

const Text = styled.div`
  align-self: center;

  margin-left: 5px;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;

  color: ${(props) => props.textColor || '#767676'};
`;

function BackButton({ text, textColor }) {
  const { goBack } = useHistory();

  return (
    <Container>
      <Button onClick={goBack} textColor={textColor}>
        <MdChevronLeft />
      </Button>
      <Text textColor={textColor}>Back to {text}</Text>
    </Container>
  );
}

BackButton.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
};

BackButton.defaultProps = {
  text: '',
  textColor: '',
};

export default BackButton;
