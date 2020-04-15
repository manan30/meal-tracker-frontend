import React from 'react';
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
        <RecipePreviewCard marginRight='20px'>
          <ImagesContent>
            <ImageItem height='150px' width='100%' margin-bottom='10px' />
            <ImagesContainer desktop='true'>
              {new Array(16).fill(0).map((imageURL, i) => {
                const key = i;
                return <ImageItem key={key} height='80px' src={imageURL} />;
              })}
            </ImagesContainer>
          </ImagesContent>
        </RecipePreviewCard>
      </SideSection>
      <MainSection>
        <RecipePreviewCard
          height='calc(35% - 50px)'
          width='calc(100% - 50px)'
          padding='25px'>
          <DataContainer flexDirection='column'>
            <DataContainer height='auto' alignItems='center'>
              <RecipePreviewText fontSize='24px' lineHeight='32px'>
                {/* {data.name} */}
                ABCD
              </RecipePreviewText>
              <RecipePreviewText
                marginLeft='auto'
                fontSize='16px'
                lineHeight='22px'
                color='#30BE76'
                cursor='pointer'>
                Edit Recipe
              </RecipePreviewText>
            </DataContainer>
            <Separator />
            <RecipePreviewText
              fontSize='16px'
              lineHeight='22px'
              marginBottom='16px'>
              Ingredients
            </RecipePreviewText>
            <DataContainer height='auto' wrap='wrap'>
              <Content tag='ingredients' data={new Array(15).fill(0)} />
            </DataContainer>
          </DataContainer>
        </RecipePreviewCard>
        <RecipePreviewCard
          height='calc(45% - 50px)'
          marginTop='20px'
          width='calc(100% - 50px)'
          padding='25px'>
          <DataContainer flexDirection='column'>
            <RecipePreviewText
              fontSize='16px'
              lineHeight='22px'
              marginBottom='16px'>
              How to cook
            </RecipePreviewText>
            <DataContainer height='auto' flexDirection='column'>
              <Content tag='instructions' data={new Array(15).fill(0)} />
            </DataContainer>
          </DataContainer>
        </RecipePreviewCard>
        <RecipePreviewCard
          height='calc(20% - 50px)'
          margin-top='20px'
          width='calc(100% - 50px)'
          padding='25px'>
          <DataContainer flexDirection='column'>
            <RecipePreviewText
              fontSize='16px'
              lineHeight='22px'
              marginBottom='16px'>
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

export default RecipePreviewDesktopView;
