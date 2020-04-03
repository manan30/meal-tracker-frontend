import styled from 'styled-components';

const TabLayoutContainer = styled.div`
  height: 100%;
  width: 100%;

  background: #ffffff;
  border-radius: 8px 8px 0 0;
`;

const TabsTextContainer = styled.div`
  display: flex;
  padding: 25px;
`;

const TabText = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 5px;

  /* border-bottom: ${props => props.active && '2px solid #30be76'}; */

  cursor: pointer;
`;

const TabHighlighter = styled.div`
  height: 4px;

  background: #30be76;
  border-radius: 100px 100px 0px 0px;

  opacity: ${props => (props.active ? '1' : '0')};

  transition: opacity 0.5s ease-in;
`;

export { TabLayoutContainer, TabsTextContainer, TabText, TabHighlighter };
