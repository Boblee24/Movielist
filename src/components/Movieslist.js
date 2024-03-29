import React from 'react'

function Movieslist(props) {
  return (
    <section>
      <ul className='styled w-100 pl-0' data-testid='moviesList'>
      {props.movies.length !== 0 ? (
        props.movies.map((movie, index) => (
        <li
          key={index}
          className='flex slide-up-fade-in justify-content-between'
          style={{ borderBottom: '2px solid var(--primary-color)' }}
        >
          <div className='layout-column w-40'>
            <h3 className='my-3'>{movie.moviename}</h3>
            <p className='my-0'>Ratings: {movie.rating}/100</p>
          </div>
          <div className='layout-row my-auto mr-20'>
            <p className='justify-content-end'>{movie.duration}</p>
          </div>
        </li>
      ))
      ) : "No result found"}
    </ul>
    </section>
  )
}

export default Movieslist;
