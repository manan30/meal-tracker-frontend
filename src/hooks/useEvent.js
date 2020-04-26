import { useCallback, useEffect } from 'react';

export default function useEvent(callback, eventType, options) {
  const cb = useCallback(callback, [callback]);

  useEffect(() => {
    document.addEventListener(eventType, cb);

    return () => document.removeEventListener(eventType, cb);
  }, [eventType, cb]);

  return {};
}
