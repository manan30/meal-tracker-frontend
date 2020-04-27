import React from 'react';
import PropTypes from 'prop-types';
import { getFeedRecipes } from '../../api/Feed';
import InfiniteScroll from '../../components/InfiniteScroll';
import NoRecipes from '../../components/NoRecipes';
import Spinner from '../../components/Spinner';
import UserInfo from '../../components/UserInfo';
import { Link } from '../../GlobalStyles';
import { useStore } from '../../Store';
import RecipeListCard from './RecipeListCard';
import {
  Container,
  FeedButton,
  FeedCard,
  FeedText,
  MainSection,
  RecipesList,
  SideSection,
  Wrapper,
} from './styled';

function FeedDesktop({ topRecipes, feedRecipes }) {
  const { state } = useStore();

  return (
    <Wrapper>
      <SideSection marginRight='20px'>
        {state.user.isAuthenticated && <UserInfo />}
        <FeedCard flexDirection='column' height='auto'>
          <FeedText fontWeight='bold' fontSize='16px' color='#030f09'>
            Top 5 recipes for today
          </FeedText>
          {topRecipes.length > 0 ? (
            topRecipes.map((recipe, i) => {
              const key = i;
              return (
                <Link key={key} to={`/recipe/${recipe._id}`}>
                  <FeedText marginTop='16px' color='#606060'>
                    {recipe.recipeName}
                  </FeedText>
                </Link>
              );
            })
          ) : (
            <FeedText marginTop='16px' color='#767676'>
              No top recipes.
            </FeedText>
          )}
        </FeedCard>
      </SideSection>
      <MainSection>
        {state.user.isAuthenticated && (
          <FeedCard
            height='30px'
            padding='25px 22px'
            alignItems='center'
            width='auto'
            adjustDisplay>
            <FeedText color='#030F09' flexGrow='0'>
              {state.user.onlineFollowers || 0} followers are online
            </FeedText>
            <FeedButton
              width='128px'
              margin='0 0 0 auto'
              color='#ffffff'
              bgColor='#30BE76'
              boxShadow='0px 6px 20px rgba(13, 51, 32, 0.1)'>
              Create Recipe
            </FeedButton>
          </FeedCard>
        )}
        <RecipesList
          height={
            state.user.isAuthenticated
              ? 'calc(100% - 150px)'
              : 'calc(100% - 50px)'
          }>
          {feedRecipes.results && feedRecipes.results.length > 0 ? (
            <InfiniteScroll
              initialItems={feedRecipes}
              itemComponent={<RecipeListCard />}
              itemComponentProps={['recipe', 'user']}
              loadingComponent={
                <Spinner
                  primaryColor='green'
                  secondaryColor='green'
                  ternaryColor='green'
                />
              }
              callback={getFeedRecipes}
            />
          ) : (
            <NoRecipes text='No Recipes Found' />
          )}
        </RecipesList>
      </MainSection>
      <SideSection marginLeft='20px'>
        <FeedCard
          flexDirection='column'
          height='calc(105px - 50px)'
          width='auto'>
          <Container>
            <FeedText fontSize='12px' lineHeight='16px'>
              About Sculptor
            </FeedText>
            <FeedText marginLeft='20px' fontSize='12px' line-height='16px'>
              Settings
            </FeedText>
          </Container>
          <FeedText marginTop='24px' fontSize='10px' lineHeight='14px'>
            <span role='img' aria-label='copyright'>
              ©️
            </span>
            sculptor by Manan 2020
          </FeedText>
        </FeedCard>
      </SideSection>
    </Wrapper>
  );
}

FeedDesktop.propTypes = {
  topRecipes: PropTypes.arrayOf(PropTypes.any),
  feedRecipes: PropTypes.arrayOf(PropTypes.any),
};

FeedDesktop.defaultProps = {
  topRecipes: [],
  feedRecipes: [],
};

export default FeedDesktop;
