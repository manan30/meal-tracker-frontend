import { useEffect, useState } from 'react';

export default function useTabs(tabLength = 0, tabs = []) {
  const [activeTab, setActiveTab] = useState(
    new Array(tabLength).fill(false).map((v, i) => i === 0)
  );
  const [tabPanelText, setTabPanelText] = useState(tabs.map((t) => t.tag));
  const [tabContent, setTabContent] = useState(tabs.map((t) => t.component));
  const [tabWidth, setTabWidth] = useState('100%');
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    setActiveTab(() => new Array(tabLength).fill(false).map((v, i) => i === 0));
  }, [tabLength]);

  useEffect(() => {
    setTabPanelText(tabs.map((t) => t.tag));
    setTabContent(tabs.map((t) => t.component));
    setTabWidth(() => `${Math.floor(100 / tabs.length)}%`);
  }, [tabs]);

  function handleActiveTab(index) {
    setActiveTab((prevState) => [
      ...prevState.slice(0, index).map(() => false),
      true,
      ...prevState.slice(index + 1).map(() => false),
    ]);
    setActiveTabIndex(() => index);
  }

  return {
    activeTab,
    handleActiveTab,
    panelText: tabPanelText,
    tabContent,
    tabWidth,
    activeTabIndex,
  };
}
