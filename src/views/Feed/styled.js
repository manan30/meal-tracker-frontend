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

  @media screen and (max-width: 640px) {
    margin: 0 25px;
    width: calc(100% - 50px);
  }
`;

const SideSection = styled.section`
  height: calc(100% - 30px);
  width: 25%;
  margin-top: 30px;
  overflow: hidden;
  margin-left: ${({ marginLeft }) => marginLeft && marginLeft};
  margin-right: ${({ marginRight }) => marginRight && marginRight};

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const MainSection = styled.section`
  height: calc(100% - 30px);
  width: 50%;
  margin-top: 30px;
  overflow: hidden;

  @media screen and (max-width: 640px) {
    width: 100%;
    height: calc(100% - 100px);
  }
`;

const BottomBar = styled.section`
  display: none;

  @media screen and (max-width: 640px) {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(72px - 60px);
    width: calc(100% - 100px);
    padding: 30px 50px;
    background-color: #ffffff;
    box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.1);
    color: #363837;

    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

const FeedCard = styled(Card)`
  position: ${props => props.position && props.position};

  display: flex;
  flex-direction: ${props => props.flexDirection && props.flexDirection};
  flex-wrap: ${props => props.flexWrap && props.flexWrap};
  align-items: ${props => props.alignItems && props.alignItems};

  width: ${props => props.width || 'calc(100% - 50px)'};
  height: ${props => props.height || '165px'};
  padding: ${props => props.padding || '25px'};
  margin-bottom: 20px;
  margin: ${props => props.margin && props.margin};

  box-shadow: ${props => props.boxShadow && props.boxShadow};
  background: ${props => props.backgroundColor && props.backgroundColor};

  ${props =>
    props.adjustDisplay &&
    css`
      @media screen and (max-width: 640px) {
        display: none;
      }
    `};

  ${props =>
    props.recipeCard &&
    css`
      @media screen and (max-width: 640px) {
        width: calc(100% - 52px);
        box-shadow: none;
        border: 1px solid #cccccc;
      }
    `}
`;

const FeedButton = styled(Button)`
  flex-basis: auto;
  flex-grow: ${props => props.flexGrow || '0'};
  flex-shrink: 0;

  height: ${props => props.height && props.height};
  width: ${props => props.width && props.width};
  margin: ${props => props.margin && props.margin};
  padding: 0;

  font-style: normal;
  font-weight: bold;
  font-size: ${props => props.fontSize || '16px'};
  line-height: 22px;
  text-align: center;

  background-color: ${props => props.bgColor && props.bgColor};
  color: ${props => props.color && props.color};
  box-shadow: ${props => props.boxShadow && props.boxShadow};
  border: ${props => props.border && props.border};

  ${props =>
    props.hover &&
    css`
      :hover {
        background-color: #30be76;
        color: #ffffff;
      }
    `}
`;

const FeedText = styled(Text)`
  flex-basis: auto;
  flex-grow: ${props => props.flexGrow && props.flexGrow};

  height: ${props => props.height && props.height};
  width: ${props => props.width && props.width};
  margin-top: ${props => props.marginTop && props.marginTop};
  margin-left: ${props => props.marginLeft && props.marginLeft};

  font-weight: ${props => props.fontWeight || 'normal'};
  font-size: ${props => props.fontSize || '14px'};
  line-height: ${props => props.lineHeight || '22px'};
  letter-spacing: 0.4px;
  text-align: ${props => props.textAlign && props.textAlign};
  color: ${props => props.color || '#767676'};
  cursor: ${props => props.cursor && props.cursor};

  ${props =>
    props.cookBookSelection &&
    css`
      padding: 8px;
      width: calc(100% - 16px);

      :last-child {
        margin-bottom: 8px;
      }

      :hover {
        background: #d6f2e4;
        border-radius: 8px;
      }
    `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection && props.flexDirection};
  justify-content: ${props => props.justifyContent && props.justifyContent};
  align-items: ${props => props.alignItems || 'center'};
  flex-basis: auto;
  flex-grow: ${props => props.flexGrow && props.flexGrow};
  flex-shrink: ${props => props.flexShrink && props.flexShrink};

  height: ${props => props.height && props.height};
  width: ${props => props.width && props.width};
  margin-left: ${props => props.marginLeft && props.marginLeft};
  margin-top: ${props => props.marginTop && props.marginTop};

  overflow: ${props => props.overflow && props.overflow};
  overflow-y: ${props => props.overflowY && props.overflowY};
`;

const ProfileDataContainer = styled.div`
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 0;

  margin-left: 16px;
  margin-top: 4px;
  height: 72px;
`;

const FeedImage = styled.img`
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;

  width: ${props => props.width || '70px'};
  height: ${props => props.height || '70px'};

  border: none;
  border-radius: ${props => props.borderRadius || '50%'};
  background-color: ${props => props.backgroundColor || '#ffffff'};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Icon = styled.div`
  flex-basis: auto;
  flex-grow: 0;

  height: 24px;
  margin: ${props => props.margin && props.margin};

  cursor: pointer;

  svg {
    height: ${props => props.height || '16px'};
    width: ${props => props.width || '16px'};
    color: ${props => props.color && props.color};
  }
`;

const RecipesList = styled(Card)`
  width: calc(100% - 50px);
  height: calc(100% - 150px);
  padding: 25px;
  margin-top: 20px;
  border-radius: 8px 8px 0 0;
  overflow-y: scroll;

  @media screen and (max-width: 640px) {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

const NoRecipes = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    height: 128px;
    width: 128px;
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
  Wrapper,
  SideSection,
  MainSection,
  Container,
  FeedImage,
  BottomBar,
  Icon,
  RecipesList,
  NoRecipes,
  FeedCard,
  FeedText,
  FeedButton,
  ProfileDataContainer,
  Separator
};
