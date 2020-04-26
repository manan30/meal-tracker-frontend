import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';
import { Link } from '../../GlobalStyles';
import { useStore } from '../../Store';
import { parseDate } from '../../utils/CommonFunctions';
import {
  Container,
  FeedButton,
  FeedCard,
  FeedImage,
  FeedText,
  Icon,
} from './styled';

function RecipeListCard({ user, recipe }) {
  const { state } = useStore();
  const [showModal, setShowModal] = useState(false);

  function handleModalToggle() {
    setShowModal((prevState) => !prevState);
  }

  return (
    <FeedCard
      height='400px'
      boxShadow='0px 6px 20px rgba(13, 51, 32, 0.1)'
      flexDirection='column'
      position='relative'
      recipeCard>
      <Container height='45px' flexShrink='0'>
        <FeedImage height='32px' width='32px' src={user.profilePicture || ''} />
        <Container
          flexDirection='column'
          alignItems='flex-start'
          width='100%'
          marginLeft='16px'>
          <Link to={`/user/${user._id || ''}`}>
            <FeedText color='#030F09'>
              {`${user.firstName} ${user.lastName}` || ''}
            </FeedText>
          </Link>
          <FeedText>{parseDate(recipe.createdAt) || ''} ago</FeedText>
        </Container>
      </Container>
      <FeedImage
        height='180px'
        width='100%'
        src={recipe.recipeImage || ''}
        backgroundColor='#606060'
        borderRadius='0'
      />
      <Container
        flexDirection='column'
        alignItems='flex-start'
        marginTop='15px'
        height='100%'>
        <Container width='100%' flexGrow='0'>
          <Link to={`/recipe/${recipe._id || ''}`} width='100%'>
            <FeedText
              fontWeight='600'
              fontSize='18px'
              lineHeight='32px'
              color='#030F09'>
              {recipe.recipeName || ''}
            </FeedText>
          </Link>
          <Icon>
            <FiHeart />
          </Icon>
        </Container>
        <Container
          flexGrow='4'
          width='100%'
          alignItems='flex-start'
          adjustRecipeCardText='true'>
          <FeedText color='#A8A8A8' width='100%'>
            {recipe.recipeDescription || ''}
            ...
          </FeedText>
        </Container>
        <Container marginTop='10px' width='100%' flexGrow='0'>
          <FeedText color='#606060'>{recipe.recipeLikes || '0'} Likes</FeedText>
          <FeedText color='#606060' marginLeft='20px'>
            {recipe.recipeComments || '0'} comments
          </FeedText>
          {/* <Link to='/profile'> */}
          <FeedButton
            height='26px'
            width='72px'
            margin='0 0 0 auto'
            border='1px solid #30BE76'
            borderRadius='4px'
            fontSize='14px'
            hover='true'
            onClick={handleModalToggle}>
            + Save
          </FeedButton>
          {/* </Link> */}
        </Container>
      </Container>
      {showModal && (
        <Modal display='flex' align-items='center' justify-content='center'>
          {state.user.isAuthenticated ? (
            <FeedCard
              flexWrap='wrap'
              flexDirection='column'
              alignItems='center'
              height='254px'
              width='286px'
              padding='11px'
              margin='0'
              backgroundColor='white'>
              <Container height='24px' width='100%'>
                {/* <FeedText
                  marginLeft='7px'
                  fontSize='20px'
                  fontWeight='bold'
                  lineHeight='27px'
                  color='#030F09'>
                  Save to
                </FeedText> */}
                <Icon
                  height='24px'
                  width='24px'
                  margin='0 0 0 auto'
                  color='#030f09'
                  onClick={handleModalToggle}>
                  <MdClose />
                </Icon>
              </Container>
              {/* <Container
                height='206px'
                overflow='none'
                overflowY='scroll'
                flexDirection='column'
                alignItems='flex-start'>
                Feature in progress
              </Container>
              <FeedText
                height='24px'
                marginLeft='9px'
                fontWeight='bold'
                fontSize='16px'
                color='#30BE76'
                cursor='pointer'>
                Add New Cookbook
              </FeedText> */}
              Feature in progress
            </FeedCard>
          ) : (
            <FeedCard
              flexWrap='wrap'
              width='100%'
              margin='20%'
              padding='20px'
              backgroundColor='linear-gradient(to right, #11998e, #38ef7d)'>
              <Container width='100%' alignItems='flex-start'>
                <FeedText
                  fontWeight='bold'
                  fontSize='20px'
                  lineHeight='27px'
                  color='#ffffff'>
                  Login Required
                </FeedText>
                <Icon
                  height='24px'
                  width='24px'
                  margin='0 0 0 auto'
                  color='#ffffff'
                  onClick={handleModalToggle}>
                  <MdClose />
                </Icon>
              </Container>
              <FeedText
                marginTop='16px'
                fontWeight='bold'
                color='#ffffff'
                textAlign='center'>
                It looks like you are not logged in. Please
                <Link to='/login'> login</Link> or
                <Link to='/signup'> signup </Link>
                to continue...
              </FeedText>
            </FeedCard>
          )}
        </Modal>
      )}
    </FeedCard>
  );
}

RecipeListCard.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  recipe: PropTypes.objectOf(PropTypes.any),
};

RecipeListCard.defaultProps = {
  user: {},
  recipe: {},
};

export default RecipeListCard;
