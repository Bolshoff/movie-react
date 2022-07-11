import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setCurrentMovie} from '../../../store/actions/actions';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const clickOnFavorite = (e) => {
    e.currentTarget.classList.toggle('favorite');
  };
  const clickOnBookmark = (e) => {
    e.currentTarget.classList.toggle('marked');
  };

  const clickOnMoreLink = () => {
    dispatch(setCurrentMovie(movie))

  }

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
        <div className="detailed" onClick={clickOnMoreLink}>
          <Link to={`/${movie.title}`}>Подробнее</Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
