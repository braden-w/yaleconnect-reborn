import {
  Center,
} from '@chakra-ui/react';
import {lazy, Suspense} from 'react';
import {Club} from '../types/Club';
import ClubCardText from './ClubCard/ClubCardText';


// Lazy import ClubCardFull
const ClubCardFull = lazy(() => import('./ClubCard/ClubCardFull'));


export function ClubCardTemplate({club}: {club: Club}) {
  return (
    <Center py={6}>
      <Suspense fallback={ClubCardText}>
        <ClubCardFull club={club}></ClubCardFull>
      </Suspense>

    </Center >
  );
}