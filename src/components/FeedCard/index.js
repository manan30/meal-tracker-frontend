import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { ProfileImage, CardImage, Icon } from '../../views/Feed/styled';
import { Link } from '../../GlobalStyles';
import Text from '../Text';
import CardContainer from '../Card/styled';
import Button from '../Button';
import Modal from '../Modal';

function FeedCard({ user, recipe }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <CardContainer
      position='relative'
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
        <ProfileImage height='32px' width='32px' image={user.profilePicture} />
        <div
          style={{
            marginLeft: '10px',
            height: '100%'
          }}>
          <Link to={`/user/${user.id}`}>
            <Text
              font-style='normal'
              font-weight='normal'
              font-size='12px'
              line-height='16px'
              color='#030F09'>
              {user.username}
            </Text>
          </Link>
          <Text
            font-style='normal'
            font-weight='normal'
            font-size='12px'
            line-height='16px'
            letter-spacing='0.4px'
            color='#767676'>
            {user.lastPosted}h ago
          </Text>
        </div>
      </div>
      <CardImage image={recipe.recipeImage} />
      <div
        style={{
          margin: '15px',
          height: 'calc(100% - 270px)',
          width: 'calc(100% - 30px)'
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center'
          }}>
          <Link to={`/recipe/${recipe.id}`} width='100%'>
            <Text
              flex-basis='auto'
              flex-grow='1'
              width='100%'
              font-style='normal'
              font-weight='600'
              font-size='18px'
              line-height='32px'
              color='#030F09'>
              {recipe.recipeName}
            </Text>
          </Link>
          <Icon>
            <FiHeart />
          </Icon>
        </div>
        <Text
          height='45px'
          font-style='normal'
          font-weight='normal'
          font-size='14px'
          line-height='22px'
          color='#A8A8A8'>
          {recipe.recipeDesc}
          ...
        </Text>
        <div
          style={{
            display: 'flex',
            marginTop: '20px',
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
            {recipe.likes} Likes
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
            {recipe.comments} comments
          </Text>
          {/* <Link to='/profile'> */}
          <Button
            flex-grow='0'
            flex-basis='auto'
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
            onClick={() => setShowModal(!showModal)}>
            Save
          </Button>
          {/* </Link> */}
        </div>
      </div>
      {showModal && <Modal />}
    </CardContainer>
  );
}

export default FeedCard;
