import { useEffect, useState, useRef } from 'react';

export default function useInfiniteScroll(callback, initialItems) {
  const loadingElementRef = useRef();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(initialItems);

  const observerCallback = async entry => {
    if (entry[0].isIntersecting) {
      setLoading(() => true);
      const items = await callback();
      setData(prevState => [...prevState, ...items]);
      setLoading(() => false);
    }
  };

  const observer = useRef(
    new IntersectionObserver(observerCallback, {
      threshold: 1
    })
  );

  useEffect(() => {
    if (loadingElementRef.current && observer.current)
      observer.current.observe(loadingElementRef.current);
  });

  return { data, loadingElementRef, loading };
}
