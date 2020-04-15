import styled, { css } from 'styled-components';
import Card from '../../components/Card';
import Text from '../../components/Text';

const Wrapper = styled.section`
  display: flex;
  margin: 50px 80px 0 80px;
  height: calc(100vh - 110px);
  width: calc(100% - 160px);
  overflow: hidden;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;

    width: 100%;
    height: calc(100vh - 60px);
    margin: 0;
  }
`;

const SideSection = styled.section`
  height: 100%;
  width: 25%;
`;

const MainSection = styled.section`
  height: 100%;
  width: 75%;
  overflow: hidden;
  overflow-y: scroll;
`;

const RecipePreviewCard = styled(Card)`
  display: flex;

  height: ${(props) => props.height || '380px'};
  width: ${(props) => props.width || 'calc(100% - 50px)'};
  margin-right: ${(props) => props.marginRight && props.marginRight};
  padding: ${(props) => props.padding || '25px'};

  overflow: hidden;
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
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};

  @media screen and (min-width: 1024px) {
    height: calc(100% - 160px);
    margin-top: 10px;

    overflow: hidden;
    overflow-y: scroll;
  }
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
    flex-direction: ${(props) => props.flexDirection && props.flexDirection};
    align-items: ${(props) => props.alignItems || 'flex-start'};
    flex-wrap: ${(props) => props.wrap && props.wrap};

    height: ${(props) => props.height || '100%'};
    width: 100%;
    margin: 0;

    overflow: hidden;
    overflow-y: scroll;
  }
`;

const RecipePreviewText = styled(Text)`
  width: ${(props) => props.width && props.width};
  margin-left: ${(props) => props.marginLeft && props.marginLeft};
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};

  font-size: ${(props) => props.fontSize || '16px'};
  line-height: ${(props) => props.lineHeight || '22px'};
  font-style: normal;
  color: ${(props) => props.color || '#030f09'};

  cursor: ${(props) => props.cursor && props.cursor};
`;

const RecipeHeader = styled(RecipePreviewText)`
  position: absolute;
  top: 28%;
  margin: 0 25px 15px 25px;

  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};
  flex-wrap: wrap;

  margin-bottom: 10px;

  @media screen and (min-width: 1024px) {
    ${({ flexDirection }) =>
      flexDirection === 'row'
        ? css`
            align-items: center;
            width: 100%;
          `
        : css`
            flex: 0 0 50%;
          `};
  }
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

const Separator = styled.div`
  height: 1px;
  width: 100%;
  margin: 12px 0;

  background-color: #e6e6e6;
  border-radius: 0.5px;
`;

const RecipePreviewEditButton = styled.div`
  position: fixed;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  margin-top: 10px;
  margin-right: 10px;
  padding: 3px;

  background: rgba(0, 0, 0, 0.4);

  border: 1px solid #ffffff;
  border-radius: 8px;
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
  Separator,
  RecipePreviewEditButton,
  RecipeHeader,
};
