import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import "h8k-components";

import { Movieform2, Movieslist, Search } from "./components";

const title = "Favorite Movie Directory";

function App() {
  const [movies, setMovie] = useState([])
  const [filter, setFilter] = useState([])
  const addMovie = (newMovie) =>{
    setMovie([...movies, newMovie])
  }
  useEffect(() => {
    setFilter(movies);
  }, [movies])
  const handleFilter = (event) =>{
    const searchedWord = event.target.value;
    const newFilter = movies.filter((value) => {
      return value.moviename.toLowerCase().includes(searchedWord.toLowerCase())
    })
    setFilter(newFilter)
  }

  return (
    <div>
      <h8k-navbar header={title} />
      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          {/* <Movieform addMovie={addMovie}/> */}
          <Movieform2 addMovie={addMovie} />
        </div>
        <div className="layout-column w-30">
          <Search
            data={movies} handleFilter={handleFilter}
          />
          <Movieslist
            movies={filter}
          />

          {/* {movies.length === 0 && filteredMovies.length === 0 ? (
            <div data-testid="noResult">
              <h3 className="text-center">Add Movies</h3>
            </div>
          ) : filteredMovies.length === 0 ? (
            <div data-testid="noResult">
              <h3 className="text-center">No Search Results Found</h3>
            </div>
          ) : null} */}
        </div>
      </div>
    </div>
  );
}

export default App;
