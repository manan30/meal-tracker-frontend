import styled from 'styled-components';

const TabLayoutContainer = styled.div`
  height: 100%;
  width: 100%;

  background: #ffffff;
`;

const TabsPanelContainer = styled.div`
  display: flex;

  padding: 25px 0;

  overflow: hidden;
  overflow-x: auto;
`;

const TabsTextContainer = styled.div`
  flex: 0 0 auto;
  box-sizing: border-box;

  margin-left: 48px;

  :first-child {
    margin-left: 0;
  }
`;

const TabText = styled.div`
  text-align: center;
  padding-bottom: 5px;

  color: ${(props) => props.color && props.color};

  cursor: pointer;

  transition: all 0.5s ease-in;
`;

const TabHighlighter = styled.div`
  height: 4px;

  background: #30be76;
  border-radius: 100px 100px 0px 0px;

  opacity: ${(props) => (props.active ? '1' : '0')};

  transition: opacity 0.4s ease-in;
`;

const TabContentContainer = styled.div`
  height: calc(100% - 82px);

  overflow: hidden;
  overflow-y: scroll;
`;

export {
  TabLayoutContainer,
  TabsPanelContainer,
  TabText,
  TabHighlighter,
  TabsTextContainer,
  TabContentContainer,
};
