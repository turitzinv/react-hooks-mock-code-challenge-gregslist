import React, { useState } from "react";

function Search({onSearchFilter}) {
  const [search, newSearch] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    onSearchFilter(search)
    newSearch("") //to clear form
  }

  function handleSearch(addedSearch) {
    newSearch(addedSearch);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

//onSubmit to grab a specific card?
//handleSubmit needs to be onSubmit within the button.
