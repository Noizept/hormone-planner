import React from 'react';
import { Center, Flex, HStack, Heading } from '@chakra-ui/react';
import Login from '../components/Login';
import { Logo } from '../components/Icons';
import ToggleColor from '../components/ToggleColor';
import LanguageSelector from '../components/LanguageSelector';
import Card from '../components/Card';
import { useIsMobile } from '../hooks';
import { useTranslation } from 'react-i18next';

export default function Landing() {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <Flex direction={'column'} height={'100%'} borderRadius="xl">
      <Flex width={'100%'} justifyContent={isMobile ? 'center' : 'flex-end'}>
        <HStack spacing="24px" margin={'15px'}>
          <LanguageSelector />
          <ToggleColor />
        </HStack>
      </Flex>
      <Flex direction={'row'} height={'100%'} alignItems={'center'}>
        <Center width={'100%'}>
          <Card padding={'20px'} margin={'40px'}>
            <Flex
              direction={'column'}
              alignItems={'center'}
              padding={'20px'}
              margin={'40px'}
            >
              <Heading as={'h2'} mb={'30px'} textAlign={'center'}>
                {t('landing.title')}
              </Heading>
              <Logo boxSize={'28'} mb={'30px'} />
              <Login />
            </Flex>
          </Card>
        </Center>
      </Flex>
    </Flex>
  );
}
