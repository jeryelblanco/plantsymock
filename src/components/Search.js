import React from "react";

function Search({setSearch}) {
  /////////////////set an onChange to set my search state which is passed as a prop ////////
  function change(e){
  setSearch(e.target.value)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={change}
      />
    </div>
  );
}

export default Search;
