import styled from 'styled-components';
import Card from '../../components/Card';

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

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const MainSection = styled.section`
  height: calc(100% - 100px);
  width: 50%;
  margin-top: 30px;
  overflow: hidden;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

const BottomBar = styled.section`
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

const DataContainer = styled.div`
  margin: 25px;
  height: calc(100% - 50px);
  width: calc(100% - 50px);

  ${({ children, ...props }) => props}
`;

const LineItem = styled.div`
  display: inline-flex;
  margin-bottom: 16px;
  cursor: pointer;
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
  cursor: pointer;

  svg {
    height: 16px;
    width: 16px;
  }
`;

const CreateRecipeCard = styled(Card)`
  display: flex;
  width: calc(100% - 50px);
  height: 30px;
  padding: 25px;
  align-items: center;

  @media screen and (max-width: 640px) {
    display: none;
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

export {
  Wrapper,
  SideSection,
  MainSection,
  DataContainer,
  LineItem,
  ProfileImage,
  CardImage,
  BottomBar,
  Icon,
  CreateRecipeCard,
  RecipesList
};
