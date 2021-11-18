import { useState } from "react";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

import { store } from "../app/store";
import { clearSkip, setFilter, useAppDispatch } from "../features/store";

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");
  return (
    <FormControl class="searchField" action="/" method="get">
      <FormLabel className="label" htmlFor="query"></FormLabel>
      <Input
        type="text"
        name="query"
        placeholder={"Søk etter Pokémon!"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        mt={3}
        size="md"
        colorScheme="teal"
        w="full"
        type="submit"
        onClick={() => {
          console.log(store.getState(), query);
          dispatch(setFilter(query));
          dispatch(clearSkip());
        }}
      >
        {" "}
        Search{" "}
      </Button>
    </FormControl>
  );
};
