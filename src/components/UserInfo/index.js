import React from 'react';
import { useStore } from '../../Store';
import {
  UserInfoCard,
  UserInfoContainer,
  UserInfoDataContainer,
  UserInfoText,
  UserProfileImage,
  Separator,
} from './styled';
import useWindowSize from '../../hooks/useWindowSize';

function UserInfo() {
  const { state } = useStore();
  const { width } = useWindowSize();

  return (
    <UserInfoCard>
      <UserInfoContainer flexDirection='row'>
        <UserProfileImage />
        <UserInfoDataContainer>
          <UserInfoText fontWeight='bold'>
            {`${state.user.firstName} ${state.user.lastName}`}
          </UserInfoText>
          <UserInfoText fontSize='14px' color='#606060'>
            {state.user.title}
          </UserInfoText>
          <UserInfoContainer flexDirection='row' justifyContent='flex-start'>
            <UserInfoText
              fontSize='10px'
              lineHeight='12px'
              marginTop='6px'
              color='#606060'>
              {state.user.followers} followers
            </UserInfoText>
            <UserInfoText
              fontSize=' 12px'
              lineHeight=' 12px'
              marginTop='6px'
              marginLeft='10px'
              color='#606060'>
              |
            </UserInfoText>
            <UserInfoText
              fontSize=' 10px'
              lineHeight=' 12px'
              marginTop='6px'
              marginLeft='10px'
              color='#606060'>
              {state.user.likes} likes
            </UserInfoText>
          </UserInfoContainer>
        </UserInfoDataContainer>
      </UserInfoContainer>
      <Separator />
      {width > 1024 && (
        <UserInfoContainer flexDirection='row' justifyContent='space-between'>
          <UserInfoContainer>
            <UserInfoText fontWeight='bold'>
              {state.user.recipes.length}
            </UserInfoText>
            <UserInfoText fontSize='12px'>Recipes</UserInfoText>
          </UserInfoContainer>
          <UserInfoContainer>
            <UserInfoText fontWeight='bold'>
              {state.user.saved.length}
            </UserInfoText>
            <UserInfoText fontSize='12px'>Saved</UserInfoText>
          </UserInfoContainer>
          <UserInfoContainer>
            <UserInfoText fontWeight='bold'>
              {state.user.following}
            </UserInfoText>
            <UserInfoText fontSize='12px'>Following</UserInfoText>
          </UserInfoContainer>
        </UserInfoContainer>
      )}
    </UserInfoCard>
  );
}

export default UserInfo;
