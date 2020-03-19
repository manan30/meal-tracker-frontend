import { useEffect, useState, useRef } from 'react';

export default function useInfiniteScroll(element, callback) {
  const [loadingElement, setLoadingElement] = useState(element);
  const [loading, setLoading] = useState(true);

  const observerCallback = entry => {
    if (entry[0].isIntersecting) {
      console.log('inter');
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
    if (element && observer.current) observer.current.observe(element);
  });

  return { loadingElement, setLoadingElement, loading };
}
