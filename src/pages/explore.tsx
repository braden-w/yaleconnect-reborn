import {Text, SimpleGrid, Box} from "@chakra-ui/react"
import {NavBar} from "../components/NavBar"
import {Container} from "../components/Container"
import {Footer} from "../components/Footer"
import {ClubCardTemplate} from "../components/ClubCard"
import {useState} from "react"
import {Club} from "../types/Club"


const filterList = (query, list) => {
  if (query === '') return list
  return list.filter((club) => club.name.toLowerCase().includes(query.toLowerCase())) ||
    list.filter((club) => club.goals.toLowerCase().includes(query.toLowerCase())) ||
    list.filter((club) => club.type.toLowerCase().includes(query.toLowerCase()))

}
const Explore = ({clubs}: {clubs: Club[]}) => {
  const [searchQuery, setSearchQuery] = useState("")
  const handleSearchInput = (event) => setSearchQuery(event.target.value)
  const filteredClubs = filterList(searchQuery, clubs);

  return (
    <>
      <NavBar handleSearchInput={handleSearchInput} />
      <Container>
      </Container>
      {/* <Hero /> */}
      <Box p='5'>
        <SimpleGrid
          minChildWidth='280px'
          spacing='2'
        >
          {filteredClubs.map((club) => (<ClubCardTemplate club={club} />))}
        </SimpleGrid>
        <Footer>
          <Text>Built with ❤ and ☕</Text>
        </Footer>
      </Box>

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
  return {
    props: {clubs},
    // Revalidates the page every 10 seconds
    revalidate: 10,
  }
}

export default Explore
