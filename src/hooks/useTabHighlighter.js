import { useState } from 'react';

export default function useTabHighlighter(tabLength = 0) {
  const [activeTab, setActiveTab] = useState(
    new Array(tabLength).fill(false).map((v, i) => i === 0)
  );

  function handleActiveTab(index) {
    setActiveTab(prevState => [
      ...prevState.slice(0, index).map(() => false),
      true,
      ...prevState.slice(index + 1).map(() => false)
    ]);
  }

  return { activeTab, handleActiveTab };
}
