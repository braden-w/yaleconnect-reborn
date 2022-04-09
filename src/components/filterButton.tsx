import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Stack,
    Checkbox,
    useCheckbox,
  } from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

export const FilterButton = () => {
    return (
            <Menu>
            <MenuButton as={Button} rightIcon={<HamburgerIcon />}>
                Filters
            </MenuButton>
            <MenuList>
                <Stack spacing={5} direction='column'>
                    <Checkbox>Checkbox</Checkbox>
                    <Checkbox>Checkbox</Checkbox>
                </Stack>
            </MenuList>
            </Menu>
            )   
}
        

