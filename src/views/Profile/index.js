import React from 'react';
import { FiEdit3, FiLogOut, FiSettings } from 'react-icons/fi';
import Button from '../../components/Button';
import CardContainer from '../../components/Card/styled';
import Carousel from '../../components/Carousel';
import HeaderBar from '../../components/HeaderBar';
import Text from '../../components/Text';
import {
  DataContainer,
  LineItem,
  MainSection,
  ProfileImage,
  SelectionContainer,
  SideSection,
  Wrapper
} from './styled';

function Profile() {
  return (
    <>
      <HeaderBar />
      <Wrapper>
        <SideSection>
          <CardContainer
            display='flex'
            width='calc(100% - 20px)'
            height='215px'
            margin-top='50px'
            margin-right='20px'>
            <DataContainer display='inline-flex'>
              <ProfileImage />
              <div
                style={{
                  marginLeft: '16px',
                  width: 'calc(100% - 100px)',
                  height: '60%'
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
                  <div
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
                  />
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
                <div
                  style={{
                    height: '1px',

                    backgroundColor: '#E6E6E6',
                    borderRadius: '0.5px'
                  }}
                />
              </div>
            </DataContainer>
          </CardContainer>
          <CardContainer
            display='flex'
            width='calc(100% - 20px)'
            height='171px'
            margin-top='20px'
            margin-right='20px'>
            <DataContainer>
              <div>
                <LineItem>
                  <Text margin-right='16px'>
                    <FiEdit3 />
                  </Text>
                  <Text
                    font-size='16px'
                    line-height='27px'
                    font-style='normal'
                    font-weight='normal'
                    color='#030F09'>
                    Edit Profile
                  </Text>
                </LineItem>
              </div>
              <div>
                <LineItem>
                  <Text margin-right='16px'>
                    <FiSettings />
                  </Text>
                  <Text
                    font-size='16px'
                    line-height='27px'
                    font-style='normal'
                    font-weight='normal'
                    color='#030F09'>
                    Settings
                  </Text>
                </LineItem>
              </div>
              <div>
                <LineItem>
                  <Text margin-right='16px'>
                    <FiLogOut />
                  </Text>
                  <Text
                    font-size='16px'
                    line-height='27px'
                    font-style='normal'
                    font-weight='normal'
                    color='#030F09'>
                    Log Out
                  </Text>
                </LineItem>
              </div>
            </DataContainer>
          </CardContainer>
        </SideSection>
        <MainSection>
          <Text
            margin-top='50px'
            margin-left='45px'
            font-size='32px'
            line-height='32px'
            color='#030f09'
            display='inline-block'>
            My Recipes
          </Text>
          <Button text='Add' margin-top='50px' float='right' />
          <SelectionContainer>
            <Carousel width='calc(70% - 32px)'>
              {new Array(10).fill(0).map(() => (
                <CardContainer
                  height='155px'
                  width='138px'
                  display='inline-block'
                  // margin-left='16px'
                  marginLeft='16px'
                  margin-right='16px'
                  box-shadow='0px 6px 20px rgba(13, 51, 32, 0.1)'
                />
              ))}
            </Carousel>
          </SelectionContainer>
          <CardContainer
            width='100%'
            height='calc(100% - 285px)'
            margin-top='285px'
            border-radius='8px 8px 0 0'
            overflow-y='scroll'>
            {/* {new Array(50).fill(0).map(() => (
              <div
                style={{
                  height: '16px',
                  width: 'calc(100% - 16px)',
                  padding: '8px',
                  backgroundColor: 'red',
                  marginBottom: '10px'
                }}
              />
            ))} */}
          </CardContainer>
        </MainSection>
      </Wrapper>
    </>
  );
}

export default Profile;
