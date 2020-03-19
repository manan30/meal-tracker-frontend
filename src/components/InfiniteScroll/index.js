import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

function InfiniteScroll({ children, callback }) {
  const loadingElementRef = useRef();
  const [list, loadingElement] = children;
  const {
    loadingElement: element,
    setLoadingElement,
    loading
  } = useInfiniteScroll(loadingElementRef.current, callback);

  useEffect(() => {
    if (!element && loadingElementRef.current) {
      setLoadingElement(loadingElementRef.current);
    }
  }, [element, setLoadingElement]);

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
