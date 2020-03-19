import React from 'react';
import PropTypes from 'prop-types';

function InfiniteScroll({ children }) {
  return <>{children}</>;
}

InfiniteScroll.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element
    ])
  )
};

InfiniteScroll.defaultProps = {
  children: [<> </>]
};

export default InfiniteScroll;
