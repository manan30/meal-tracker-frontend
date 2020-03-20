import { useEffect, useState, useRef } from 'react';

export default function useInfiniteScroll(callback) {
  const loadingElementRef = useRef();
  const [loading, setLoading] = useState(true);

  const observerCallback = entry => {
    if (entry[0].isIntersecting) {
      setLoading(() => true);
      callback();
      setLoading(() => false);
    }
  };

  const observer = useRef(
    new IntersectionObserver(observerCallback, {
      threshold: 0.7
    })
  );

  useEffect(() => {
    if (loadingElementRef.current && observer.current)
      observer.current.observe(loadingElementRef.current);
  });

  return { loadingElementRef, loading };
}
