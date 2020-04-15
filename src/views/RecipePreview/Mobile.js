import PropTypes from 'prop-types';
import React from 'react';
import BackButton from '../../components/BackButton';
import Tabs from '../../components/Tabs';
import Content from './Content';
import {
  DataContainer,
  ImageItem,
  ImagesContainer,
  RecipePreviewText,
  Wrapper,
  RecipePreviewEditButton,
  RecipeHeader,
} from './styled';

function RecipePreviewMobileView({ recipe }) {
  const { images, ingredients, instructions, nutrients } = recipe;

  return (
    <Wrapper>
      <BackButton text='my profile' textColor='#ffffff' />
      <RecipePreviewEditButton>
        <RecipePreviewText fontSize='10px' lineHeight='16px' color='#ffffff'>
          Edit
        </RecipePreviewText>
      </RecipePreviewEditButton>
      <ImageItem height='30%' src={images?.coverImage} />
      <RecipeHeader>{recipe.recipeName}</RecipeHeader>
      <DataContainer>
        {images && images.length > 0 && (
          <ImagesContainer marginBottom='25px'>
            {(images.length > 3 ? images.slice(0, 3) : images).map(
              (image, i) => {
                const key = i;
                return i !== 2 ? (
                  <ImageItem key={key} src={image} />
                ) : (
                  <ImageItem overflow='true' key={key} src={image}>
                    <RecipePreviewText fontSize='20px' lineHeight='27px'>
                      {images.length - 3}+
                    </RecipePreviewText>
                  </ImageItem>
                );
              }
            )}
          </ImagesContainer>
        )}
        <div
          style={{
            height: `${
              images && images.length > 0 ? 'calc(100% - 94px)' : '100%'
            }`,
          }}>
          <Tabs
            tabs={[
              {
                tag: 'Ingredients',
                component: (
                  <Content tag='ingredients' data={ingredients || []} />
                ),
              },
              {
                tag: 'How to cook',
                component: (
                  <Content tag='instructions' data={instructions || []} />
                ),
              },
              {
                tag: 'Nutritional Info',
                component: <Content tag='nutrients' data={nutrients || []} />,
              },
            ]}
          />
        </div>
      </DataContainer>
    </Wrapper>
  );
}

RecipePreviewMobileView.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any),
};

RecipePreviewMobileView.defaultProps = {
  recipe: {},
};

export default RecipePreviewMobileView;
