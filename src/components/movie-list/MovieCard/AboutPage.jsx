import React from 'react';
import './AboutPage.css';
import {useSelector} from 'react-redux';

const AboutPage = () => {

    const movie = useSelector(state => state.setCurrentMovie.currentMovie);

  return(
  <div className="detail">
    <div className="header-poster">
      <div className="poster-img">
        <img
            className="poster-image"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`${movie.id}.jpg`}
        />
      </div>
      <div className="about-background-image">
        <img
            className="poster-image"
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={`${movie.id}.jpg`}
        />
      </div>

      <div className="about-movie-title">
       <h2>{movie.title}</h2>

        {movie.overview}
        {' '}
        {' '}
        <br/>
        Рейтинг: {movie.vote_average}
      </div>
    </div>


   Дата релиза: {movie.release_date}
    Язык оригинала: {movie.original_language}
    
  </div>
);
};

export default AboutPage;
