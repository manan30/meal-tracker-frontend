import { useState } from 'react';

export default function useModal() {
  const [showing, setShowing] = useState(false);

  function handleToggle() {
    setShowing((prevState) => !prevState);
  }

  return { showing, handleToggle };
}
