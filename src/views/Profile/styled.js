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
  width: 30%;
`;

const MainSection = styled.section`
  height: 100%;
  width: 70%;
  overflow: hidden;
`;

const SelectionContainer = styled.div`
  position: absolute;
  height: 172px;
  width: 100%;
  margin-top: 96px;
  /* background: black; */
`;

const DataContainer = styled.div`
  margin: 25px;
  height: calc(100% - 50px);
  width: calc(100% - 50px);

  ${({ children, ...props }) => props} /* return { ...props }; */
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

export {
  Wrapper,
  SideSection,
  MainSection,
  SelectionContainer,
  DataContainer,
  LineItem,
  ProfileImage,
  GroupItem,
  RecipeImage
};
