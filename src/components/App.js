import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((data) => setListings(data));
  }, []);
  console.log(listings);

  function onDeleteClick(deleteditem) {
    const newList = listings.filter((listing) => listing.id !== deleteditem.id);
    setListings(newList);
  }

  function onSearchType(e) {
    setSearchRes(e.target.value);
  }

  const itemsToDisplay = listings.filter((listing) => {
    if (searchRes === "") return true;
    return listing.description.toLowerCase().includes(searchRes.toLowerCase());
  });

  return (
    <div className="app">
      <Header onSearchType={onSearchType} searchRes={searchRes} />
      <ListingsContainer
        listings={itemsToDisplay}
        onDeleteClick={onDeleteClick}
      />
    </div>
  );
}

export default App;
