import React from 'react';
import './MovieList.css';
import MovieCard from './MovieCard/MovieCard';




const MovieList = ({ movies }) => (
  <div className="movie-list">
    {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}

  </div>
);

export default MovieList;
