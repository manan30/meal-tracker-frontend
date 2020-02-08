import React from 'react';
import Button from '../../components/Button';
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
              {/* {new Array(20).fill(0).map(() => (
                <Image
                  display='inline-block'
                  height='80px'
                  width='calc(33% - 6.5px)'
                  margin-bottom='10px'
                  margin-right='10px'
                  adjust
                />
              ))} */}
            </ImagesContainer>
          </Content>
        </CardContainer>
      </SideSection>
      <MainSection>
        <CardContainer
          display='flex'
          width='100%'
          height='calc(35% - 20px)'
          margin-top='50px'
          margin-right='20px'>
          <Content>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}>
              <Text
                width='60%'
                font-style='normal'
                font-weight='bold'
                font-size='24px'
                line-height='32px'
                color='#030F09'>
                Sautéed Orange & Mustard Bruschetta
              </Text>
              <Text
                margin-right='16px'
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
                marginBottom: '10px'
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
                  marginTop: '10px'
                }}>
                {new Array(10).fill(0).map((_, i) => (
                  <Text
                    width='calc(50% - 16px)'
                    margin-right='16px'
                    margin-bottom='10px'
                    font-style='normal'
                    font-weight='normal'
                    font-size='14px'
                    line-height='22px'
                    adjust>
                    {`Ingredient ${i}`}
                  </Text>
                ))}
              </div>
            </Content>
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
            </Text>
            <Content
              margin='0'
              overflow='scroll'
              width='100%'
              height='calc(100% - 32px)'>
              {new Array(10).fill(0).map((_, i) => (
                <div
                  style={{
                    display: 'flex',
                    direction: 'row',
                    marginBottom: '10px'
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
                      color: '#30BE76'
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
                    Mix the flour, sugar, and baking powder together in a mixing
                    bowl. Stir in 1 cup eggnog, butter, and the egg until well
                    blended. Add more eggnog if needed to make a pourable
                    batter.
                  </Text>
                </div>
              ))}
            </Content>
          </Content>
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
            </Text>
            <Content
              overflow='scroll'
              margin='0'
              width='100%'
              height='calc(100% - 20px)'>
              {new Array(10).fill(0).map(() => (
                <Text
                  display='inline-block'
                  width='50%'
                  margin-bottom='10px'
                  font-style='normal'
                  font-weight='normal'
                  font-size='14px'
                  line-height='22px'
                  adjust>
                  222 calories
                </Text>
              ))}
            </Content>
          </Content>
        </CardContainer>
      </MainSection>
    </Wrapper>
  );
}

export default RecipePreview;
