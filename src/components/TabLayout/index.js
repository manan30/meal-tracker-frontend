import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  TabHighlighter,
  TabLayoutContainer,
  TabsTextContainer,
  TabText
} from './styled';

function TabLayout({ tabs }) {
  const width = `${(tabs.length / 4) * 100}%`;

  const [activeTab, setActiveTab] = useState(
    new Array(tabs.length).fill(false).map((v, i) => i === 0)
  );

  function handleActiveTab(index) {
    setActiveTab(prevState => [
      ...prevState.slice(0, index).map(() => false),
      true,
      ...prevState.slice(index + 1).map(() => false)
    ]);
  }

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
