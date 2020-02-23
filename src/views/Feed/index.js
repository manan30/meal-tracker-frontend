import React, { useEffect, useState } from 'react';
import { getInitialFeed } from '../../api/Feed';
import Button from '../../components/Button';
import Card from '../../components/Card';
import FeedCard from '../../components/FeedCard';
import Text from '../../components/Text';
import { Link } from '../../GlobalStyles';
import { useStore } from '../../Store';
import {
  DataContainer,
  LeftSideSection,
  LineItem,
  MainSection,
  ProfileImage,
  RightSideSection,
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
      <LeftSideSection>
        {state.user.isAuthenticated && (
          <Card
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
          </Card>
        )}
        <Card display='flex' width='calc(100% - 20px)' margin-right='20px'>
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
                <Link to={`/recipe/${recipe.id}`} key={key}>
                  <Text
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
        </Card>
      </LeftSideSection>
      <MainSection>
        <Card
          display='flex'
          width='calc(100% - 50px)'
          height='30px'
          padding='25px'
          align-items='center'>
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
        </Card>
        <Card
          width='calc(100% - 50px)'
          height='calc(100% - 150px)'
          padding='25px'
          margin-top='20px'
          border-radius='8px 8px 0 0'
          overflow-y='scroll'>
          {state.feed.feedRecipes.map(({ user, recipe }, i) => {
            const key = i;
            return <FeedCard key={key} user={user} recipe={recipe} />;
          })}
        </Card>
      </MainSection>
      <RightSideSection>
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
      </RightSideSection>
    </Wrapper>
  );
}

export default Feed;
