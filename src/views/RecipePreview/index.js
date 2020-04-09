import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipe } from '../../api/Recipe';
import Button from '../../components/Button';
import CardContainer from '../../components/Card/styled';
import Text from '../../components/Text';
import useAPI from '../../hooks/useAPI';
import {
  Content,
  Image,
  ImagesContainer,
  MainSection,
  SideSection,
  Wrapper,
} from './styled';

function RecipePreview() {
  const { id } = useParams();
  const callback = useCallback(() => getRecipe(id), [id]);
  const { data: recipeDetails, error } = useAPI(callback);

  return (
    (Object.keys(recipeDetails).length !== 0 && (
      <Wrapper>
        {/* <SideSection>
          <CardContainer
            display='flex'
            width='calc(100% - 20px)'
            height='380px'
            margin-top='50px'
            margin-right='20px'>
            <Content>
              <Image height='150px' width='100%' margin-bottom='10px' />
              <ImagesContainer>
                {recipeDetails.images.map((imageURL, i) => {
                  const key = i;
                  return (
                    <Image
                      key={key}
                      display='inline-block'
                      height='80px'
                      width='calc(33% - 6.5px)'
                      margin-bottom='10px'
                      margin-right='10px'
                      background-image={`url(${imageURL})`}
                      adjust
                    />
                  );
                })}
              </ImagesContainer>
            </Content>
          </CardContainer>
        </SideSection> */}
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
                  alignItems: 'center',
                }}>
                <Text
                  width='60%'
                  font-style='normal'
                  font-weight='bold'
                  font-size='24px'
                  line-height='32px'
                  color='#030F09'>
                  {recipeDetails.name}
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
                {/* <div
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
            </Content>
          </CardContainer>
        </MainSection>
      </Wrapper>
    )) || <div />
  );
}

export default RecipePreview;
