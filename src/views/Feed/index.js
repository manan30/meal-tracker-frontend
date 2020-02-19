import React from 'react';
import {
  Wrapper,
  LeftSideSection,
  MainSection,
  RightSideSection,
  DataContainer,
  ProfileImage,
  LineItem
} from './styled';
import CardContainer from '../../components/Card/styled';
import Text from '../../components/Text';

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
          // height='171px'
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
      <MainSection />
      <RightSideSection />
    </Wrapper>
  );
}

export default Feed;
