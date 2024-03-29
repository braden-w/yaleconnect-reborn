import {ReactNode, useState} from "react"
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Heading,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
} from "@chakra-ui/react"
import {HamburgerIcon, CloseIcon, AddIcon, SearchIcon} from "@chakra-ui/icons"
import {SearchBar} from "./SearchBar"
import {FilterButton} from "./filterButton"
// import { SearchBar } from "./SearchBar"

const Links = ["Explore", "Alerts"]

const NavLink = ({children}: {children: ReactNode}) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={`${children}`.toLowerCase()}
  >
    {children}
  </Link>
)

export function NavBar({onSearchInputChanged, onSearchCategoriesChanged}) {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [filterArr, setFilterArr] = useState([]);

  // const childToParent = (filters) => {
  //   setFilterArr(filters);
  // }


  return (
    <>
      <Box bg={useColorModeValue("white.100", "white.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{md: "none"}}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link _hover={{
              textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700")
            }} href='explore' > <Heading size="lg">YaleClubs</Heading></Link>
            {/* Insert Search Bar and Input*/}
            <IconButton
              size={"md"}
              icon={<SearchIcon />}
              aria-label={"Search"}
              display={{md: "none"}}
            />

            <SearchBar onSearchInputChanged={onSearchInputChanged} />

            <HStack
              as={"nav"}
              spacing={4}
              display={{base: "none", md: "flex"}}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <FilterButton onSearchCategoriesChanged={onSearchCategoriesChanged} />
          {/* <Flex alignItems={"center"}>
            <DarkModeSwitch />
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<SearchIcon />}
            >
              Explore
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex> */}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{md: "none"}}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
