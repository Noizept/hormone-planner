import React from 'react';
import { Flex } from '@chakra-ui/react';
import { LanguageSelector, ToggleColor } from '../components';
import { Navigation, MobileNavigation, PageRoutes } from '../layout';
import { useIsMobile } from '../hooks';

export default function MainPage() {
  const isMobile = useIsMobile();

  return (
    <Flex direction={'row'} height={'100%'} borderRadius="xl" width={'100%'}>
      {!isMobile && <Navigation />}

      <Flex width={'100%'} direction={'column'}>
        <Flex width={'100%'} direction={'row'} margin={'15px'}>
          {isMobile && <MobileNavigation />}
          <Flex width={isMobile ? '80%' : '90%'} placeContent={'flex-end'}>
            <Flex alignItems={'center'}>
              <LanguageSelector />
              <ToggleColor />
            </Flex>
          </Flex>
        </Flex>

        <Flex
          width={'100%'}
          height={'100%'}
          marginLeft={isMobile ? '30px' : '8px'}
        >
          <PageRoutes />
        </Flex>
      </Flex>
    </Flex>
  );
}
