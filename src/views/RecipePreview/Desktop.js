import React from 'react';
import PropTypes from 'prop-types';
import {
  ImagesContent,
  ImageItem,
  ImagesContainer,
  RecipePreviewCard,
  SideSection,
  Wrapper,
  MainSection,
  DataContainer,
  RecipePreviewText,
  Separator,
} from './styled';
import Content from './Content';

function RecipePreviewDesktopView({ recipe }) {
  const { images, ingredients, instructions, nutrients } = recipe;

  return (
    <Wrapper>
      <SideSection>
        <RecipePreviewCard
          marginRight='20px'
          padding='0'
          width='auto'
          height={images && images.length > 0 ? '380px' : 'auto'}>
          <ImagesContent>
            <ImageItem height='150px' width='100%' src={images?.coverImage} />
            {images && (
              <ImagesContainer>
                {images.map((image, i) => {
                  const key = i;
                  return <ImageItem key={key} height='80px' src={image} />;
                })}
              </ImagesContainer>
            )}
          </ImagesContent>
        </RecipePreviewCard>
      </SideSection>
      <MainSection>
        <RecipePreviewCard height='calc(35% - 50px)'>
          <DataContainer>
            <DataContainer
              height='auto'
              alignItems='center'
              flexDirection='row'>
              <RecipePreviewText fontSize='24px' lineHeight='32px'>
                {recipe.recipeName}
              </RecipePreviewText>
              <RecipePreviewText
                marginLeft='auto'
                color='#30BE76'
                cursor='pointer'>
                Edit Recipe
              </RecipePreviewText>
            </DataContainer>
            <Separator />
            <RecipePreviewText marginBottom='16px'>
              Ingredients
            </RecipePreviewText>
            <DataContainer height='auto' wrap='wrap' flexDirection='row'>
              <Content tag='ingredients' data={ingredients} />
            </DataContainer>
          </DataContainer>
        </RecipePreviewCard>
        <RecipePreviewCard height='calc(45% - 50px)' marginTop='20px'>
          <DataContainer>
            <RecipePreviewText marginBottom='16px'>
              How to cook
            </RecipePreviewText>
            <DataContainer>
              <Content tag='instructions' data={instructions} />
            </DataContainer>
          </DataContainer>
        </RecipePreviewCard>
        <RecipePreviewCard height='calc(20% - 50px)' margin-top='20px'>
          <DataContainer>
            <RecipePreviewText marginBottom='16px'>
              Nutritional Information
            </RecipePreviewText>
            <DataContainer>
              <Content tag='nutrients' data={nutrients} />
            </DataContainer>
          </DataContainer>
        </RecipePreviewCard>
      </MainSection>
    </Wrapper>
  );
}

RecipePreviewDesktopView.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any),
};

RecipePreviewDesktopView.defaultProps = {
  recipe: {},
};

export default RecipePreviewDesktopView;
