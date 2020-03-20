import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const LoadingElementContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 24px;
  margin-bottom: 12px;

  background: transparent;

  svg {
    height: inherit;
  }
`;

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
      <LoadingElementContainer ref={loadingElementRef}>
        {loading && loadingComponent}
      </LoadingElementContainer>
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
