import React from 'react';
import { Flex, IconButton } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function MobileNavigation() {
  return (
    <Flex alignItems={'center'}>
      <IconButton
        size={'lg'}
        variant={'ghost'}
        aria-label={'Toggle'}
        icon={<GiHamburgerMenu />}
      />
    </Flex>
  );
}
