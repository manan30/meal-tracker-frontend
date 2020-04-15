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

function RecipePreviewDesktopView({ data }) {
  return (
    <Wrapper>
      <SideSection>
        <RecipePreviewCard marginRight='20px' padding='0' width='auto'>
          <ImagesContent>
            <ImageItem height='150px' width='100%' />
            <ImagesContainer>
              {new Array(16).fill(0).map((imageURL, i) => {
                const key = i;
                return <ImageItem key={key} height='80px' src={imageURL} />;
              })}
            </ImagesContainer>
          </ImagesContent>
        </RecipePreviewCard>
      </SideSection>
      <MainSection>
        <RecipePreviewCard height='calc(35% - 50px)'>
          <DataContainer flexDirection='column'>
            <DataContainer height='auto' alignItems='center'>
              <RecipePreviewText fontSize='24px' lineHeight='32px'>
                {/* {data.name} */}
                ABCD
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
            <DataContainer height='auto' wrap='wrap'>
              <Content tag='ingredients' data={new Array(15).fill(0)} />
            </DataContainer>
          </DataContainer>
        </RecipePreviewCard>
        <RecipePreviewCard height='calc(45% - 50px)' marginTop='20px'>
          <DataContainer flexDirection='column'>
            <RecipePreviewText marginBottom='16px'>
              How to cook
            </RecipePreviewText>
            <DataContainer height='auto' flexDirection='column'>
              <Content tag='instructions' data={new Array(15).fill(0)} />
            </DataContainer>
          </DataContainer>
        </RecipePreviewCard>
        <RecipePreviewCard height='calc(20% - 50px)' margin-top='20px'>
          <DataContainer flexDirection='column'>
            <RecipePreviewText marginBottom='16px'>
              Nutritional Information
            </RecipePreviewText>
            <DataContainer height='auto' flexDirection='column'>
              <Content tag='nutrients' data={new Array(15).fill(0)} />
            </DataContainer>
          </DataContainer>
        </RecipePreviewCard>
      </MainSection>
    </Wrapper>
  );
}

RecipePreviewDesktopView.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
};

RecipePreviewDesktopView.defaultProps = {
  data: {},
};

export default RecipePreviewDesktopView;
