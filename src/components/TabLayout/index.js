import PropTypes from 'prop-types';
import React from 'react';
import { TabLayoutContainer } from './styled';
import TabsText from './TabsText';

function TabLayout({ tabs }) {
  return (
    <TabLayoutContainer>
      <TabsText tabs={tabs} />
    </TabLayoutContainer>
  );
}

TabLayout.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TabLayout;
