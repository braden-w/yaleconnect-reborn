import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Input,
  SimpleGrid,
} from "@chakra-ui/react"
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons"

import { NavBar } from "../components/NavBar"
import { Hero } from "../components/Hero"
import { Container } from "../components/Container"
import { Main } from "../components/Main"
import { CTA } from "../components/CTA"
import { Footer } from "../components/Footer"
import { useState } from "react"
import { ClubCardTemplate } from "../components/clubCardTemplate"
import { dummy } from "../components/dummy"
const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const handleSearchInput = (event) => setSearchQuery(event.target.value)
  return (
    <>
      <NavBar handleSearchInput={handleSearchInput} />
      {searchQuery}
      <Container height="100vh">
        <Hero />
        <SimpleGrid
          minChildWidth="250px"
          spacing={18}
          spacingX={5}
          spacingY={5}
          maxWidth="90%"
        >
          <ClubCardTemplate clubInfo={dummy} />
          <ClubCardTemplate clubInfo={dummy} />
          <ClubCardTemplate clubInfo={dummy} />
          <ClubCardTemplate clubInfo={dummy} />
        </SimpleGrid>
        <Footer>
          <Text>Built with ❤ and ☕</Text>
        </Footer>
      </Container>
    </>
  )
}

export default Explore
