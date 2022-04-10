import {Text, Stack, Heading, useColorModeValue, Box} from "@chakra-ui/react";
import Link from "next/link";

function ClubCardText(props) {
	return (<Stack>
		<Heading color={useColorModeValue('gray.700', 'white')} textTransform={'uppercase'} fontFamily={'body'} fontSize={'2l'} fontWeight={800} letterSpacing={1.1} noOfLines={[2, 3]}>
			{props.club.name}
		</Heading>
		<Text color={'gray.500'} noOfLines={[1, 2]}>
			{props.club.type}
		</Text>
		{
			/* Insert a horizontal divider */
		}
		<Box borderBottom={'1px solid'} borderColor={'gray.200'} mt={4} mb={4} />
		{
			/* External link to club.website */
		}
		<Link href={props.club.website}>
			<Text color={'blue.500'}>Website</Text>
		</Link>
		{
			/* Insert text for club.mission.*/
		}
		<Text color={'gray.500'} fontSize='sm' noOfLines={[1, 2]}>
			{props.club.mission}
		</Text>

	</Stack>);
}