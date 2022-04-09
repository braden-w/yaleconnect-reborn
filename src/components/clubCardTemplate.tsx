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

export function ClubCardTemplate({clubInfo}){
  return (
    <Center py={6}>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'md'}
        rounded={'lg'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'130px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={3}
          pos={'relative'}>
          <Image
            src={clubInfo.image}  
            layout={'fill'}
          />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            textTransform={'uppercase'}
            fontFamily={'body'}
            fontSize={'2xl'}
            fontWeight={800}
            letterSpacing={1.1}>
            {clubInfo.name}
          </Heading>
          <Text color={'gray.500'} noOfLines={2} >
            {clubInfo.description}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}