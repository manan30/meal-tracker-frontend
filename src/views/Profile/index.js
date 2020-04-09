import PropTypes from 'prop-types';
import React from 'react';
import { FiEdit3, FiLogOut, FiSettings } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import NoRecipes from '../../components/NoRecipes';
import Tabs from '../../components/Tabs';
import UserInfo from '../../components/UserInfo';
import { Link } from '../../GlobalStyles';
import useWindowSize from '../../hooks/useWindowSize';
import { useStore } from '../../Store';
import {
  CarouselCard,
  CategoriesContainer,
  Container,
  LineItem,
  MainSection,
  ProfileButton,
  ProfileCard,
  ProfileImage,
  ProfileRecipeCard,
  ProfileRecipeCardContainer,
  ProfileRecipesContainer,
  ProfileText,
  SideSection,
  Wrapper,
} from './styled';
import { handleLogout } from '../../utils/CommonFunctions';

function DesktopProfileView({ categories, recipes }) {
  return (
    <>
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
      <ProfileRecipesContainer
        height={
          categories.length > 0 ? 'calc(100% - 310px)' : 'calc(100% - 136px)'
        }>
        {recipes.length > 0 ? (
          recipes.map((recipe, i) => {
            const key = i;
            return (
              <ProfileRecipeCardContainer key={key}>
                <ProfileRecipeCard>
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
              </ProfileRecipeCardContainer>
            );
          })
        ) : (
          <NoRecipes text="No Recipes Found. Let's start by adding one" />
        )}
      </ProfileRecipesContainer>
      ;
    </>
  );
}

function Profile() {
  const {
    state: { user },
    dispatch,
  } = useStore();
  const history = useHistory();
  const { width } = useWindowSize();

  return (
    <Wrapper>
      <SideSection>
        <UserInfo />
        <ProfileCard width='auto' height='auto'>
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
          <LineItem onClick={() => handleLogout(history, dispatch)}>
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
        {width < 1024 ? (
          <>
            <UserInfo />
            <Tabs
              tabs={[
                { tag: 'Recipes', component: <>Recipes</> },
                { tag: 'Saved', component: <>Saved</> },
                { tag: 'Following', component: <>Following</> },
              ]}
            />
          </>
        ) : (
          <DesktopProfileView
            categories={user.categories || []}
            recipes={user.recipes}
          />
        )}
      </MainSection>
    </Wrapper>
  );
}

DesktopProfileView.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.any),
  recipes: PropTypes.arrayOf(PropTypes.any),
};

DesktopProfileView.defaultProps = {
  categories: [],
  recipes: [],
};

export default Profile;
