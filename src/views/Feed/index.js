import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FiHeart } from 'react-icons/fi';
import { IoIosSearch } from 'react-icons/io';
import { MdClose, MdViewCarousel } from 'react-icons/md';
import { GiChefToque } from 'react-icons/gi';
import { getInitialFeed } from '../../api/Feed';
import Button from '../../components/Button';
import CardContainer from '../../components/Card/styled';
import Text from '../../components/Text';
import { Link } from '../../GlobalStyles';
import { useStore } from '../../Store';
import {
  BottomBar,
  CardImage,
  DataContainer,
  Icon,
  LineItem,
  MainSection,
  ProfileImage,
  SideSection,
  Wrapper,
  CreateRecipeCard as CRCard,
  RecipesList
} from './styled';
import Card from '../../components/Card';

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
      <SideSection>
        {state.user.isAuthenticated && (
          <CardContainer
            width='calc(100% - 20px)'
            height='215px'
            margin-bottom='20px'
            margin-right='20px'>
            <DataContainer display='inline-flex' height='50%'>
              <ProfileImage />
              <div
                style={{
                  marginLeft: '16px',
                  width: 'calc(100% - 86px)'
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
              </div>
            </DataContainer>
            <div
              style={{
                height: '1px',
                backgroundColor: '#E6E6E6',
                borderRadius: '0.5px',
                margin: '-20px 25px 0 25px'
              }}
            />
          </CardContainer>
        )}
        <CardContainer
          display='flex'
          width='calc(100% - 20px)'
          margin-right='20px'>
          <DataContainer>
            <Text
              font-weight='bold'
              font-size='16px'
              line-height='22px'
              color='#030F09'>
              Top 5 recipes for today
            </Text>
            {state.feed.topRecipes.map((recipe, i) => {
              const key = i;
              return (
                <Link to={`/recipe/${recipe.id}`}>
                  <Text
                    key={key}
                    margin-top='16px'
                    font-weight='normal'
                    font-size='14px'
                    line-height='22px'
                    color='#606060'>
                    {recipe.name}
                  </Text>
                </Link>
              );
            })}
          </DataContainer>
        </CardContainer>
      </SideSection>
      <MainSection>
        <CreateRecipeCard />
        <RecipesList>
          {state.feed.feedRecipes.map(({ user, recipe }, i) => {
            const key = i;
            return (
              <CardContainer
                key={key}
                height='400px'
                width='100%'
                margin-bottom='20px'
                box-shadow='0px 6px 20px rgba(13, 51, 32, 0.1)'>
                <div
                  style={{
                    display: 'inline-flex',
                    height: '30px',
                    width: 'calc(100% - 30px)',
                    padding: '15px'
                  }}>
                  <ProfileImage
                    height='32px'
                    width='32px'
                    image={user.profilePicture}
                  />
                  <div
                    style={{
                      marginLeft: '10px',
                      height: '100%'
                    }}>
                    <Link to={`/user/${user.id}`}>
                      <Text
                        font-style='normal'
                        font-weight='normal'
                        font-size='12px'
                        line-height='16px'
                        color='#030F09'>
                        {user.username}
                      </Text>
                    </Link>
                    <Text
                      font-style='normal'
                      font-weight='normal'
                      font-size='12px'
                      line-height='16px'
                      letter-spacing='0.4px'
                      color='#767676'>
                      {user.lastPosted}h ago
                    </Text>
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
                  <Text
                    height='45px'
                    font-style='normal'
                    font-weight='normal'
                    font-size='14px'
                    line-height='22px'
                    color='#A8A8A8'>
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
                    <Link to='/profile'>
                      <Button
                        flex-grow='0'
                        flex-basis='auto'
                        text='Save'
                        height='26px'
                        border='1px solid #30BE76'
                        border-radius='4px'
                        width='72px'
                        font-style='normal'
                        font-weight='bold'
                        font-size='14px'
                        line-height='18px'
                        letter-spacing='0.4px'
                        color='#30BE76'
                      />
                    </Link>
                  </div>
                </div>
              </CardContainer>
            );
          })}
        </RecipesList>
      </MainSection>
      <SideSection>
        <Card
          height='calc(105px - 50px)'
          width='calc(100% - 70px)'
          margin-left='20px'
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
    <CRCard>
      {state.user.isAuthenticated && (
        <Text
          flex-basis='auto'
          flex-grow='1'
          width='80%'
          font-style='normal'
          font-weight='normal'
          font-size='14px'
          line-height='22px'
          color='#030F09'>
          256 followers are online
        </Text>
      )}
      <Button
        flex-basis='auto'
        flex-grow='0'
        height='36px'
        width='128px'
        margin='0'
        font-style='normal'
        font-weight='bold'
        font-size='16px'
        line-height='21px'
        text-align='center'
        color='#ffffff'
        background-color='#30BE76'
        box-shadow='0px 6px 20px rgba(13, 51, 32, 0.1)'
        hover={false}>
        Create Recipe
      </Button>
    </CRCard>
  );
}

function FeedCard({ user, recipe }) {
  const [showModal, setShowModal] = useState(false);

  function handleModalToggle() {
    setShowModal(prevState => !prevState);
  }

  return (
    <CardContainer
      position='relative'
      height='400px'
      width='100%'
      margin-bottom='20px'
      box-shadow='0px 6px 20px rgba(13, 51, 32, 0.1)'>
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
            <Text
              font-style='normal'
              font-weight='normal'
              font-size='12px'
              line-height='16px'
              color='#030F09'>
              {user.username}
            </Text>
          </Link>
          <Text
            font-style='normal'
            font-weight='normal'
            font-size='12px'
            line-height='16px'
            letter-spacing='0.4px'
            color='#767676'>
            {user.lastPosted}h ago
          </Text>
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
        <Text
          height='45px'
          font-style='normal'
          font-weight='normal'
          font-size='14px'
          line-height='22px'
          color='#A8A8A8'>
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
          <Button
            flex-grow='0'
            flex-basis='auto'
            height='26px'
            border='1px solid #30BE76'
            border-radius='4px'
            width='72px'
            font-style='normal'
            font-weight='bold'
            font-size='14px'
            line-height='18px'
            letter-spacing='0.4px'
            color='#30BE76'
            onClick={handleModalToggle}>
            Save
          </Button>
          {/* </Link> */}
        </div>
      </div>
      {/* {showModal && (
        <Modal display='flex' align-items='center' justify-content='center'>
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
        </Modal>
      )} */}
    </CardContainer>
  );
}

FeedCard.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  recipe: PropTypes.objectOf(PropTypes.any)
};

FeedCard.defaultProps = {
  user: {},
  recipe: {}
};

export default Feed;
