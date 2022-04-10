import {Text, SimpleGrid, Box} from "@chakra-ui/react"
import {NavBar} from "../components/NavBar"
import {Container} from "../components/Container"
import {Footer} from "../components/Footer"
import {Children, useEffect, useMemo, useState} from "react"
import useSWR from 'swr'
import {Club} from "../types/Club"
import {MemoizedClubCardTemplate} from "../components/ClubCard"


// Filter list of clubs based on search query
const filterList = (query, list) => {
  // return list where website is not null
  if (query === '') return list
  return list.filter(club => club.name.toLowerCase().includes(query.toLowerCase()) || club.mission.toLowerCase().includes(query.toLowerCase()))
}

const fetcher = url => fetch(url, {
  method: "POST",
  headers: {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDk1MTk4MzAsInN1YiI6ImJtdzUyIn0.5EDjGl1x-fum37VsQzjcWphGODQU-Mg1CtPGJddQ9Yk",
  },
}).then(r => r.json())

const Defer = ({chunkSize, children}) => {
  const [renderedItemsCount, setRenderedItemsCount] = useState(chunkSize);

  const childrenArray = useMemo(() => Children.toArray(children), [
    children
  ]);

  useEffect(() => {
    if (renderedItemsCount < childrenArray.length) {
      window.requestIdleCallback(
        () => {
          setRenderedItemsCount(
            Math.min(renderedItemsCount + chunkSize, childrenArray.length)
          );
        },
        {timeout: 200}
      );
    }
  }, [renderedItemsCount, childrenArray.length, chunkSize]);

  return <>{childrenArray.slice(0, renderedItemsCount)}</>;
};


const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const setSearchInput = (event) => setSearchQuery(event.target.value)
  const onSearchInputChanged = setSearchInput

  const {data: clubs} = useSWR<Club[]>("https://yaleorgs.com/api/organizations", fetcher);
  const filteredClubs = useMemo(() => filterList(searchQuery, clubs), [searchQuery, clubs])

  return (
    <>
      <NavBar onSearchInputChanged={onSearchInputChanged} />
      <Container>
      </Container>
      {/* <Hero /> */}
      <Box p='5'>
        <SimpleGrid minChildWidth='280px' spacing='2'>
          <Defer chunkSize={30}>
            {filteredClubs && filteredClubs.map(club => <MemoizedClubCardTemplate key={club.id} club={club} />)}
          </Defer>
        </SimpleGrid>
        <Footer>
          <Text>Built with ❤ and ☕</Text>
        </Footer>
      </Box>

    </>
  )
}

export default Explore

// Debounce function call
function debounce(debouncedFunction, milliseconds) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      debouncedFunction.apply(this, args);
    }, milliseconds);
  };
}

