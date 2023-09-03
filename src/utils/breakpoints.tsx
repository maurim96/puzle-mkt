import { useEffect, useState } from 'react';

const useIsStandardPhone = () => {
  const [isStandardPhone, setIsStandardPhone] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const handleResize = () => {
      setIsStandardPhone(mediaQuery.matches);
    };

    // Initial check
    handleResize();

    // Attach listener
    mediaQuery.addListener(handleResize);

    // Cleanup
    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  return isStandardPhone;
};

export default useIsStandardPhone;
