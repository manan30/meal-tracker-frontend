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
  display: flex;
  align-items: ${props => props.alignItems && props.alignItems};

  width: ${props => props.width || 'calc(100% - 50px)'};
  height: ${props => props.height || '165px'};
  padding: 25px;
  margin-bottom: 20px;

  box-shadow: ${props => props.boxShadow && props.boxShadow};

  ${props =>
    props.adjustDisplay &&
    css`
      @media screen and (max-width: 640px) {
        display: none;
      }
    `};
`;

const FeedButton = styled(Button)`
  flex-basis: auto;
  flex-grow: ${props => props.flexGrow || '0'};

  height: ${props => props.height && props.height};
  width: ${props => props.width && props.width};
  margin: ${props => props.margin && props.margin};

  font-style: normal;
  font-weight: bold;
  font-size: ${props => props.fontSize || '16px'};
  line-height: 21px;
  text-align: center;

  background-color: ${props => props.bgColor && props.bgColor};
  color: ${props => props.color && props.color};
  box-shadow: ${props => props.boxShadow && props.boxShadow};
  border: ${props => props.border && props.border};
`;

const FeedText = styled(Text)`
  height: ${props => props.height && props.height};
  width: ${props => props.width && props.width};
  margin-top: ${props => props.marginTop && props.marginTop};
  font-weight: ${props => props.fontWeight || 'normal'};
  font-size: ${props => props.fontSize || '14px'};
  line-height: 22px;
  letter-spacing: 0.4px;
  color: ${props => props.color || '#767676'};
`;

const LineItem = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-around;
`;

const ProfileImage = styled.div`
  width: 70px;
  height: 70px;
  background-color: #ffffff;
  border-radius: 50%;
  background-image: url(${props => props.image && props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  ${({ children, image, ...rest }) => rest};
`;

const CardImage = styled.image`
  display: block;
  height: 180px;
  width: 100%;
  background-image: url(${props => props.image && props.image});
  background-color: grey;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Icon = styled.div`
  flex-basis: auto;
  flex-grow: 0;
  height: 24px;
  cursor: pointer;

  svg {
    height: ${props => (props.height ? props.height : '16px')};
    width: ${props => (props.width ? props.width : '16px')};
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

const RecipeListCard = styled(FeedCard)`
  height: 400px;
  box-shadow: 0px 6px 20px rgba(13, 51, 32, 0.1);
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

const CookBookSelection = styled(Text)`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  padding: 11px 0 11px 9px;
  font-size: 14px;
  line-height: 22px;
  color: #030f09;
  cursor: pointer;
  justify-content: center;

  :last-child {
    margin-bottom: 8px;
  }

  :hover {
    background: #d6f2e4;
    border-radius: 8px;
  }

  ${({ children, ...rest }) => rest}
`;

export {
  Wrapper,
  SideSection,
  MainSection,
  LineItem,
  ProfileImage,
  CardImage,
  BottomBar,
  Icon,
  RecipesList,
  NoRecipes,
  CookBookSelection,
  FeedCard,
  FeedText,
  FeedButton,
  RecipeListCard as ListCard
};
