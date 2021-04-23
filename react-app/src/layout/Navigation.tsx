import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Flex,
  HStack,
  Text,
  Divider,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { AiOutlineHome, AiOutlineLogout } from 'react-icons/ai';
import { GiPill, GiTripleNeedle, GiHalfHeart, GiSyringe } from 'react-icons/gi';

import { Logo } from '../Icons';
import { NavigationLink } from './NavigationLink';
import colors from '../theme/colors';
import Logout from './Logout';

export default function Navigation() {
  const { t } = useTranslation();
  const bgColor = useColorModeValue(colors.lightModeBg, colors.darkModeBg);
  const { user } = useAuth0();

  return (
    <Flex height={'100%'} direction={'column'} backgroundColor={bgColor}>
      <HStack width={'100%'} padding={'15px 20px'}>
        <Logo boxSize={50} />
        <Flex width={'100%'} direction={'column'}>
          <Heading alignContent={'center'} textAlign={'center'} size={'md'}>
            {t('navigation.dashboard')}
          </Heading>
          <Text>{user.given_name}</Text>
        </Flex>
      </HStack>
      <Divider />
      <Flex height={'100%'} direction={'column'} ml={'10px'}>
        <Flex alignItems={'flex-start'} direction={'column'} width={'100%'}>
          <NavigationLink
            mt={'20px'}
            to={'/'}
            text={t('navigation.home')}
            icon={<AiOutlineHome size={'22px'} />}
          />
          <NavigationLink
            to={'/anabolics'}
            text={t('navigation.anabolics')}
            icon={<GiSyringe size={'22px'} />}
          />
          <NavigationLink
            to={'/sarms'}
            text={t('navigation.sarms')}
            icon={<GiPill size={'22px'} />}
          />
          <NavigationLink
            to={'/peptides'}
            text={t('navigation.peptides')}
            icon={<GiTripleNeedle size={'22px'} />}
          />
          <NavigationLink
            to={'/hormones'}
            text={t('navigation.hormones')}
            icon={<GiHalfHeart size={'22px'} />}
          />
        </Flex>
        <Flex height={'100%'} direction={'column-reverse'} width={'100%'}>
          <Logout
            text={t('navigation.logout')}
            icon={<AiOutlineLogout size={'22px'} />}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
