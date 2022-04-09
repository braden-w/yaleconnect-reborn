import { Input } from "@chakra-ui/react"
import { ChangeEventHandler } from "react"
// Create a round search bar with a dropdown for options to filter with
export function SearchBar({ handleSearchInput }) {
  return (
    <Input
      placeholder="Search Clubs..."
      variant="filled"
      onChange={handleSearchInput}
    />
  )
}
