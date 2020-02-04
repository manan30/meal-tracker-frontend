import React from 'react';
import Button from '../../components/Button';
import CardContainer from '../../components/Card/styled';
import Carousel from '../../components/Carousel';
import HeaderBar from '../../components/HeaderBar';
import { MainSection, SelectionContainer, SideSection, Wrapper } from './styled';

function Profile() {
  return (
    <>
      <HeaderBar />
      <Wrapper>
        <SideSection>
          <CardContainer
            width='calc(100% - 20px)'
            height='215px'
            margin-top='50px'
            margin-right='20px'
          />
          <CardContainer
            width='calc(100% - 20px)'
            height='171px'
            margin-top='20px'
            margin-right='20px'
          />
        </SideSection>
        <MainSection>
          <Button text='Add' margin-top='50px' float='right' />
          <SelectionContainer>
            <Carousel marginRight='16px'>
              {new Array(10).fill(0).map(() => (
                <CardContainer
                  height='155px'
                  width='138px'
                  display='inline-block'
                  margin-left='16px'
                  marginRight='16px'
                  background-color='#ffffff'
                  box-shadow='0px 6px 20px rgba(13, 51, 32, 0.1)'
                />
              ))}
            </Carousel>
          </SelectionContainer>
          <CardContainer
            width='100%'
            height='calc(100% - 285px)'
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
