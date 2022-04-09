import { Input } from "@chakra-ui/react"
import { useState } from "react"
// Create a round search bar with a dropdown for options to filter with
export function SearchBar() {
  const [value, setValue] = useState("")
  const handleChange = (event) => setValue(event.target.value)
  return (
    <Input
      placeholder="Search Clubs..."
      variant="filled"
      onChange={handleChange}
    />
  )
}
