import styled, { css } from 'styled-components';
import Text from '../../components/Text';
import Card from '../../components/Card';

const Wrapper = styled.section`
  display: flex;
  margin: 50px 80px 0 80px;
  height: calc(100vh - 110px);
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
  width: 25%;
`;

const MainSection = styled.section`
  /* display: flex; */
  height: 100%;
  width: 75%;
  overflow: hidden;
`;

const RecipePreviewCard = styled(Card)`
  display: flex;

  height: ${(props) => props.height || '380px'};
  width: ${(props) => props.width && props.width};
  margin-right: ${(props) => props.marginRight && props.marginRight};
  padding: ${(props) => props.padding && props.padding};

  overflow: hidden;
  overflow-y: scroll;
`;

const ImagesContent = styled.div`
  margin: 25px;
  height: calc(100% - 50px);
  width: calc(100% - 50px);
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  grid-template-columns: 1fr 1fr 1fr;

  height: 94px;
  width: 100%;

  ${(props) =>
    props.desktop &&
    css`
      height: calc(100% - 160px);
      margin-top: 10px;

      overflow: hidden;
      overflow-y: scroll;
    `};
`;

const ImageItem = styled.div`
  height: ${(props) => props.height || '94px'};
  width: 100%;

  background: rgba(40, 41, 40, 0.5);
  background-image: url(${(props) => props.src && props.src});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  /* opacity: 0.8; */

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

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: ${(props) => props.alignItems || 'flex-start'};

    height: ${(props) => props.height || '100%'};
    width: 100%;
    margin: 0;
  }
`;

const RecipePreviewText = styled(Text)`
  font-size: ${(props) => props.fontSize || '20px'};
  line-height: ${(props) => props.lineHeight || '27px'};
  font-style: normal;

  color: ${(props) => props.color || '#030f09'};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};
  flex-wrap: wrap;

  margin-bottom: 10px;

  ${(props) =>
    props.desktop &&
    css`
      flex: 0 0 50%;
      height: 24px;
    `}
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
  ImagesContainer,
  ImageItem,
  DataContainer,
  RecipePreviewText,
  ContentContainer,
  CircularText,
  RecipePreviewCard,
  ImagesContent,
};
