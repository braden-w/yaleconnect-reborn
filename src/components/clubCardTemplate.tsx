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

export function ClubCardTemplate() {
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
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
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
            [Insert Name]
          </Heading>
          <Text color={'gray.500'} noOfLines={2} >
          This is a club description that cuts out after a reasonable length of text. See what happens!
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}