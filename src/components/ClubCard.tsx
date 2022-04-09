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
import {Club} from '../types/Club';

export function ClubCardTemplate({club}: {club: Club}) {
  return (
    <Center py={6}>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'xl'}
        rounded={'md'}
        p={6}
        height={'360px'}
        width={'360px'}
        overflow={'hidden'}>
        <Box
          height={'100px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={3}
          pos={'relative'}>
        </Box>
        <Flex justify={'center'} mt={-12} mb={4}>
          <Avatar
            size='lg'
            src={club.logo}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            textTransform={'uppercase'}
            fontFamily={'body'}
            fontSize={'2l'}
            fontWeight={800}
            letterSpacing={1.1}
            noOfLines={[2, 3]}>
            {club.name}
          </Heading>
          <Text color={'gray.500'} noOfLines={[1, 2]} >
            {club.type}
          </Text>
          {/* Insert a horizontal divider */}
          <Box
            borderBottom={'1px solid'}
            borderColor={'gray.200'}
            mt={4}
            mb={4}
          />
          {/* External link to club.website */}
          <Link href={club.website}>
            <Text color={'blue.500'}>Website</Text>
          </Link>
          {/* Insert text for club.mission.*/}
          <Text color={'gray.500'} fontSize='sm' noOfLines={[1, 2]}>
            {club.mission}
          </Text>

        </Stack>
      </Box>
    </Center >
  );
}