import {SimpleGrid} from "@chakra-ui/react";
import {MemoizedClubCardTemplate} from "./ClubCard";

export default function CardGrid({filteredClubs}) {
  return (<SimpleGrid minChildWidth='280px' spacing='2'>
    {filteredClubs && filteredClubs.map(club => <MemoizedClubCardTemplate club={club} />)}
  </SimpleGrid>);
}