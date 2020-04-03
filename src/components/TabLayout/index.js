import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  TabHighlighter,
  TabLayoutContainer,
  TabsTextContainer,
  TabText
} from './styled';
import useTabHighlighter from '../../hooks/useTabHighlighter';

function TabLayout({ tabs }) {
  const width = `${(tabs.length / 4) * 100}%`;
  const { activeTab, handleActiveTab } = useTabHighlighter(tabs.length);

  return (
    <TabLayoutContainer>
      <TabsTextContainer>
        {tabs.map((tab, idx) => {
          const key = idx;
          return (
            <div style={{ width }}>
              <TabText key={key} onClick={() => handleActiveTab(key)}>
                {tab}
              </TabText>
              <TabHighlighter active={activeTab[key]} />
            </div>
          );
        })}
      </TabsTextContainer>
    </TabLayoutContainer>
  );
}

TabLayout.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TabLayout;
