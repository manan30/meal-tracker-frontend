import PropTypes from 'prop-types';
import React from 'react';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

function InfiniteScroll({
  initialItems,
  itemComponent: Component,
  itemComponentProps,
  loadingComponent,
  callback
}) {
  const { data, loading, loadingElementRef } = useInfiniteScroll(
    callback,
    initialItems
  );

  return (
    <>
      {data.map((item, i) => {
        const idx = i;
        const props = itemComponentProps.reduce((acc, curr) => {
          acc[curr] = item[curr];
          return acc;
        }, {});
        return <Component key={idx} {...props} />;
      })}
      <div
        className='Loader'
        style={{ height: '16px', background: 'red' }}
        ref={loadingElementRef}>
        {loading && loadingComponent}
      </div>
    </>
  );
}

InfiniteScroll.propTypes = {
  initialItems: PropTypes.arrayOf(PropTypes.any),
  itemComponent: PropTypes.element,
  itemComponentProps: PropTypes.arrayOf(PropTypes.string),
  loadingComponent: PropTypes.element,
  callback: PropTypes.func
};

InfiniteScroll.defaultProps = {
  initialItems: [],
  itemComponent: <> </>,
  itemComponentProps: [],
  loadingComponent: <> </>,
  callback: () => console.log()
};

export default InfiniteScroll;
