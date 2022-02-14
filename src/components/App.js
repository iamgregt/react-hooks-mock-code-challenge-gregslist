import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

const [listings, setListings] = useState([])
const [searchValue, setSearchValue] = useState("")

function handleDeletedListing(deletedListing){
  const updatedListings = listings.filter((listing) => {
    return listing.id !== deletedListing.id
  })
  setListings(updatedListings)
}

function handleSearchChange(value){
  setSearchValue(value.target.value)
}


useEffect(() => {
  fetch('http://localhost:6001/listings')
  .then(r => r.json())
  .then(listings => {
    setListings(listings)
  })
}, [])

  return (
    <div className="app">
      <Header searchValue={searchValue} onSearch={handleSearchChange} />
      <ListingsContainer listings={listings} onDelete={handleDeletedListing} searchValue={searchValue} />
    </div>
  );
}

export default App;
