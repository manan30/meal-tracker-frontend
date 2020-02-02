import React from 'react';
import CardContainer from '../../components/Card/styled';
import HeaderBar from '../../components/HeaderBar';
import { MainSection, SideSection, Wrapper } from './styled';

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
