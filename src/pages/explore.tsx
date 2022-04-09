import { Link as ChakraLink, Text, SimpleGrid } from "@chakra-ui/react"
import { NavBar } from "../components/NavBar"
import { Container } from "../components/Container"
import { Footer } from "../components/Footer"
import { ClubCardTemplate } from "../components/clubCardTemplate"
import { dummy } from "../components/dummy"
import { FilterButton } from "../components/filterButton"
import { useState } from "react"
import {Club} from "../types/Club"


const Explore = ({ clubs }: { clubs: Club[] }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const handleSearchInput = (event) => setSearchQuery(event.target.value)

  return (
    <>
      <NavBar handleSearchInput={handleSearchInput} />
      <Container>
        {searchQuery}
        

        {clubs.map((club) => (<ClubCardTemplate club={club} />))}

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
          {/* <ClubCardTemplate clubInfo={dummy} /> */}
        </SimpleGrid>
        <Footer>
          <Text>Built with ❤ and ☕</Text>
        </Footer>
      </Container>
    </>
  )
}

// This gets called on every request
export async function getStaticProps() {
  // Fetch clubs from external API
  const res = await fetch("https://yaleorgs.com/api/organizations", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDk1MTk4MzAsInN1YiI6ImJtdzUyIn0.5EDjGl1x-fum37VsQzjcWphGODQU-Mg1CtPGJddQ9Yk",
    },
  })
  const clubs = await res.json()

  // Pass clubs to the page via props
  return { props: { clubs } }
}

export default Explore
