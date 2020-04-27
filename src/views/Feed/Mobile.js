import PropTypes from 'prop-types';
import React from 'react';
import { MdViewCarousel } from 'react-icons/md';
import { IoIosSearch } from 'react-icons/io';
import { GiChefToque } from 'react-icons/gi';
import { getFeedRecipes } from '../../api/Feed';
import InfiniteScroll from '../../components/InfiniteScroll';
import NoRecipes from '../../components/NoRecipes';
import Spinner from '../../components/Spinner';
import { useStore } from '../../Store';
import RecipeListCard from './RecipeListCard';
import {
  BottomBar,
  FeedButton,
  FeedCard,
  FeedText,
  MainSection,
  RecipesList,
  Wrapper,
} from './styled';

function FeedMobile({ recipes }) {
  const { state } = useStore();

  return (
    <Wrapper>
      <MainSection>
        {state.user.isAuthenticated && (
          <FeedCard
            height='30px'
            padding='25px 22px'
            alignItems='center'
            width='calc(100% - 50px)'
            margin='3px 3px 24px 3px'>
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
          height={state.user.isAuthenticated ? 'calc(100% - 105px)' : '100%'}>
          {recipes?.results?.length > 0 ? (
            <InfiniteScroll
              initialItems={recipes}
              itemComponent={RecipeListCard}
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
      <BottomBar>
        <IoIosSearch />
        <MdViewCarousel />
        <GiChefToque />
      </BottomBar>
    </Wrapper>
  );
}

FeedMobile.propTypes = {
  recipes: PropTypes.objectOf(PropTypes.any),
};

FeedMobile.defaultProps = {
  recipes: {},
};

export default FeedMobile;
