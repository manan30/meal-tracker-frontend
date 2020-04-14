import React from 'react';
import {
  Wrapper,
  ImageItem,
  DataContainer,
  ImagesContainer,
  RecipePreviewText,
} from './styled';
import BackButton from '../../components/BackButton';
import Tabs from '../../components/Tabs';
import Content from './Content';

function RecipePreviewMobileView() {
  return (
    <Wrapper>
      <BackButton text='my profile' textColor='#ffffff' />
      <ImageItem height='30%' />
      <DataContainer>
        <ImagesContainer>
          {new Array(3).fill(0).map((_, i) => {
            const key = i;
            return i !== 2 ? (
              <ImageItem key={key} />
            ) : (
              <ImageItem overflow='true' key={key}>
                <RecipePreviewText>12+</RecipePreviewText>
              </ImageItem>
            );
          })}
        </ImagesContainer>
        <div style={{ height: 'calc(100% - 94px)' }}>
          <Tabs
            tabs={[
              {
                tag: 'Ingredients',
                component: <Content tag='ingredients' />,
              },
              { tag: 'How to cook', component: <Content tag='instructions' /> },
              {
                tag: 'Nutritional Info',
                component: <Content tag='nutrients' />,
              },
            ]}
          />
        </div>
      </DataContainer>
    </Wrapper>
  );
}

export default RecipePreviewMobileView;
