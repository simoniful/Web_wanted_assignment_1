import { useEffect, useState } from 'react';

export const useObserver = (target) => {
  const [isIntersect, setIsIntersect] = useState(false);

  useEffect(() => {
    const options = {
      rootMargin: '200px',
      threshold: 0.05,
    };
    const observer = new IntersectionObserver((entries) => {
      setIsIntersect(entries[0].isIntersecting);
    }, options);
    if (target.current) observer.observe(target.current);
    return () => observer.disconnect();
  }, [target]);

  return isIntersect;
};
