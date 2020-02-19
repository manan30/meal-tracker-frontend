import React from 'react';
import { FiHeart } from 'react-icons/fi';
import Button from '../../components/Button';
import CardContainer from '../../components/Card/styled';
import Text from '../../components/Text';
import {
  DataContainer,
  LeftSideSection,
  LineItem,
  MainSection,
  ProfileImage,
  RightSideSection,
  Wrapper,
  CardImage,
  Icon
} from './styled';

function Feed() {
  return (
    <Wrapper>
      <LeftSideSection>
        <CardContainer
          // display='flex'
          width='calc(100% - 20px)'
          height='215px'
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
                {/* <div
                  style={{
                    display: 'inline',
                    borderRadius: '50%',
                    backgroundColor: '#979797',
                    height: '5px',
                    width: '5px',
                    fontSize: '14px',
                    lineHeight: '22px',
                    margin: '6px 16px 0 16px'
                  }}
                /> */}
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
        <CardContainer
          display='flex'
          width='calc(100% - 20px)'
          margin-top='20px'
          margin-right='20px'>
          <DataContainer>
            <Text
              font-weight='bold'
              font-size='16px'
              line-height='22px'
              color='#030F09'>
              Top 5 recipes for today
            </Text>
            {new Array(5).fill(0).map((_, i) => {
              const key = i;
              return (
                <Text
                  key={key}
                  margin-top='16px'
                  font-weight='normal'
                  font-size='16px'
                  line-height='22px'
                  color='#606060'>
                  Recipe {i}
                </Text>
              );
            })}
          </DataContainer>
        </CardContainer>
      </LeftSideSection>
      <MainSection>
        <CardContainer
          display='inline-flex'
          width='calc(100% - 50px)'
          height='30px'
          padding='25px'
          align-items='center'>
          <Text
            width='80%'
            font-style='normal'
            font-weight='normal'
            font-size='14px'
            line-height='22px'
            color='#030F09'>
            256 followers are online
          </Text>
          <Button
            text='Create Recipe'
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
            hover={false}
          />
        </CardContainer>
        <CardContainer
          width='calc(100% - 50px)'
          height='calc(100% - 150px)'
          padding='25px'
          margin-top='20px'
          border-radius='8px 8px 0 0'
          overflow-y='scroll'>
          {new Array(20).fill(0).map(() => (
            <CardContainer
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
                <ProfileImage height='32px' width='32px' />
                <div
                  style={{
                    marginLeft: '10px',
                    height: '100%',
                    width: 'calc(100% - 45px)'
                  }}>
                  <Text
                    font-style='normal'
                    font-weight='normal'
                    font-size='12px'
                    line-height='16px'
                    color='#030F09'>
                    Manan Joshi
                  </Text>
                  <Text
                    font-style='normal'
                    font-weight='normal'
                    font-size='12px'
                    line-height='16px'
                    letter-spacing='0.4px'
                    color='#767676'>
                    2h ago
                  </Text>
                </div>
              </div>
              <CardImage />
              <div
                style={{
                  margin: '15px',
                  height: 'calc(100% - 270px)',
                  width: 'calc(100% - 30px)'
                }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center'
                  }}>
                  <Text
                    width='100%'
                    font-style='normal'
                    font-weight='600'
                    font-size='18px'
                    line-height='32px'
                    color='#030F09'>
                    Tofu Salad Ginger Garlic
                  </Text>
                  {/* <Icon>
                    <FiHeart />
                  </Icon> */}
                </div>
                <Text
                  font-style='normal'
                  font-weight='normal'
                  font-size='14px'
                  line-height='22px'
                  color='#A8A8A8'>
                  I thought this salad was exceptionally delicious and healthy.
                  I recommend pressing the entire tofu block for at least 20
                  minutes before to remove excess water in the ...
                </Text>
                <div
                  style={{
                    display: 'flex',
                    marginTop: '10px',
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
                    32 Likes
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
                    8 comments
                  </Text>
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
                </div>
              </div>
            </CardContainer>
          ))}
        </CardContainer>
      </MainSection>
      <RightSideSection />
    </Wrapper>
  );
}

export default Feed;
