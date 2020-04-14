import PropTypes from 'prop-types';
import React from 'react';
import {
  TabHighlighter,
  TabsPanelContainer,
  TabText,
  TabsTextContainer,
} from './styled';

function TabsPanel({ tabs, activeTab, handleActiveTab }) {
  return (
    <TabsPanelContainer>
      {tabs.map((tab, idx) => {
        const key = idx;
        return (
          <TabsTextContainer key={key}>
            <TabText
              color={activeTab[key] ? '#30be76' : '#606060'}
              onClick={() => handleActiveTab(key)}>
              {tab}
            </TabText>
            <TabHighlighter active={activeTab[key]} />
          </TabsTextContainer>
        );
      })}
    </TabsPanelContainer>
  );
}

TabsPanel.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.arrayOf(PropTypes.bool).isRequired,
  handleActiveTab: PropTypes.func.isRequired,
};

export default TabsPanel;
