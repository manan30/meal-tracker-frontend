import { useEffect, useState } from 'react';

export default function useAPI(callback) {
  const [data, setData] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    (async function fetchAPI() {
      try {
        const {
          data: { data: fetchedData },
        } = await callback();
        setData(() => fetchedData);
      } catch (e) {
        setError(() => e);
      }
    })();
  }, [callback]);

  return { data, error };
}
