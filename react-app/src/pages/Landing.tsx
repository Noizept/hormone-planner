import React from 'react';
import { Center, Flex, Heading, HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Login from '../layout/Login';
import { Logo } from '../Icons';
import { LanguageSelector, ToggleColor, Card } from '../components';
import { useIsMobile } from '../hooks';

export default function Landing() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

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
