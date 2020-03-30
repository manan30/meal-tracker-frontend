import React, { useEffect, useState } from 'react';
import { FiEdit3, FiLogOut, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getCategories, getRecipes } from '../../api/User';
import Button from '../../components/Button';
import CardContainer from '../../components/Card/styled';
import Carousel from '../../components/Carousel';
import Text from '../../components/Text';
import {
  DataContainer,
  LineItem,
  MainSection,
  ProfileImage,
  RecipeImage,
  SelectionContainer,
  SideSection,
  Wrapper,
  ProfileText,
  ProfileCard,
  Container,
  ProfileDataContainer,
  Separator
} from './styled';
import { useStore } from '../../Store';

function Profile() {
  const { state } = useStore();
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await getRecipes();
  //     setRecipes(prevState => [...prevState, ...data]);
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await getCategories();
  //     setCategories(prevState => [...prevState, ...data]);
  //   })();
  // }, []);

  return (
    <Wrapper>
      <SideSection>
        <ProfileCard flexDirection='column'>
          <Container>
            <ProfileImage />
            <ProfileDataContainer>
              <ProfileText fontSize='16px' color='#030F09'>
                {`${state.user.firstName} ${state.user.lastName}`}
              </ProfileText>
              <ProfileText>{state.user.title}</ProfileText>
              <Container justifyContent='flex-start'>
                <ProfileText fontSize='10px' lineHeight='12px' marginTop='6px'>
                  {state.user.followers} followers
                </ProfileText>
                <ProfileText
                  fontSize=' 12px'
                  lineHeight=' 12px'
                  marginTop='6px'
                  marginLeft='10px'>
                  |
                </ProfileText>
                <ProfileText
                  fontSize=' 10px'
                  lineHeight=' 12px'
                  marginTop='6px'
                  marginLeft='10px'>
                  {state.user.likes} likes
                </ProfileText>
              </Container>
            </ProfileDataContainer>
          </Container>
          <Separator />
          <Container justifyContent='space-between'>
            <Container justifyContent='center' flexDirection='column'>
              <ProfileText fontSize='16px' color='#030f09'>
                {state.user.recipes.length}
              </ProfileText>
              <ProfileText fontSize='12px' color='#030f09'>
                Recipes
              </ProfileText>
            </Container>
            <Container justifyContent='center' flexDirection='column'>
              <ProfileText fontSize='16px' color='#030f09'>
                {state.user.saved.length}
              </ProfileText>
              <ProfileText fontSize='12px' color='#030f09'>
                Saved
              </ProfileText>
            </Container>
            <Container justifyContent='center' flexDirection='column'>
              <ProfileText fontSize='16px' color='#030f09'>
                {state.user.following}
              </ProfileText>
              <ProfileText fontSize='12px' color='#030f09'>
                Following
              </ProfileText>
            </Container>
          </Container>
        </ProfileCard>
        <ProfileCard
          width='auto'
          height='auto'
          marginTop='20px'
          flexDirection='column'>
          <LineItem>
            <ProfileText marginRight='8px'>
              <FiEdit3 />
            </ProfileText>
            <ProfileText fontWeight='normal' color='#030F09'>
              Edit Profile
            </ProfileText>
          </LineItem>
          <LineItem>
            <ProfileText marginRight='8px'>
              <FiSettings />
            </ProfileText>
            <ProfileText fontWeight='normal' color='#030F09'>
              Settings
            </ProfileText>
          </LineItem>
          <LineItem>
            <ProfileText marginRight='8px'>
              <FiLogOut />
            </ProfileText>
            <ProfileText fontWeight='normal' color='#030F09'>
              Log Out
            </ProfileText>
          </LineItem>
        </ProfileCard>
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
                  <Link to={`/recipe/${recipe.id}`}>
                    <Button
                      text='View'
                      float='right'
                      height='26px'
                      width='96px'
                      margin-right='22px'
                      font-size='14px'
                      line-height='12px'
                      letter-spacing=' 0.4px'
                      border-radius='4px'
                    />
                  </Link>
                </div>
              </CardContainer>
            );
          })}
        </CardContainer>
      </MainSection>
    </Wrapper>
  );
}

export default Profile;
