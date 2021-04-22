import { useMediaQuery } from '@chakra-ui/react';

export const useIsMobile = (): boolean => {
  const [isMobile] = useMediaQuery('(max-width: 500px)');

  return isMobile;
};
