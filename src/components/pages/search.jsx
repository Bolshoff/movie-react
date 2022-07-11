import React, {useState} from 'react';
import { genres } from '../../genreList';
import './search.css';
// import {SET_SELECT_VALUE} from '../../store/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
// import setSearchParametrs from '../../store/setSearchParametrs';
import {SET_SEARCH_MOVIE, setCurrentMovie} from '../../store/actions/actions';
import {Link} from 'react-router-dom';
const Search = () => {

  const movieData = useSelector((state) => state.setSortedCards.sortedCards);
   const searchMovie = useSelector(state => state.searchMovies.searchMovies);
   const dispatch = useDispatch();
   const [recomendMovieCount, setrecomendMovieCount] = useState(0);
   const handleCancelClick = () =>{
     if(searchMovie.length -1 === recomendMovieCount)setrecomendMovieCount( 0);
     setrecomendMovieCount(prevCount => prevCount +1);
   }
  const clickOnApply = () => {
    dispatch(setCurrentMovie(searchMovie[recomendMovieCount]))
  }
  const rating = [
    {rating: "low", name: "Низкий"},
    {rating: "hi", name: "Высокий"},
  ];
  const popularity = [
    {popularity: "low", name: "Непопулярный", id:1},
    {popularity: "hi", name: "Популярный", id:2},
  ];

  const changeGenreValue = (e) => {
    const currentGenre = genres.filter((genre) => genre.name === e.target.value)
  const search =  movieData.filter(movie => movie.genre_ids.includes(currentGenre[0].id))
     dispatch({type:SET_SEARCH_MOVIE, payload: search});

  };

  const changeRatingValue = (e) => {

    const ratingSearch = searchMovie.filter((movie) => {
      if(e.target.value === "Непопулярный" ){
       return  movie.vote_average < 5;
      }else  return  movie.vote_average > 5;

    } );
    dispatch({type:SET_SEARCH_MOVIE, payload: ratingSearch});
    console.log(ratingSearch);
    console.log(searchMovie);

  };
  return (
      <div className='search-page'>
       <div className="search-genre">
         <h3>Выберите жанр:</h3>
         <select key={genres.id} onChange={changeGenreValue}>
           {genres.map((genre) => <option key={genre.id}>{genre.name}</option>)}
         </select>
       </div>
        <div className="search-rating">
          <h3>Оценка фильма:</h3>
          <select key={rating.id} onChange={changeRatingValue} >
            {rating.map((rate) => <option key={rate.id}>{rate.name}</option>)}
          </select>
        </div>
        <div className="search-popularity">
          <h3>Популярность:</h3>
          <select key={popularity.popularity} >
            {popularity.map((popular) => <option key={popular.rating}>{popular.name}</option>)}
          </select>
        </div>

        {
          searchMovie.length > 0 &&
          <div className="recommend-movie">
            <div className="movie-card" >
              <div className="poster">
                <img
                    className="poster-image"
                    src={`https://image.tmdb.org/t/p/w500/${searchMovie[recomendMovieCount].poster_path}`}
                    alt={`${searchMovie[recomendMovieCount].id}.jpg`}
                />
              </div>
              <div className="description">
                <div className="usertools">
          <span className="rating">
            {' '}
            Рейтинг:
            {' '}
            {searchMovie[recomendMovieCount].vote_average}
          </span>
                  <span
                      className="favorite-icon"

                      role="button"
                      tabIndex={0}
                      aria-label="add favorite"

                  />
                  <span
                      className="bookmark-icon"

                      role="button"
                      tabIndex={0}
                      aria-label="add favorite"

                  />
                </div>
                <div className="movie-title">{searchMovie[recomendMovieCount].title}</div>

              </div>
            </div>
            <div className="cancel-button"><button onClick={handleCancelClick} >Не подходит</button></div>
            <div className="apply-button"><button onClick={clickOnApply} ><Link to={`/${searchMovie[recomendMovieCount].title}`}>Подходит</Link></button></div>

          </div>
        }

      </div>
  );
};

export default Search;