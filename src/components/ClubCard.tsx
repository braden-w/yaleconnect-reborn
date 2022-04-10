import {
  Center,
} from '@chakra-ui/react';
import {Club} from '../types/Club';
import ClubCardFull from './ClubCard/ClubCardFull';




export function ClubCardTemplate({club}: {club: Club}) {
  return (
    <Center py={6}>
      <ClubCardFull club={club}></ClubCardFull>
    </Center >
  );
}