import styled from 'styled-components';

const Wrapper = styled.section`
  display: inline-flex;
  margin: 0 80px;
  height: calc(100vh - 80px);
  width: calc(100% - 160px);
  overflow: hidden;
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
  height: ${props => props.height && props.height};
  width: ${props => props.width && props.width};
  background-image: ${props => props.image && props.image};
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

export { Wrapper, SideSection, MainSection, Content, ImagesContainer, Image };
