import React, { useState } from 'react';
import { FiEdit3, FiLogOut, FiSettings } from 'react-icons/fi';
import { Link } from '../../GlobalStyles';
import Carousel from '../../components/Carousel';
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
  ProfileRecipeCard,
  ProfileRecipesContainer,
  ProfileText,
  CategoriesContainer,
  Separator,
  SideSection,
  Wrapper
} from './styled';

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
        <ProfileCard>
          <Container>
            <ProfileImage width='70px' />
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
        <ProfileCard width='auto' height='auto' marginTop='20px'>
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
          <ProfileText fontSize='32px' lineHeight='32px' color='#030f09'>
            My Recipes
          </ProfileText>
          <ProfileButton>+ Add New</ProfileButton>
        </Container>
        {categories.length > 0 && (
          <CategoriesContainer>
            <Carousel>
              {categories.map((category, i) => {
                /* {new Array(10).fill(0).map((category, i) => { */
                const key = i;
                return (
                  <CarouselCard key={key}>
                    <ProfileImage height='105px' image={category.image} />
                    <ProfileText
                      fontWeight='normal'
                      fontSize=' 16px'
                      textAlign='center'
                      color='#030F09'>
                      {category.name || 'ABCD'}
                    </ProfileText>
                  </CarouselCard>
                );
              })}
            </Carousel>
          </CategoriesContainer>
        )}
        <ProfileRecipesContainer>
          {/* {recipes.map((recipe, i) => { */}
          {new Array(16).fill(0).map((recipe, i) => {
            const key = i;
            return (
              <ProfileRecipeCard key={key}>
                <ProfileImage height='220px' image={recipe.image} />
                <div style={{ height: '60px', padding: '10px 20px' }}>
                  <ProfileText
                    marginLeft='2px'
                    fontWeight='600'
                    fontSize='18px'
                    color='#030F09'>
                    {recipe.name}
                  </ProfileText>
                  <Container marginTop='4px'>
                    <ProfileText fontWeight='normal'>
                      {recipe.mins && `${recipe.mins || 0} mins`}
                    </ProfileText>
                    <ProfileText marginLeft='12px' fontWeight='normal'>
                      {recipe.ingredients &&
                        `${recipe.ingredients || 0} ingredients`}
                    </ProfileText>
                    <Link to={`/recipe/${recipe.id}`} margin-left='auto'>
                      <ProfileButton
                        height='26px'
                        width='96px'
                        fontSize='14px'
                        borderRadius='4px'
                        border='1px solid #30be76'>
                        View
                      </ProfileButton>
                    </Link>
                  </Container>
                </div>
              </ProfileRecipeCard>
            );
          })}
        </ProfileRecipesContainer>
      </MainSection>
    </Wrapper>
  );
}

export default Profile;
