import PropTypes from 'prop-types';
import React from 'react';
import useTabs from '../../hooks/useTabs';
import { TabLayoutContainer, TabContentContainer } from './styled';
import TabsPanel from './TabsPanel';

function Tabs({ tabs }) {
  const {
    activeTab,
    handleActiveTab,
    panelText,
    tabContent,
    activeTabIndex,
  } = useTabs(tabs.length, tabs);

  return (
    <TabLayoutContainer>
      <TabsPanel
        tabs={panelText}
        activeTab={activeTab}
        handleActiveTab={handleActiveTab}
      />
      <TabContentContainer>{tabContent[activeTabIndex]}</TabContentContainer>
    </TabLayoutContainer>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({ tag: PropTypes.string, component: PropTypes.element })
  ).isRequired,
};

export default Tabs;
