import React from 'react';
import { Wrapper, SideSection, MainSection } from './styled';
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
          margin-right='20px'
        />
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
