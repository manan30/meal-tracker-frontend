import PropTypes from 'prop-types';
import React from 'react';
import { TabLayoutContainer } from './styled';
import TabsPanel from './TabsPanel';

function Tabs({ tabs }) {
  return (
    <TabLayoutContainer>
      <TabsPanel tabs={tabs} />
    </TabLayoutContainer>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tabs;
