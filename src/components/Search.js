import React from "react";

function Search({onSearch}) {
  function handleSearch(e) {
    onSearch(e.target.value);
  };
  
  return (
    <div className="filter">
      <input 
        onChange={handleSearch}
        id="search-bar" 
        type="text" 
        placeholder="Search Notes" />
    </div>
  );
}

export default Search;
