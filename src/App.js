import React from 'react'
import { useState } from 'react'
import './App.css'
import 'h8k-components'

import { Movieslist, Search } from './components'
import Movieform1 from './components/Movieform1'

const title = 'Favorite Movie Directory'

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const handleSearchResults = (results) => {
    setFilteredMovies(results);
  };

  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          {/* <Movieform addMovie={addMovie}/> */}
          <Movieform1/>
        </div>
        <div className='layout-column w-30'>
          <Search movies={movies} onSearch={handleSearchResults}/>
          <Movieslist movies={filteredMovies.length > 0 ? filteredMovies : movies}/> 
          {/* {searchResults.length === 0 && searchResults.length >= 2 && (
        <div data-testid='noResult'>
          <h3 className='text-center'>No Results Found</h3>
        </div>
      )}

      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((movie, index) => (
            <li key={index}>{movie.name}</li>
          ))}
        </ul>
      )} */}
        </div>
      </div> 
    </div>
  )
}

export default App;
