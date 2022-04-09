import {Input} from "@chakra-ui/react"
// Create a round search bar with a dropdown for options to filter with
export function SearchBar({onSearchInputChanged}) {
  return (
    <Input
      placeholder="Search Clubs..."
      variant="filled"
      onChange={onSearchInputChanged}
    />
  )
}
