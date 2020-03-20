import PropTypes from 'prop-types';
import React from 'react';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

function InfiniteScroll({ children, callback }) {
  const [list, loadingElement] = children;
  const { loading, loadingElementRef } = useInfiniteScroll(callback);

  return (
    <>
      {list}
      <div
        className='Loader'
        style={{ height: '16px', background: 'red' }}
        ref={loadingElementRef}>
        {loading && loadingElement}
      </div>
    </>
  );
}

InfiniteScroll.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element
    ])
  ),
  callback: PropTypes.func
};

InfiniteScroll.defaultProps = {
  children: [<> </>],
  callback: () => console.log()
};

export default InfiniteScroll;
