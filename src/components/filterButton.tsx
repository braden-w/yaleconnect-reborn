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
    CheckboxGroup,
    useCheckboxGroup,
} from '@chakra-ui/react'

import {useState} from 'react'
import {HamburgerIcon} from '@chakra-ui/icons'

export const FilterButton = () => {
    // state logic for checkbox group
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState('');
    var checkedItems = [];
    const handleChange = (e) => {
        if (e.target.checked) {
            checkedItems.push(e.target.value);
        }
        else {
            checkedItems = checkedItems.filter(item => item !== e.target.value);
        }
    };
    const titles = ["Jobs & Education", "People & Society", "Health", "Arts & Entertainment", "Sports", "Law & Government", "Business & Industrial", "Science", "News", "Finance"]
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<HamburgerIcon />}>
                Filters
            </MenuButton>
            <MenuList>
                <CheckboxGroup>
                    <Stack direction='column' p={2}>
                        <>
                            {titles.map((title, index) => (
                                <Checkbox
                                    key={index}
                                    value={title}
                                    onChange={handleChange}
                                    isChecked={checked}
                                >
                                    {title}
                                </Checkbox>
                            ))}
                        </>
                    </Stack>
                </CheckboxGroup>
            </MenuList>
        </Menu>
    )
}

