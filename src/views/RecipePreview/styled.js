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

export { Wrapper, SideSection, MainSection };
