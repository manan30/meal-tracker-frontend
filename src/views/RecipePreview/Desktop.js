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
          <DataContainer>
            <DataContainer height='auto' alignItems='center'>
              <RecipePreviewText fontSize='24px' lineHeight='32px'>
                {/* {data.name} */}
                ABCD
              </RecipePreviewText>
              <RecipePreviewText
                fontSize='16px'
                lineHeight='22px'
                color='#30BE76'>
                Edit Recipe
              </RecipePreviewText>
            </DataContainer>
          </DataContainer>
          {/* <Content tag='ingredients' data={new Array(15).fill(0)} desktop /> */}
          {/*
              <Button
                text='Start Cooking'
                width='160px'
                height='40px'
                box-shadow='0px 6px 20px rgba(13, 51, 32, 0.1)'
              />
            <div
              style={{
                height: '1px',
                backgroundColor: '#E6E6E6',
                borderRadius: '0.5px',
                marginTop: '30px',
                marginBottom: '10px',
              }}
            />
            <Text
              font-style='normal'
              font-weight='bold'
              font-size='16px'
              line-height='22px'
              color='#030F09'>
              Ingredients
            </Text>
            <Content
              margin='0'
              overflow='scroll'
              width='100%'
              height='calc(100% - 90px)'>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginTop: '10px',
                }}>
                {recipeDetails.ingredients.map((ingredient, i) => {
                  const key = i;
                  return (
                    <Text
                      key={key}
                      width='calc(50% - 16px)'
                      margin-right='16px'
                      margin-bottom='10px'
                      font-style='normal'
                      font-weight='normal'
                      font-size='14px'
                      line-height='22px'
                      adjust>
                      {ingredient}
                    </Text>
                  );
                })}
              </div> */}
          {/* </Content>
          </Content>
        </CardContainer>
        <CardContainer
          display='flex'
          width='100%'
          height='calc(45% - 50px)'
          margin-top='20px'
          margin-right='20px'>
          <Content>
            <Text
              font-style='normal'
              font-weight='bold'
              font-size='16px'
              line-height='22px'
              color='#030F09'
              margin-bottom='16px'>
              How to cook
            </Text> */}
          {/* <Content
                margin='0'
                overflow='scroll'
                width='100%'
                height='calc(100% - 32px)'>
                {recipeDetails.steps.map((step, i) => {
                  const key = i;
                  return (
                    <div
                      key={key}
                      style={{
                        display: 'flex',
                        direction: 'row',
                        marginBottom: '10px',
                      }}>
                      <div
                        style={{
                          height: '20px',
                          width: '20px',
                          padding: '5px',
                          borderRadius: '50%',
                          border: '1px solid #30BE76',
                          textAlign: 'center',
                          fontStyle: 'normal',
                          fontWeight: 'normal',
                          fontSize: '12px',
                          lineHeight: '20px',
                          marginRight: '15px',
                          color: '#30BE76',
                        }}>
                        {i}
                      </div>
                      <Text
                        width='calc(100% - 50px)'
                        margin-bottom='10px'
                        font-style='normal'
                        font-weight='normal'
                        font-size='14px'
                        line-height='22px'
                        adjust>
                        {step}
                      </Text>
                    </div>
                  );
                })}
              </Content> */}
          {/* </Content>
        </CardContainer>
        <CardContainer
          display='flex'
          width='100%'
          height='calc(23% - 50px)'
          margin-top='20px'
          margin-right='20px'
          margin-bottom='30px'>
          <Content>
            <Text
              font-style='normal'
              font-weight='bold'
              font-size='16px'
              line-height='22px'
              color='#030F09'
              margin-bottom='8px'>
              Nutritional Information
            </Text> */}
          {/* <Content
                overflow='scroll'
                margin='0'
                width='100%'
                height='calc(100% - 20px)'>
                {recipeDetails.nutritionalInfo.map((info, i) => {
                  return (
                    <Text
                      display='inline-block'
                      width='50%'
                      margin-bottom='10px'
                      font-style='normal'
                      font-weight='normal'
                      font-size='14px'
                      line-height='22px'
                      adjust>
                      {info}
                    </Text>
                  );
                })}
              </Content> */}
          {/* </Content>
        </CardContainer> */}
        </RecipePreviewCard>
      </MainSection>
    </Wrapper>
  );
}

export default RecipePreviewDesktopView;
