import React, { FC } from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';
import { IMovies } from '../../../types/types';

interface MovieCardProps{
    movie: IMovies,
    }

const MovieCard:FC<MovieCardProps> = ({ movie }) => {
  const clickOnFavorite = (e:any) => {
    e.currentTarget.classList.toggle('favorite');
  };
  const clickOnBookmark = (e:any) => {
    e.currentTarget.classList.toggle('marked');
  };

  return (
    <div className="movie-card" key={movie.id}>
      <div className="poster">
        <img
          className="poster-image"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`${movie.id}.jpg`}
        />
      </div>
      <div className="description">
        <div className="usertools">
          <span className="rating">
            {' '}
            Рейтинг:
            {' '}
            {movie.vote_average}
          </span>

          <span
            className="favorite-icon"
            onClick={clickOnFavorite}
            role="button"
            tabIndex={0}
            aria-label="add favorite"
            onKeyDown={clickOnFavorite}
          />
          <span
            className="bookmark-icon"
            onClick={clickOnBookmark}
            role="button"
            tabIndex={0}
            aria-label="add favorite"
            onKeyDown={clickOnBookmark}
          />
        </div>
        <div className="movie-title">{movie.title}</div>
        <div className="detailed">
          <Link to={`/testPage${movie.title}`}>Подробнее</Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
