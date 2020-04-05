import React from 'react';
import PropTypes from 'prop-types';
import { TabsTextContainer, TabText, TabHighlighter } from './styled';
import useTabHighlighter from '../../hooks/useTabHighlighter';

function TabsPanel({ tabs }) {
  const width = `${(tabs.length / 4) * 100}%`;
  const { activeTab, handleActiveTab } = useTabHighlighter(tabs.length);

  return (
    <TabsTextContainer>
      {tabs.map((tab, idx) => {
        const key = idx;
        return (
          <div style={{ width }}>
            <TabText
              key={key}
              color={activeTab[key]}
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
};

export default TabsPanel;
