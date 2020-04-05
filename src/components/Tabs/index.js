import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { TabLayoutContainer } from './styled';
import TabsPanel from './TabsPanel';
import useActiveTabManager from '../../hooks/useActiveTabManager';

function Tabs({ tabs }) {
  const { activeTab, handleActiveTab } = useActiveTabManager(tabs.length);
  const [tabPanelText] = useState(tabs.map((t) => t.tag));
  const [tabContent] = useState(tabs.map((t) => t.component));

  return (
    <TabLayoutContainer>
      <TabsPanel
        tabs={tabPanelText}
        activeTab={activeTab}
        handleActiveTab={handleActiveTab}
      />
      {activeTab.map((tab, i) => tab === true && <>{tabContent[i]}</>)}
    </TabLayoutContainer>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({ tag: PropTypes.string, component: PropTypes.element })
  ).isRequired,
};

export default Tabs;
