import React, { useState } from 'react';

function Search({ movies, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Check if the search term has at least 2 characters
    if (searchTerm.length < 2) {
      onSearch([]);
      return;
    }
    // onSearched()

    // Filter movies based on the search term
    const filteredMovies = movies.filter(movie =>
      movie.moviename.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update search results in the parent component
    onSearch(filteredMovies);
  };

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input
        type='text'
        placeholder='Search for movie by name'
        className='w-75 py-2'
        data-testid='search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </section>
  );
}

export default Search;
