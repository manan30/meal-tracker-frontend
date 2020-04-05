import styled from 'styled-components';

const TabLayoutContainer = styled.div`
  height: 100%;
  width: 100%;

  background: #ffffff;
`;

const TabsTextContainer = styled.div`
  display: flex;
  padding: 25px;
`;

const TabText = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 5px;
  color: ${(props) => props.color && props.color};

  /* border-bottom: ${(props) => props.active && '2px solid #30be76'}; */

  cursor: pointer;

  transition: all 0.8s ease-in;
`;

const TabHighlighter = styled.div`
  height: 4px;

  background: #30be76;
  border-radius: 100px 100px 0px 0px;

  opacity: ${(props) => (props.active ? '1' : '0')};

  transition: opacity 0.5s ease-in;
`;

export { TabLayoutContainer, TabsTextContainer, TabText, TabHighlighter };
