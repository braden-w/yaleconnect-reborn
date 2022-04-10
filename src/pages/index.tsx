import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import partyPicture from '../assets/undraw_partying_re_at7f.svg';

export default function Home() {
  return (
    <Box bg={useColorModeValue('#4b8bd9', '#4b8bd9')}>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'top'}>
          <Stack spacing={8} w={'full'} maxW={'lg'}>
            <Heading fontSize={'7xl'}>
              <Text color={'white'} as={'span'}>
                Yale
              </Text>
              <Text color={'#00356b'} as={'span'}>
                Clubs
              </Text>
            </Heading>
            <Text fontSize={{ base: '3xl', lg: '3xl' }} color={'white'}>
              Easily explore the clubs and organizations Yale has to offer.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'#00356b'}
                color={'white'}
                _hover={{
                  bg: '#0050a0',
                }}
                height={'64px'}
                size="lg"
              >
                <Link href="/explore">
                  <Text fontSize={'3xl'}>Explore!</Text>
                </Link>
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex p={10} flex={1}>
          <Image alt={'Login Image'} src={partyPicture} />
        </Flex>
      </Stack>
    </Box>
  );
}
