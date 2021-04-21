import { useState, useEffect } from 'react';
import { useMediaQuery } from '@chakra-ui/react';

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [minWidth] = useMediaQuery('(max-width: 500px)');

  useEffect(() => {
    minWidth ? setIsMobile(true) : setIsMobile(false);
  }, [minWidth]);

  return isMobile;
};
