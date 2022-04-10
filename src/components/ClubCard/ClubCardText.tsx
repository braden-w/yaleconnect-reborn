import {
	Text,
	Stack,
	Heading,
	useColorModeValue,
	Box,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button
} from "@chakra-ui/react";
import Link from "next/link";
import {Club} from "../../types/Club";

export default function ClubCardText({club}: {club: Club}) {
	const {isOpen, onOpen, onClose} = useDisclosure();
	return (<Stack>
		<Heading color={useColorModeValue('gray.700', 'white')} textTransform={'uppercase'} fontFamily={'body'} fontSize={'2l'} fontWeight={800} letterSpacing={1.1} noOfLines={[2, 3]}>
			{club.name}
		</Heading>
		<Text color={'gray.500'} noOfLines={[1, 2]}>
			{club.type}
		</Text>
		{
			/* Insert a horizontal divider */
		}
		<Box borderBottom={'1px solid'} borderColor={'gray.200'} mt={4} mb={4} />
		{
			/* External link to club.website */
		}
		{club.website &&
			<Link href={club.website}>
				<Text color={'blue.500'}>Website</Text>
			</Link>}
		<Text color={'gray.500'} fontSize='sm' noOfLines={[1, 2]}>
			{club.mission}
		</Text>
		<Button onClick={onOpen}>Read More</Button>

		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{club.name}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Text>
						{club.categoryParsed && <>Club Category: {club.categoryParsed}</>}
					</Text>
					{/* <Text>
						{club.categories && club.categories.length > 1 && <>Other Categories: {club.categories.map(({category}) => category).join()}</>}
					</Text> */}
					{club.mission}
				</ModalBody>
				<ModalFooter>
					<Button colorScheme='blue' mr={3} onClick={onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	</Stack>

	);
}