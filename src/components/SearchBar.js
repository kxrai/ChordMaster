import React, { useState } from "react";
import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <TextInput
      placeholder="Search chords..."
      icon={<IconSearch />}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      mt="md"
    />
  );
}

export default SearchBar;
