import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useAppDispatch, setSort } from "../features/store";

export const SortDropdownMenu = () => {
  const dispatch = useAppDispatch();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Sort by...
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => dispatch(setSort("id"))}>ID</MenuItem>
        <MenuItem onClick={() => dispatch(setSort("name"))}>Name</MenuItem>
        <MenuItem onClick={() => dispatch(setSort("height"))}>Height</MenuItem>
        <MenuItem onClick={() => dispatch(setSort("weight"))}>Weight</MenuItem>
      </MenuList>
    </Menu>
  );
};
