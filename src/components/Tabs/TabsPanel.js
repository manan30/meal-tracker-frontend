import React from 'react';
import PropTypes from 'prop-types';
import { TabsTextContainer, TabText, TabHighlighter } from './styled';

function TabsPanel({ tabs, activeTab, handleActiveTab }) {
  const width = `${(tabs.length / 4) * 100}%`;

  return (
    <TabsTextContainer>
      {tabs.map((tab, idx) => {
        const key = idx;
        return (
          <div key={key} style={{ width }}>
            <TabText
              key={key}
              color={activeTab[key] ? '#30be76' : '#606060'}
              onClick={() => handleActiveTab(key)}>
              {tab}
            </TabText>
            <TabHighlighter active={activeTab[key]} />
          </div>
        );
      })}
    </TabsTextContainer>
  );
}

TabsPanel.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.arrayOf(PropTypes.bool).isRequired,
  handleActiveTab: PropTypes.func.isRequired,
};

export default TabsPanel;
