import styled, { css } from 'styled-components';
import Text from '../../components/Text';

const Wrapper = styled.section`
  display: flex;
  margin: 0 80px;
  height: calc(100vh - 80px);
  width: calc(100% - 160px);
  overflow: hidden;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;

    height: 100%;
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
  height: ${(props) => props.height || '94'}px;
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
  height: calc(100% - 375px);
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
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;

  color: #030f09;
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
};
