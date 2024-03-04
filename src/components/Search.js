import React from 'react';

function Search({ movies, handleFilter }) {

  

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input
        type="text"
        placeholder="Enter your search"
        className='w-75 py-2'
        data-testid='search'
        onChange={handleFilter}
      />
      <button>Search</button>
    </section>
  );
}

export default Search;
