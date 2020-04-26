import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  MainSection,
  RecipesList,
  FeedButton,
  FeedText,
  FeedCard,
} from './styled';
import { useStore } from '../../Store';
import InfiniteScroll from '../../components/InfiniteScroll';
import Spinner from '../../components/Spinner';
import NoRecipes from '../../components/NoRecipes';
// import BottomBar from '../../components/Bott'

function FeedMobile({ recipes, infiniteScrollCallback, recipeCardComponent }) {
  const { state } = useStore();

  return (
    <Wrapper>
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
          {recipes.length > 0 ? (
            <InfiniteScroll
              initialItems={recipes}
              itemComponent={recipeCardComponent}
              itemComponentProps={['recipe', 'user']}
              loadingComponent={
                <Spinner
                  primaryColor='green'
                  secondaryColor='green'
                  ternaryColor='green'
                />
              }
              callback={infiniteScrollCallback}
            />
          ) : (
            <NoRecipes text='No Recipes Found' />
          )}
        </RecipesList>
      </MainSection>
      {/* <BottomBar>
        <IoIosSearch />
        <MdViewCarousel />
        <GiChefToque />
      </BottomBar> */}
    </Wrapper>
  );
}

FeedMobile.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.any),
  infiniteScrollCallback: PropTypes.func,
  recipeCardComponent: PropTypes.elementType,
};

FeedMobile.defaultProps = {
  recipes: [],
  infiniteScrollCallback: () => {},
  recipeCardComponent: <></>,
};

export default FeedMobile;
