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
        style={{ height: '16px', background: 'transparent' }}
        ref={loadingElementRef}>
        {loading && loadingComponent}
      </div>
    </>
  );
}

InfiniteScroll.propTypes = {
  initialItems: PropTypes.arrayOf(PropTypes.any),
  itemComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  itemComponentProps: PropTypes.arrayOf(PropTypes.string),
  loadingComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
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
