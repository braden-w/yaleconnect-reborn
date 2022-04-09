import { Link as ChakraLink, Text, SimpleGrid } from "@chakra-ui/react"
import { NavBar } from "../components/NavBar"
import { Container } from "../components/Container"
import { Footer } from "../components/Footer"
import { ClubCardTemplate } from "../components/clubCardTemplate"
import { dummy } from "../components/dummy"
import { FilterButton } from "../components/filterButton"

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const handleSearchInput = (event) => setSearchQuery(event.target.value)

  return (
    <>
      <NavBar handleSearchInput={handleSearchInput} />
      <Container>
        {searchQuery}
        <FilterButton />
      </Container>

      <Container height="100vh">
        {/* <Hero /> */}
        <SimpleGrid
          minChildWidth="250px"
          spacing={18}
          spacingX={5}
          spacingY={5}
          maxWidth="90%"
        >
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
