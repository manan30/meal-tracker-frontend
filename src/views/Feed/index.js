import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { GiChefToque } from 'react-icons/gi';
import { IoIosSearch } from 'react-icons/io';
import { MdClose, MdViewCarousel } from 'react-icons/md';
import { getInitialFeed } from '../../api/Feed';
import { ReactComponent as NoRecipeIcon } from '../../assets/img/no-recipes.svg';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import Text from '../../components/Text';
import { Link } from '../../GlobalStyles';
import { useStore } from '../../Store';
import {
  BottomBar,
  CardImage,
  Container,
  CookBookSelection,
  FeedButton,
  FeedCard,
  FeedText,
  Icon,
  ListCard,
  MainSection,
  NoRecipes,
  ProfileDataContainer,
  ProfileImage,
  RecipesList,
  Separator,
  SideSection,
  Wrapper
} from './styled';

function Feed() {
  const { state, dispatch } = useStore();

  useEffect(() => {
    (async function fetchFeedData() {
      try {
        const { data } = await getInitialFeed();
        dispatch({ type: 'SET_FEED', payload: data });
      } catch (e) {
        dispatch({ type: 'ERROR', payload: [] });
      }
    })();
  }, [dispatch]);

  return (
    <Wrapper>
      <SideSection marginRight='20px'>
        {state.user.isAuthenticated && (
          <FeedCard flexDirection='column'>
            <Container>
              <ProfileImage backgroundColor='#606060' />
              <ProfileDataContainer>
                <FeedText fontWeight='bold' font-size='16px' color='#030F09'>
                  {state.user.firstName} {state.user.lastName}
                </FeedText>
                <FeedText color='#606060'>{state.user.title}</FeedText>
                <Container justifyContent='flex-start'>
                  <FeedText
                    fontSize=' 10px'
                    lineHeight=' 12px'
                    color=' #606060'
                    marginTop='6px'>
                    {state.user.followers} followers
                  </FeedText>
                  <FeedText
                    fontSize=' 12px'
                    lineHeight=' 12px'
                    color=' #606060'
                    marginTop='6px'
                    marginLeft='10px'>
                    |
                  </FeedText>
                  <FeedText
                    fontSize=' 10px'
                    lineHeight=' 12px'
                    color=' #606060'
                    marginTop='6px'
                    marginLeft='10px'>
                    {state.user.likes} likes
                  </FeedText>
                </Container>
              </ProfileDataContainer>
            </Container>
            <Separator />
            <Container justifyContent='space-between'>
              <Container justifyContent='center' flexDirection='column'>
                <FeedText fontWeight='bold' fontSize='16px' color='#030f09'>
                  20
                </FeedText>
                <FeedText fontSize='12px' color='#030f09'>
                  Recipes
                </FeedText>
              </Container>
              <Container justifyContent='center' flexDirection='column'>
                <FeedText fontWeight='bold' fontSize='16px' color='#030f09'>
                  20
                </FeedText>
                <FeedText fontSize='12px' color='#030f09'>
                  Recipes
                </FeedText>
              </Container>
              <Container justifyContent='center' flexDirection='column'>
                <FeedText fontWeight='bold' fontSize='16px' color='#030f09'>
                  20
                </FeedText>
                <FeedText fontSize='12px' color='#030f09'>
                  Recipes
                </FeedText>
              </Container>
            </Container>
          </FeedCard>
        )}
        <FeedCard>
          <FeedText fontWeight='bold' fontSize='16px' color='#030f09'>
            Top 5 recipes for today
          </FeedText>
          {state.feed.topRecipes.length > 0 ? (
            state.feed.topRecipes.map((recipe, i) => {
              const key = i;
              return (
                <Link key={key} to={`/recipe/${recipe.id}`}>
                  <FeedText marginTop='16px' color='#606060'>
                    New recipe: {recipe.name}
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
        <CreateRecipeCard />
        <RecipesList>
          {state.feed.feedRecipes.length > 0 ? (
            state.feed.feedRecipes.map(({ user, recipe }, i) => {
              const key = i;
              return <RecipeListCard key={key} recipe={recipe} user={user} />;
            })
          ) : (
            <NoRecipes>
              <NoRecipeIcon />
              <FeedText fontSize='21px' color='#767676' marginTop='24px'>
                No recipes found
              </FeedText>
            </NoRecipes>
          )}
        </RecipesList>
      </MainSection>
      <SideSection marginLeft='20px'>
        <Card
          height='calc(105px - 50px)'
          width='calc(100% - 70px)'
          padding='25px'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Text
              flex-basis='auto'
              flex-grow='0'
              font-size='12px'
              font-weight='normal'
              line-height='16px'
              letter-spacing='0.4px'
              color='#767676'>
              About Sculptor
            </Text>
            <Text
              flex-basis='auto'
              flex-grow='1'
              margin-left='20px'
              font-size='12px'
              font-weight='normal'
              line-height='16px'
              letter-spacing='0.4px'
              color='#767676'>
              Settings
            </Text>
          </div>
          <Text
            margin-top='24px'
            font-weight='normal'
            font-size='10px'
            line-height='14px'
            letter-spacing='0.3px'
            color='#767676'>
            <span role='img' aria-label='copyright'>
              ©️
            </span>
            sculptor by Manan 2020
          </Text>
        </Card>
      </SideSection>
      <BottomBar>
        <IoIosSearch />
        <MdViewCarousel />
        <GiChefToque />
      </BottomBar>
    </Wrapper>
  );
}

function CreateRecipeCard() {
  const { state } = useStore();

  return (
    <FeedCard height='30px' alignItems='center' adjustDisplay>
      {state.user.isAuthenticated && (
        <FeedText width='80%' color='#030F09'>
          256 followers are online
        </FeedText>
      )}
      <FeedButton
        width='128px'
        margin='0'
        color='#ffffff'
        bgColor='#30BE76'
        boxShadow='0px 6px 20px rgba(13, 51, 32, 0.1)'
        hover={false}>
        Create Recipe
      </FeedButton>
    </FeedCard>
  );
}

function RecipeListCard({ user, recipe }) {
  const { state } = useStore();
  const [showModal, setShowModal] = useState(false);

  function handleModalToggle() {
    setShowModal(prevState => !prevState);
  }

  return (
    <ListCard>
      <div
        style={{
          display: 'inline-flex',
          height: '30px',
          width: 'calc(100% - 30px)',
          padding: '15px'
        }}>
        <ProfileImage height='32px' width='32px' image={user.profilePicture} />
        <div
          style={{
            marginLeft: '10px',
            height: '100%'
          }}>
          <Link to={`/user/${user.id}`}>
            <FeedText color='#030F09'>{user.username}</FeedText>
          </Link>
          <FeedText>{user.lastPosted}h ago</FeedText>
        </div>
      </div>
      <CardImage image={recipe.recipeImage} />
      <div
        style={{
          margin: '15px',
          height: 'calc(100% - 270px)',
          width: 'calc(100% - 30px)'
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center'
          }}>
          <Link to={`/recipe/${recipe.id}`} width='100%'>
            <Text
              flex-basis='auto'
              flex-grow='1'
              width='100%'
              font-style='normal'
              font-weight='600'
              font-size='18px'
              line-height='32px'
              color='#030F09'>
              {recipe.recipeName}
            </Text>
          </Link>
          <Icon>
            <FiHeart />
          </Icon>
        </div>
        <Text height='45px' color='#A8A8A8'>
          {recipe.recipeDesc}
          ...
        </Text>
        <div
          style={{
            display: 'flex',
            marginTop: '20px',
            alignItems: 'center'
          }}>
          <Text
            flex-grow='0'
            flex-basis='auto'
            font-style='normal'
            font-weight='normal'
            font-size='14px'
            line-height='22px'
            color='#606060'>
            {recipe.likes} Likes
          </Text>
          <Text
            flex-grow='1'
            flex-basis='auto'
            margin-left='20px'
            font-style='normal'
            font-weight='normal'
            font-size='14px'
            line-height='22px'
            color='#606060'>
            {recipe.comments} comments
          </Text>
          {/* <Link to='/profile'> */}
          <FeedButton
            height='26px'
            border='1px solid #30BE76'
            border-radius='4px'
            width='72px'
            fontSize='14px'
            color='#30BE76'
            onClick={handleModalToggle}>
            Save
          </FeedButton>
          {/* </Link> */}
        </div>
      </div>
      {showModal && (
        <Modal display='flex' align-items='center' justify-content='center'>
          {state.user.isAuthenticated ? (
            <Card
              display='flex'
              flex-wrap='wrap'
              flex-direction='column'
              height='254px'
              width='286px'
              padding='11px'
              background-color='white'>
              <div
                style={{
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                <Text
                  margin-left='7px'
                  font-size='20px'
                  font-weight='bold'
                  line-height='27px'
                  color='#030F09'
                  flex-basis='auto'
                  flex-grow='2'>
                  Save to
                </Text>
                <Icon
                  height='24px'
                  width='24px'
                  color='#ffffff'
                  onClick={handleModalToggle}>
                  <MdClose />
                </Icon>
              </div>
              <div
                style={{
                  height: '206px',
                  overflow: 'none',
                  overflowY: 'scroll'
                }}>
                {new Array(10).fill(0).map((_, i) => (
                  <CookBookSelection>{`Cookbook ${i}`}</CookBookSelection>
                ))}
              </div>
              <Text
                height='24px'
                margin-left='9px'
                font-weight='bold'
                font-size='16px'
                line-height='22px'
                letter-spacing='0.32px'
                color='#30BE76'>
                Add New Cookbook
              </Text>
            </Card>
          ) : (
            <Card
              display='flex'
              flex-wrap='wrap'
              width='100%'
              margin='20%'
              padding='20px'
              background-color='white'
              background='linear-gradient(to right, #11998e, #38ef7d)'>
              <Text
                flex-basis='auto'
                flex-grow='2'
                font-style='normal'
                font-weight='bold'
                font-size='20px'
                line-height='27px'
                color='#ffffff'>
                Login Required
              </Text>
              <Icon
                flex-basis='auto'
                flex-grow='0'
                height='24px'
                width='24px'
                float='right'
                color='#ffffff'
                onClick={handleModalToggle}>
                <MdClose />
              </Icon>
              <Text
                width='100%'
                margin-top='16px'
                font-style='normal'
                font-weight='bold'
                font-size='14px'
                line-height='21px'
                text-align='center'
                color='#ffffff'>
                It looks like you are not logged in. Please
                <Link to='/login'> login</Link> or
                <Link to='/signup'> signup </Link>
                to continue...
              </Text>
            </Card>
          )}
        </Modal>
      )}
    </ListCard>
  );
}

RecipeListCard.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  recipe: PropTypes.objectOf(PropTypes.any)
};

RecipeListCard.defaultProps = {
  user: {},
  recipe: {}
};

export default Feed;

// TODO: Fetch feed only after certain time period
