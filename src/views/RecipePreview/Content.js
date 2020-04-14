import PropTypes from 'prop-types';
import React from 'react';
import {
  MobileContentContainer,
  RecipePreviewText,
  CircularText,
} from './styled';
import EmptyContent from '../../components/EmptyContent';

function Content({ data, tag }) {
  return (
    <>
      {data && data.length > 0 ? (
        data.map((d, i) => {
          const key = i;
          return (
            <MobileContentContainer
              flexDirection={tag === 'instructions' ? 'row' : 'column'}>
              {tag === 'instructions' && <CircularText>{key}</CircularText>}
              <RecipePreviewText fontSize='14px' lineHeight='22px'>
                {d}
              </RecipePreviewText>
            </MobileContentContainer>
          );
        })
      ) : (
        <EmptyContent text={tag} />
      )}
    </>
  );
}

Content.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  tag: PropTypes.string,
};

Content.defaultProps = { data: [], tag: '' };

export default Content;
