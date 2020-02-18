import React from 'react';
import PropTypes from 'prop-types';
import { MdCancel, MdCheckCircle } from 'react-icons/md';
import { Container, LineItem } from './styled';

function PasswordRequirements({ items }) {
  return (
    <Container>
      {items.map((item, i) => {
        const key = i;
        const [[text, status]] = Object.values(item);
        console.log(status);
        return (
          <LineItem key={key} color={status ? 'green' : 'red'}>
            {!status ? <MdCancel /> : <MdCheckCircle />}
            &nbsp; {text}
          </LineItem>
        );
      })}
    </Container>
  );
}

PasswordRequirements.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any))
};

PasswordRequirements.defaultProps = {
  items: []
};

export default PasswordRequirements;
