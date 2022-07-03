import React from "react";

function Search({ searchRes, onSearchType }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchRes}
        onChange={onSearchType}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
