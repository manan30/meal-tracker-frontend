import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 0 80px;
  height: calc(100vh - 80px);
  width: calc(100% - 160px);
  overflow: hidden;
`;

const SideSection = styled.section`
  height: 100%;
  width: 30%;
  display: inline-block;
`;

const MainSection = styled.section`
  height: 100%;
  width: 70%;
  display: inline-block;
  overflow: hidden;
`;

export { Wrapper, SideSection, MainSection };
