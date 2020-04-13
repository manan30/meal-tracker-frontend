import React from 'react';
import {
  Wrapper,
  ImageItem,
  DataContainer,
  ImagesContainerC,
  RecipePreviewText,
} from './styled';
import BackButton from '../../components/BackButton';

function RecipePreviewMobileView() {
  return (
    <Wrapper>
      <BackButton text='my profile' textColor='#ffffff' />
      <ImageItem height='350' />
      <DataContainer>
        <ImagesContainerC>
          {new Array(3).fill(0).map((_, i) =>
            i !== 2 ? (
              <ImageItem />
            ) : (
              <ImageItem overflow='true'>
                <RecipePreviewText>12+</RecipePreviewText>
              </ImageItem>
            )
          )}
        </ImagesContainerC>
      </DataContainer>
    </Wrapper>
  );
}

export default RecipePreviewMobileView;
