import React, { useEffect, useState } from 'react';
import { FiEdit3, FiLogOut, FiSettings } from 'react-icons/fi';
import { getCategories, getRecipes } from '../../api/User';
import Button from '../../components/Button';
import CardContainer from '../../components/Card/styled';
import Carousel from '../../components/Carousel';
import HeaderBar from '../../components/HeaderBar';
import Text from '../../components/Text';
import {
  DataContainer,
  LineItem,
  MainSection,
  ProfileImage,
  RecipeImage,
  SelectionContainer,
  SideSection,
  Wrapper
} from './styled';

function Profile() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getRecipes();
      setRecipes(prevState => [...prevState, ...data.recipes]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await getCategories();
      setCategories(prevState => [...prevState, ...data.categories]);
    })();
  }, []);

  return (
    <>
      <HeaderBar />
      <Wrapper>
        <SideSection>
          <CardContainer
            display='flex'
            width='calc(100% - 20px)'
            height='215px'
            margin-top='50px'
            margin-right='20px'>
            <DataContainer display='inline-flex' height='50%' width='100%'>
              <ProfileImage />
              <div
                style={{
                  marginLeft: '16px',
                  width: 'calc(100% - 100px)'
                }}>
                <Text
                  font-style='normal'
                  font-weight='bold'
                  font-size='16px'
                  line-height='22px'>
                  Manan Joshi
                </Text>
                <Text
                  font-style='normal'
                  font-weight='normal'
                  font-size='14px'
                  line-height='22px'
                  color='#606060'>
                  Aspiring Chef
                </Text>
                <LineItem>
                  <Text
                    font-style='normal'
                    font-weight='normal'
                    font-size=' 14px'
                    line-height=' 22px'
                    color=' #606060'
                    margin-top='6px'>
                    500 followers
                  </Text>
                  <div
                    style={{
                      display: 'inline',
                      borderRadius: '50%',
                      backgroundColor: '#979797',
                      height: '5px',
                      width: '5px',
                      fontSize: '14px',
                      lineHeight: '22px',
                      margin: '6px 16px 0 16px'
                    }}
                  />
                  <Text
                    font-style='normal'
                    font-weight='normal'
                    font-size=' 14px'
                    line-height=' 22px'
                    color=' #606060'
                    margin-top='6px'>
                    23k likes
                  </Text>
                </LineItem>
                <div
                  style={{
                    height: '1px',
                    backgroundColor: '#E6E6E6',
                    borderRadius: '0.5px'
                  }}
                />
              </div>
            </DataContainer>
          </CardContainer>
          <CardContainer
            display='flex'
            width='calc(100% - 20px)'
            height='171px'
            margin-top='20px'
            margin-right='20px'>
            <DataContainer>
              <div>
                <LineItem>
                  <Text margin-right='16px'>
                    <FiEdit3 />
                  </Text>
                  <Text
                    font-size='16px'
                    line-height='27px'
                    font-style='normal'
                    font-weight='normal'
                    color='#030F09'>
                    Edit Profile
                  </Text>
                </LineItem>
              </div>
              <div>
                <LineItem>
                  <Text margin-right='16px'>
                    <FiSettings />
                  </Text>
                  <Text
                    font-size='16px'
                    line-height='27px'
                    font-style='normal'
                    font-weight='normal'
                    color='#030F09'>
                    Settings
                  </Text>
                </LineItem>
              </div>
              <div>
                <LineItem>
                  <Text margin-right='16px'>
                    <FiLogOut />
                  </Text>
                  <Text
                    font-size='16px'
                    line-height='27px'
                    font-style='normal'
                    font-weight='normal'
                    color='#030F09'>
                    Log Out
                  </Text>
                </LineItem>
              </div>
            </DataContainer>
          </CardContainer>
        </SideSection>
        <MainSection>
          <Text
            margin-top='50px'
            margin-left='45px'
            font-size='32px'
            line-height='32px'
            color='#030f09'
            display='inline-block'>
            My Recipes
          </Text>
          <Button text='Add' margin-top='50px' float='right' />
          <SelectionContainer>
            <Carousel width='calc(70% - 32px)'>
              {categories.map((category, i) => {
                const key = i;
                return (
                  <CardContainer
                    key={key}
                    height='138px'
                    width='155px'
                    display='inline-block'
                    marginLeft='16px'
                    margin-right='16px'
                    box-shadow='2px 4px 10px rgba(13, 51, 32, 0.1)'
                    cursor='pointer'
                    hover>
                    <RecipeImage height='105px' image={category.image} />
                    <Text
                      font-style='normal'
                      font-weight='normal'
                      font-size=' 16px'
                      line-height=' 22px'
                      text-align='center'
                      color='#030F09'
                      margin-top='6px'>
                      {category.name}
                    </Text>
                  </CardContainer>
                );
              })}
            </Carousel>
          </SelectionContainer>
          <CardContainer
            width='calc(100% - 50px)'
            height='calc(100% - 415px)'
            margin-top='285px'
            border-radius='8px 8px 0 0'
            overflow-y='scroll'
            padding='25px'>
            {recipes.map((recipe, i) => {
              const key = i;
              return (
                <CardContainer
                  key={key}
                  height='320px'
                  width='calc(50% - 25px)'
                  background='white'
                  margin-bottom='25px'
                  display='inline-block'
                  box-shadow='2px 4px 10px rgba(13, 51, 32, 0.1)'
                  deduct>
                  <RecipeImage height='220px' image={recipe.image} />
                  <Text
                    margin-left='22px'
                    margin-top='16px'
                    font-weight='600'
                    font-size='18px'
                    line-height=' 32px'
                    color='#030F09'>
                    {recipe.name}
                  </Text>
                  <div
                    style={{
                      marginTop: '13px',
                      marginLeft: '22px',
                      alignItems: 'center'
                    }}>
                    <Text
                      display='inline-block'
                      font-style='normal'
                      font-weight='normal'
                      font-size=' 14px'
                      line-height='22px'
                      color='#606060'>{`${recipe.mins} mins`}</Text>
                    <Text
                      display='inline-block'
                      font-style='normal'
                      font-weight='normal'
                      font-size=' 14px'
                      line-height='22px'
                      margin-left='24px'
                      color='#606060'>{`${recipe.ingredients} ingredients`}</Text>
                    <Button
                      text='Cook'
                      float='right'
                      height='26px'
                      width='96px'
                      margin-right='22px'
                      font-size='14px'
                      line-height='12px'
                      letter-spacing=' 0.4px'
                      border-radius='4px'
                    />
                  </div>
                </CardContainer>
              );
            })}
          </CardContainer>
        </MainSection>
      </Wrapper>
    </>
  );
}

export default Profile;
