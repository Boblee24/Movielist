import React from 'react'
import { useState } from 'react'
import './App.css'
import 'h8k-components'

import { Movieform2, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searched, setSearched] = useState(true)


  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const handleSearchResults = (results) => {
    if(results === 0){
      setFilteredMovies(movies)
    }
    setFilteredMovies(results);
  };
  const handleSearched = () => {
    if(movies.length === 0){
      setSearched(false)
    }
    else if (filteredMovies.length===0){
      setSearched(false)
    }
  }
  console.log('Movies:',movies);

  console.log("filter", filteredMovies)
  

  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          {/* <Movieform addMovie={addMovie}/> */}
          <Movieform2 addMovie = {addMovie}/>
        </div>
        <div className='layout-column w-30'>
          <Search movies={movies} onSearch={handleSearchResults} handleSearched={handleSearched}/>
          <Movieslist movies={filteredMovies.length > 0  ? filteredMovies : movies}/> 
         
        { searched && <div data-testid='noResult'>
          <h3 className='text-center'>No Results Found</h3>
        </div>}
        </div>
      </div> 
    </div>
  )
}

export default App;
