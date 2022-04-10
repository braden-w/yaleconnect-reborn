import {
  Avatar,
  Box, Text,
  Center, Flex, Heading, Link, Stack, useColorModeValue,
} from '@chakra-ui/react';
import {lazy, memo, Suspense} from 'react';
import {Club} from '../types/Club';


// Lazy import ClubCardFull
const ClubCardFull = lazy(() => import('./ClubCard/ClubCardFull'));


export function ClubCardTemplate({club}: {club: Club}) {
  return (
    <Center py={6}>
      <Suspense fallback={club.name}>
        <ClubCardFull club={club} />
      </Suspense>
    </Center >
  );
}

export const MemoizedClubCardTemplate = memo(ClubCardTemplate);