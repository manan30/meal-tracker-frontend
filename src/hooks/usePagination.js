import { useEffect, useState } from 'react';

export default function usePagination(callback) {
  const [details, setDetails] = useState({
    results: [],
    nextPage: 0,
    previousPage: 0,
    hasMore: false
  });

  useEffect(() => {
    (async function paginationCallback() {
      const { data } = await callback();
      setDetails(prevState => {
        const newState = {
          results: [...prevState.results, ...(data.results || [])],
          nextPage: data.nextPage,
          previousPage: data.previousPage,
          hasMore: data.hasMore
        };
        return newState;
      });
    })();
  }, [callback]);

  return { ...details };
}
