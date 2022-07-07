import React, { FC } from 'react';
import './MovieList.css';
import MovieCard from './MovieCard/MovieCard';
import { IMovies } from '../../types/types';

interface MovieListProps{
    movies: IMovies[]
}

const MovieList:FC<MovieListProps> = ({ movies }) => (
  <div className="movie-list">
    {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}

  </div>
);

export default MovieList;
