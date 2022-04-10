import {Box, useColorModeValue, Flex, Avatar} from "@chakra-ui/react";
import {Club} from "../../types/Club";
import ClubCardText from "./ClubCardText";

export default function ClubCardFull({club}: {club: Club}) {
	return (<Box bg={useColorModeValue('white', 'gray.900')} boxShadow={'xl'} rounded={'md'} p={6} height={'360px'} width={'360px'} overflow={'hidden'}>
		<Box height={'100px'} bg={'gray.100'} mt={-6} mx={-6} mb={3} pos={'relative'}>
		</Box>
		<Flex justify={'center'} mt={-12} mb={4}>
			<Avatar loading='lazy' size='lg' src={club.logo} css={{
				border: '2px solid white'
			}} />
		</Flex>
		<ClubCardText club={club} />
	</Box>);
}