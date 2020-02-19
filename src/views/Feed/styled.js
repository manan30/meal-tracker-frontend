import styled from 'styled-components';

const Wrapper = styled.section`
  display: inline-flex;
  margin: 0 50px;
  height: calc(100vh - 80px);
  width: calc(100% - 100px);
  overflow: hidden;
`;

const LeftSideSection = styled.section`
  height: calc(100% - 50px);
  width: 25%;
  margin-top: 50px;
  overflow: hidden;
`;

const MainSection = styled.section`
  height: calc(100% - 50px);
  width: 50%;
  margin-top: 50px;
  overflow: hidden;
`;

const RightSideSection = styled.section`
  height: calc(100% - 50px);
  width: 25%;
  margin-top: 50px;
  overflow: hidden;
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
  background-color: #767676;
  border-radius: 50%;
`;

export {
  Wrapper,
  LeftSideSection,
  MainSection,
  RightSideSection,
  DataContainer,
  LineItem,
  ProfileImage
};
