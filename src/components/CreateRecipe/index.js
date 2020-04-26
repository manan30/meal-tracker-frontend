import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { ReactComponent as EditIcon } from '../../assets/img/edit-icon.svg';
import { ReactComponent as PlusIcon } from '../../assets/img/plus-icon.svg';
import useWindowSize from '../../hooks/useWindowSize';
import { CREATE_RECIPE_ITEMS } from '../../utils/Constants';
import {
  BorderedBox,
  Container,
  CreateRecipeCard,
  CreateRecipeCardButton,
  CreateRecipeCardTitle,
  CreateRecipeDropDown,
  CreateRecipeText,
  FormInput,
  Icon,
  ItemContainer,
  ScreenWrapper,
  ScrollContainer,
} from './styled';

function CreateRecipeItem({ header, desc }) {
  return (
    <CreateRecipeCard>
      <CreateRecipeCardTitle>
        <CreateRecipeText fontWeight='bold'>{header}</CreateRecipeText>
        <Icon>
          <EditIcon />
        </Icon>
      </CreateRecipeCardTitle>
      <BorderedBox>
        <Icon marginLeft='16px'>
          <PlusIcon />
        </Icon>
        <CreateRecipeText marginLeft='16px'>{desc}</CreateRecipeText>
      </BorderedBox>
    </CreateRecipeCard>
  );
}

function CreateRecipe({ toggler }) {
  const [transition, setTransition] = useState('enter');
  const { width } = useWindowSize();

  const timeout = () =>
    setTimeout(() => {
      toggler();
    }, 300);

  return (
    <ScreenWrapper transition={transition}>
      <Container transition={transition}>
        <ItemContainer>
          <CreateRecipeText fontSize='20px' fontWeight='bold'>
            Create New Recipe
          </CreateRecipeText>
          <Icon
            onClick={() => {
              setTransition(() => 'exit');
              timeout();
            }}>
            <MdClose />
          </Icon>
        </ItemContainer>
        <ItemContainer>
          <BorderedBox
            height='64px'
            width='64px'
            justifyContent='center'
            marginTop='0'>
            <Icon marginLeft='0'>
              <PlusIcon />
            </Icon>
          </BorderedBox>
          <div style={{ marginLeft: '16px', width: 'calc(100% - 80px)' }}>
            <CreateRecipeText marginBottom='16px' opacity='1' fontWeight='bold'>
              Recipe Name
            </CreateRecipeText>
            <FormInput placeholder='Name of the recipe' type='text' />
          </div>
        </ItemContainer>
        <ScrollContainer>
          {CREATE_RECIPE_ITEMS.map(({ header, desc }, idx) => {
            const key = idx;
            return <CreateRecipeItem key={key} header={header} desc={desc} />;
          })}
        </ScrollContainer>
        <ItemContainer marginBottom='10px'>
          <CreateRecipeText fontWeight='normal'>Save to</CreateRecipeText>
          <CreateRecipeText
            fontWeight='normal'
            marginLeft='auto'
            color='#F8B449'
            displayOnMobile='none'>
            Complete the recipe to post
          </CreateRecipeText>
        </ItemContainer>
        <ItemContainer marginBottom='0'>
          <CreateRecipeDropDown />
          <div style={{ display: 'flex', marginLeft: 'auto' }}>
            <CreateRecipeCardButton>Save Recipe</CreateRecipeCardButton>
            {width > 767 && (
              <CreateRecipeCardButton background='#30be76' color='#ffffff'>
                Post to Feed
              </CreateRecipeCardButton>
            )}
          </div>
        </ItemContainer>
        {width < 768 && (
          <CreateRecipeCardButton
            background='#CCCCCC'
            color='#ffffff'
            border='0px'
            width='calc(100% - 10px)'
            margin='10px 5px 10px 5px'>
            Post to Feed
          </CreateRecipeCardButton>
        )}
      </Container>
    </ScreenWrapper>
  );
}

CreateRecipe.propTypes = {
  toggler: PropTypes.func.isRequired,
};

CreateRecipeItem.propTypes = {
  header: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default CreateRecipe;
