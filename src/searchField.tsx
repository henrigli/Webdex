import React, { useState } from "react";
import {
    Button,
    FormControl,
    FormLabel,
    Input
  } from "@chakra-ui/react"

const SearchField = () => {
    const [query, setQuery] = useState("");
    console.log(query)
    return (
        <FormControl class="searchField" action="/" method="get">
            <FormLabel className="label" htmlFor="query">Søk etter Pokémon!</FormLabel>
            <Input type="text" name="query" placeholder={"Søk etter Pokémon!"} value= {query} onChange={(e) => setQuery(e.target.value)} />
            <Button size="md" colorScheme="teal" w="full" type="submit"> Submit </Button>
        </FormControl>
  );
}

export default SearchField;