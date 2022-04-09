import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import {Club} from '../types/Club';

export function ClubCardTemplate({club}:{club:Club}){
  return (
    <Center py={6}>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'md'}
        rounded={'lg'}
        width={'270px'}
        p={6}
        overflow={'hidden'}>
        <Box
          height={'130px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={3}
          pos={'relative'}>
          {/* Render an image only if club.logo is not null */}
          {club.logo && (
            <Image
              src={club.logo}
              layout={'fill'}
            />
          )}
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            textTransform={'uppercase'}
            fontFamily={'body'}
            fontSize={'2xl'}
            fontWeight={800}
            letterSpacing={1.1}>
            {club.name}
          </Heading>
          <Text color={'gray.500'} noOfLines={2} >
            {club.goals}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}