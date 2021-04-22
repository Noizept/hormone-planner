import React from 'react';
import { Center, Flex, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Login from '../components/Login';
import { Logo } from '../Icons';
import { Card } from '../components';

export default function Landing() {
  const { t } = useTranslation();

  return (
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
  );
}
