import styled from 'styled-components';
import Card from '../Card';
import Text from '../Text';

const UserInfoCard = styled(Card)`
  display: flex;
  flex-direction: column;

  width: calc(100% - 50px);
  height: 165px;
  padding: 25px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'column'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: center;
  flex-basis: auto;
`;

const UserProfileImage = styled.img`
  width: 70px;
  height: 70px;

  background: url(${props => props.src && props.src});
  border: none;
  border-radius: 50%;
  background-color: #606060;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const UserInfoDataContainer = styled.div`
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 0;

  margin-left: 16px;
  margin-top: 4px;
  height: 72px;
`;

const UserInfoText = styled(Text)`
  margin-top: ${props => props.marginTop && props.marginTop};
  margin-left: ${props => props.marginLeft && props.marginLeft};
  margin-right: ${props => props.marginRight && props.marginRight};

  font-size: ${props => props.fontSize || '16px'};
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: ${props => props.lineHeight || '22px'};
  text-align: ${props => props.textAlign && props.textAlign};
  color: ${props => props.color || '#030f09'};

  svg {
    display: flex;
    height: 100%;
    width: 100%;
  }
`;

const Separator = styled.div`
  flex-shrink: 0;

  height: 1px;
  width: 100%;
  margin: 20px 0;

  background-color: #e6e6e6;
  border-radius: 0.5px;
`;

export {
  UserInfoCard,
  UserInfoContainer,
  UserProfileImage,
  UserInfoDataContainer,
  UserInfoText,
  Separator
};
