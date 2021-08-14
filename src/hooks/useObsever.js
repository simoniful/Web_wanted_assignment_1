import { useEffect, useState } from 'react';

export const useObserver = (target) => {
  const [isIntersect, setIsIntersect] = useState(false);

  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver((entries) => {
      setIsIntersect(entries[0].isIntersecting);
    }, options);
    if (target.current) observer.observe(target.current);
    return () => observer.disconnect();
  }, [target]);

  return isIntersect;
};
