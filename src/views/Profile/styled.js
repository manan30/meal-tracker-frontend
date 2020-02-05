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

const SelectionContainer = styled.div`
  position: absolute;
  height: 172px;
  width: 100%;
  margin-top: 116px;
  /* background: black; */
`;

const Text = styled.div`
  margin-top: 50px;
  margin-left: 45px;

  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;

  color: #030f09;
`;

export { Wrapper, SideSection, MainSection, SelectionContainer, Text };
