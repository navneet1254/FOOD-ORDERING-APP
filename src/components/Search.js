import React from 'react';

function Search({ handleSearch }) {
  return (
    <input
      className="form-control ml-sm-2"
      type="text"
      placeholder="Search..."
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}

export default Search;
