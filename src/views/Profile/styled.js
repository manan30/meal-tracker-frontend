import styled, { css } from 'styled-components';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Text from '../../components/Text';

const Wrapper = styled.section`
  display: flex;
  margin: 0 50px;
  height: calc(100vh - 60px);
  width: calc(100% - 100px);
  overflow: hidden;
`;

const SideSection = styled.section`
  height: calc(100% - 30px);
  width: 30%;
  margin-top: 30px;
  margin-right: 30px;
`;

const MainSection = styled.section`
  height: 100%;
  width: 100%;
  margin-top: 30px;
  overflow: hidden;
`;

const CategoriesContainer = styled.div`
  height: 156px;
  width: 100%;
  margin-top: 20px;
`;

const LineItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;

  :last-child {
    margin-bottom: 0;
  }
`;

const ProfileText = styled(Text)`
  margin-top: ${props => props.marginTop && props.marginTop};
  margin-left: ${props => props.marginLeft && props.marginLeft};
  margin-right: ${props => props.marginRight && props.marginRight};

  font-size: ${props => props.fontSize || '14px'};
  font-weight: ${props => props.fontWeight || 'bold'};
  line-height: ${props => props.lineHeight || '22px'};
  text-align: ${props => props.textAlign && props.textAlign};
  color: ${props => props.color || '#606060'};

  svg {
    display: flex;
    height: 100%;
    width: 100%;
  }
`;

const ProfileCard = styled(Card)`
  display: flex;
  flex-direction: column;
  flex: ${props => props.flex && props.flex};

  width: ${props => props.width || 'calc(100% - 50px)'};
  height: ${props => props.height || '165px'};
  padding: 25px;
  margin-top: ${props => props.marginTop && props.marginTop};
`;

const CarouselCard = styled(ProfileCard)`
  display: inline-block;

  height: 138px;
  width: 155px;
  padding: 0;
  margin-right: 16px;

  cursor: pointer;

  :hover {
    transform: scale(0.9);
    border-radius: 10px;
  }

  :last-child {
    margin-right: 0;
  }
`;

const ProfileRecipesContainer = styled(Card)`
  height: ${props => props.height || 'calc(100% - 136px)'};
  width: calc(100% - 50px);
  margin-top: 16px;
  padding: 25px;

  border-radius: 8px 8px 0 0;
  box-shadow: none;

  overflow: hidden;
  overflow-y: scroll;
`;

const ProfileRecipeCard = styled(ProfileCard)`
  flex-direction: column;
  flex: 0 0 auto;

  height: 300px;
  width: 100%;
  padding: 0;
`;

const ProfileRecipeCardContainer = styled.div`
  display: inline-block;
  width: calc(50% - 12.5px);
  margin-right: 25px;
  margin-bottom: 25px;

  :nth-child(even) {
    margin-right: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection && props.flexDirection};
  justify-content: ${props => props.justifyContent && props.justifyContent};
  align-items: center;
  flex-basis: auto;

  margin-left: ${props => props.marginLeft && props.marginLeft};
  margin-top: ${props => props.marginTop && props.marginTop};
  padding: ${props => props.padding && props.padding};
`;

const ProfileDataContainer = styled.div`
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 0;

  margin-left: 16px;
  margin-top: 4px;
  height: 72px;
`;

const ProfileImage = styled.img`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '70px'};

  border: none;
  border-radius: 8px 8px 0 0;
  background-color: ${props => props.backgroundColor || '#606060'};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ProfileButton = styled(Button)`
  flex-basis: auto;
  flex-grow: ${props => props.flexGrow || '0'};
  flex-shrink: 0;

  height: ${props => props.height && props.height};
  width: ${props => props.width && props.width};
  margin: 0 0 0 auto;
  padding: 0;

  font-style: normal;
  font-weight: bold;
  font-size: ${props => props.fontSize || '16px'};
  line-height: 22px;
  text-align: center;

  border-radius: ${props => props.borderRadius || '4px'};
  border: ${props => props.border && props.border};

  :hover {
    background-color: #30be76;
    color: #ffffff;
  }
`;

export {
  Wrapper,
  SideSection,
  MainSection,
  CategoriesContainer,
  LineItem,
  ProfileText,
  ProfileCard,
  Container,
  ProfileDataContainer,
  ProfileImage,
  ProfileButton,
  CarouselCard,
  ProfileRecipeCard,
  ProfileRecipesContainer,
  ProfileRecipeCardContainer
};
