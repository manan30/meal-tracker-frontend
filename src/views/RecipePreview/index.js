import React from 'react';
import {
  Wrapper,
  SideSection,
  MainSection,
  Content,
  Image,
  ImagesContainer
} from './styled';
import CardContainer from '../../components/Card/styled';

function RecipePreview() {
  return (
    <Wrapper>
      <SideSection>
        <CardContainer
          display='flex'
          width='calc(100% - 20px)'
          height='380px'
          margin-top='50px'
          margin-right='20px'>
          <Content>
            <Image
              height='150px'
              width='100%'
              background-color='red'
              margin-bottom='10px'
            />
            <ImagesContainer>
              {new Array(21).fill(0).map(() => (
                <Image
                  display='inline-block'
                  height='80px'
                  width='calc(33% - 6.5px)'
                  margin-bottom='10px'
                  margin-right='10px'
                  adjust
                />
              ))}
            </ImagesContainer>
          </Content>
        </CardContainer>
      </SideSection>
      <MainSection>
        <CardContainer
          display='flex'
          width='100%'
          height='calc(25% - 20px)'
          margin-top='50px'
          margin-right='20px'
        />
        <CardContainer
          display='flex'
          width='100%'
          height='calc(50% - 50px)'
          margin-top='20px'
          margin-right='20px'
        />
        <CardContainer
          display='flex'
          width='100%'
          height='calc(25% - 50px)'
          margin-top='20px'
          margin-right='20px'
          margin-bottom='30px'
        />
      </MainSection>
    </Wrapper>
  );
}

export default RecipePreview;
