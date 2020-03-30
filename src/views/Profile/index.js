import React, { useState } from 'react';
import { FiEdit3, FiLogOut, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import Text from '../../components/Text';
import { useStore } from '../../Store';
import {
  CarouselCard,
  Container,
  LineItem,
  MainSection,
  ProfileButton,
  ProfileCard,
  ProfileDataContainer,
  ProfileImage,
  ProfileText,
  RecipeImage,
  SelectionContainer,
  Separator,
  SideSection,
  Wrapper,
  ProfileRecipeCard
} from './styled';

function Profile() {
  const { state } = useStore();
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([1]);

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
        <Container>
          <ProfileText
            marginLeft='16px'
            fontSize='32px'
            lineHeight='32px'
            color='#030f09'>
            My Recipes
          </ProfileText>
          <ProfileButton>+ Add New</ProfileButton>
        </Container>
        {/* {categories.length > 0 && ( */}
        <SelectionContainer>
          <Carousel>
            {/* {categories.map((category, i) => { */}
            {new Array(10).fill(0).map((category, i) => {
              const key = i;
              return (
                <CarouselCard key={key}>
                  <RecipeImage height='105px' image={category.image} />
                  <ProfileText
                    fontWeight='normal'
                    fontSize=' 16px'
                    textAlign='center'
                    color='#030F09'
                    marginTop='6px'>
                    {category.name || 'ABCD'}
                  </ProfileText>
                </CarouselCard>
              );
            })}
          </Carousel>
        </SelectionContainer>
        {/* )} */}
        <ProfileCard
          height={
            categories.length > 0 ? 'calc(100% - 250px)' : 'calc(100% - 136px)'
          }
          margin='20px 0 0 0'
          borderRadius='8px 8px 0 0'
          overflowY='scroll'
          padding='25px'
          flexWrap='wrap'
          justifyContent='true'>
          {/* {recipes.map((recipe, i) => { */}
          {new Array(15).fill(0).map((recipe, i) => {
            const key = i;
            return (
              <ProfileRecipeCard key={key}>
                <RecipeImage height='220px' image={recipe.image} />
                <ProfileText
                  marginLeft='22px'
                  marginTop='16px'
                  fontWeight='600'
                  fontSize='18px'
                  color='#030F09'>
                  {recipe.name || 'Abcd'}
                </ProfileText>
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
                    color='#606060'>{`${recipe.mins || 0} mins`}</Text>
                  <Text
                    display='inline-block'
                    font-style='normal'
                    font-weight='normal'
                    font-size=' 14px'
                    line-height='22px'
                    margin-left='24px'
                    color='#606060'>{`${recipe.ingredients ||
                    0} ingredients`}</Text>
                  <Link to={`/recipe/${recipe.id}`}>
                    <ProfileButton
                      text='View'
                      float='right'
                      height='26px'
                      width='96px'
                      margin-right='22px'
                      font-size='14px'
                      line-height='12px'
                      letter-spacing=' 0.4px'
                      border-radius='4px'>
                      View
                    </ProfileButton>
                  </Link>
                </div>
              </ProfileRecipeCard>
            );
          })}
        </ProfileCard>
      </MainSection>
    </Wrapper>
  );
}

export default Profile;
