import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Avatar,
  Flex,
  Link,
} from '@chakra-ui/react';
import {lazy} from 'react';
import {Club} from '../types/Club';

// Lazy import ClubCardText
const ClubCardText = lazy(() => import('./ClubCard/ClubCardText'));



export function ClubCardTemplate({club}: {club: Club}) {
  return (
    <Center py={6}>
      <ClubCardText club={club} />
    </Center >
  );
}