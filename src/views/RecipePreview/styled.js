import styled, { css } from 'styled-components';
import Text from '../../components/Text';

const Wrapper = styled.section`
  display: flex;
  margin: 0 80px;
  height: calc(100vh - 60px);
  width: calc(100% - 160px);
  overflow: hidden;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;

    width: 100%;
    margin: 0;
  }
`;

const SideSection = styled.section`
  height: 100%;
  width: 20%;
`;

const MainSection = styled.section`
  /* display: flex; */
  height: 100%;
  width: 80%;
  overflow: hidden;
`;

const Content = styled.div`
  margin: 25px;
  height: calc(100% - 50px);
  width: calc(100% - 50px);

  ${({ children, ...rest }) => {
    return rest;
  }}
`;

const ImagesContainer = styled.div`
  height: calc(100% - 160px);
  width: 100%;
  overflow-y: scroll;
`;

const Image = styled.div`
  height: ${(props) => props.height && props.height};
  width: ${(props) => props.width && props.width};
  background-image: ${(props) => props.image && props.image};
  background-position: center center;
  background-repeat: no-repeat;

  ${({ adjust }) =>
    adjust &&
    `
    :nth-child(3n) {
      margin-right: 0;
    }
    :nth-last-child(-n+3) {
      margin-bottom: 0;
    }
  `}

  ${({ children, height, width, ...rest }) => {
    return { ...rest };
  }}
`;

const ImageItem = styled.div`
  height: ${(props) => props.height || '94px'};
  width: 100%;

  background: rgba(40, 41, 40, 0.5);
  background-image: url(${(props) => props.src && props.src});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  opacity: 0.8;

  ${(props) =>
    props.overflow &&
    css`
      :last-child {
        display: flex;
        justify-content: center;
        align-items: center;

        opacity: 0.2;
      }
    `}
`;

const DataContainer = styled.div`
  height: calc(70% - 25px);
  width: calc(100% - 50px);
  margin: 25px 25px 0 25px;
`;

const ImagesContainerC = styled.div`
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns: 1fr 1fr 1fr;

  height: 94px;
  width: 100%;
`;

const RecipePreviewText = styled(Text)`
  font-size: ${(props) => props.fontSize || '20px'};
  line-height: ${(props) => props.lineHeight || '27px'};
  font-style: normal;

  color: ${(props) => props.color || '#030f09'};
`;

const MobileContentContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const CircularText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 20px;
  width: 20px;
  padding: 5px;
  margin-right: 15px;

  border-radius: 50%;
  border: 1px solid #30be76;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #30be76;
`;

export {
  Wrapper,
  SideSection,
  MainSection,
  Content,
  ImagesContainer,
  Image,
  ImageItem,
  ImagesContainerC,
  DataContainer,
  RecipePreviewText,
  MobileContentContainer,
  CircularText,
};
