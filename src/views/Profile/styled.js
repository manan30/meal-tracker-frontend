import styled, { css } from 'styled-components';
import Text from '../../components/Text';
import Card from '../../components/Card';
import Button from '../../components/Button';

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
  margin-right: 20px;
`;

const MainSection = styled.section`
  height: 100%;
  width: 70%;
  margin-top: 30px;
  overflow: hidden;
`;

const SelectionContainer = styled.div`
  position: absolute;
  height: 156px;
  width: 70%;
  margin-top: 24px;
`;

const DataContainer = styled.div`
  margin: 25px;
  height: calc(100% - 50px);
  width: calc(100% - 50px);

  ${({ children, ...props }) => props} /* return { ...props }; */
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

const GroupItem = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  text-align: center;

  color: #030f09;
`;

const RecipeImage = styled.div`
  height: ${props => props.height && props.height};
  border-radius: 8px 8px 0 0;
  background-color: #e5e5e5;
  background-image: url(${({ image }) => image && image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
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
  position: ${props => props.position && props.position};

  display: flex;
  flex-direction: ${props => props.flexDirection && props.flexDirection};
  flex-wrap: ${props => props.flexWrap && props.flexWrap};
  align-items: ${props => props.alignItems && props.alignItems};
  flex: ${props => props.flex && '0 0 auto'};

  width: ${props => props.width || 'calc(100% - 50px)'};
  height: ${props => props.height || '165px'};
  padding: ${props => props.padding || '25px'};
  margin: ${props => props.margin && props.margin};

  ${props =>
    props.hover &&
    css`
      :hover {
        transform: scale(0.9);
        border-radius: 10px;
      }
    `}

  ${props =>
    props.carousel &&
    css`
      :last-child {
        margin-right: 16px;
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

  ${props =>
    props.adjustRecipeCardText &&
    css`
      @media screen and (min-width: 320px) and (max-width: 480px) {
        height: 64px;
        overflow: hidden;
      }
    `}
`;

const ProfileDataContainer = styled.div`
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 0;

  margin-left: 16px;
  margin-top: 4px;
  height: 72px;
`;

const Separator = styled.div`
  flex-shrink: 0;

  height: 1px;
  width: 100%;
  margin: 20px 0;

  background-color: #e6e6e6;
  border-radius: 0.5px;
`;

const ProfileImage = styled.img`
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;

  width: ${props => props.width || '70px'};
  height: ${props => props.height || '70px'};

  border: none;
  border-radius: ${props => props.borderRadius || '50%'};
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

  :hover {
    background-color: #30be76;
    color: #ffffff;
  }
`;

export {
  Wrapper,
  SideSection,
  MainSection,
  SelectionContainer,
  DataContainer,
  LineItem,
  GroupItem,
  RecipeImage,
  ProfileText,
  ProfileCard,
  Container,
  ProfileDataContainer,
  Separator,
  ProfileImage,
  ProfileButton
};
