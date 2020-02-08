import React from 'react';
import CardContainer from '../../components/Card/styled';
import Text from '../../components/Text';
import {
  Content,
  Image,
  ImagesContainer,
  MainSection,
  SideSection,
  Wrapper
} from './styled';
import Button from '../../components/Button';

function RecipePreview() {
  return (
    <Wrapper>
      <SideSection>
        <CardContainer
          display='flex'
          width='calc(100% - 20px)'
          height='380px'
          margin-top='50px'
          margin-right='20px'>
          <Content>
            <Image height='150px' width='100%' margin-bottom='10px' />
            <ImagesContainer>
              {new Array(21).fill(0).map(() => (
                <Image
                  display='inline-block'
                  height='80px'
                  width='calc(33% - 6.5px)'
                  margin-bottom='10px'
                  margin-right='10px'
                  adjust
                />
              ))}
            </ImagesContainer>
          </Content>
        </CardContainer>
      </SideSection>
      <MainSection>
        <CardContainer
          display='flex'
          width='100%'
          height='calc(30% - 20px)'
          margin-top='50px'
          margin-right='20px'>
          <Content overflow='scroll'>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}>
              <Text
                width='70%'
                font-style='normal'
                font-weight='bold'
                font-size='24px'
                line-height='32px'
                color='#030F09'>
                Sautéed Orange & Mustard Bruschetta
              </Text>
              <Text
                font-style='normal'
                font-weight='bold'
                font-size='16px'
                line-height='22px'
                letter-spacing='0.32px'
                color='#30BE76'
                cursor='pointer'>
                Edit Recipe
              </Text>
              <Button
                text='Start Cooking'
                width='160px'
                height='40px'
                box-shadow='0px 6px 20px rgba(13, 51, 32, 0.1)'
              />
            </div>
            <div
              style={{
                height: '1px',
                backgroundColor: '#E6E6E6',
                borderRadius: '0.5px',
                marginTop: '30px',
                marginBottom: '20px'
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
          </Content>
        </CardContainer>
        <CardContainer
          display='flex'
          width='100%'
          height='calc(50% - 50px)'
          margin-top='20px'
          margin-right='20px'
        />
        <CardContainer
          display='flex'
          width='100%'
          height='calc(20% - 50px)'
          margin-top='20px'
          margin-right='20px'
          margin-bottom='30px'
        />
      </MainSection>
    </Wrapper>
  );
}

export default RecipePreview;
