import React from 'react';
import { Center, Flex, HStack, Box } from '@chakra-ui/react';
import Login from '../components/Login';
import { Logo } from '../components/Icons';
import ToggleColor from '../components/ToggleColor';
import LanguageSelector from '../components/LanguageSelector';

export default function Landing() {
  return (
    <Flex direction={'column'} height={'100%'}>
      <Flex direction={'row-reverse'}>
        <HStack spacing="24px">
          <LanguageSelector />
          <ToggleColor />
        </HStack>
      </Flex>
      <Flex direction={'row'} height={'100%'} alignItems={'center'}>
        <Center width={'100%'}>
          <Flex direction={'column'} alignItems={'center'}>
            <Logo boxSize={'-webkit-fit-content'} mb={'30px'} />
            <Login />
          </Flex>
        </Center>
      </Flex>
    </Flex>
  );
}
