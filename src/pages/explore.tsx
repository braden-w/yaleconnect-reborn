import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Input,
} from "@chakra-ui/react"
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons"

import { NavBar } from "../components/NavBar"
import { Hero } from "../components/Hero"
import { Container } from "../components/Container"
import { Main } from "../components/Main"
import { CTA } from "../components/CTA"
import { Footer } from "../components/Footer"
import { useState } from "react"

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const handleSearchInput = (event) => setSearchQuery(event.target.value)
  return (
    <>
      <NavBar handleSearchInput={handleSearchInput} />
      {searchQuery}
      <Container height="100vh">
        <Hero />
        <Main>
          <Text>
            Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code>{" "}
            + <Code>TypeScript</Code>.
          </Text>

          <List spacing={3} my={0}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              <ChakraLink
                isExternal
                href="https://chakra-ui.com"
                flexGrow={1}
                mr={2}
              >
                Chakra UI <LinkIcon />
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              <ChakraLink
                isExternal
                href="https://nextjs.org"
                flexGrow={1}
                mr={2}
              >
                Next.js <LinkIcon />
              </ChakraLink>
            </ListItem>
          </List>
        </Main>

        <Footer>
          <Text>Next ❤️ Chakra</Text>
        </Footer>
        <CTA />
      </Container>
    </>
  )
}

export default Explore
