import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import './App.css';
import Filters from './components/filters/Filters';
import MovieList from './components/movie-list/MovieList';


import AuthorizationModal from './components/authorization/AuthorizationModal';

import AboutPage from './components/movie-list/MovieCard/AboutPage';
import {useDispatch, useSelector} from 'react-redux';
import Search from './components/pages/search';

const App = () => {
  const currentPage = useSelector((state) => state.changeCurrentPage.currentPage);
  const cardsPerPage = useSelector((state) => state.setCardsPerPage.cardsPerPage);
  const movieData = useSelector((state) => state.setSortedCards.sortedCards);
  const selectValue = useSelector((state) => state.setFilterValue.selectValue);
  const yearSelectValue = useSelector((state) => state.setYearFilterValue.yearFilterValue);
  const authorizationModal = useSelector((state) => state.showAuthorizationModal.authorizModal);

  const dispatch = useDispatch();
  let sortedMovies = movieData.filter((item) => {
    if (selectValue === 'Избранное') {
      return item.className === 'favorite';
    }
    if (selectValue === 'Смотреть позже') {
      return item.className === 'marked';
    }
    return item;
  })
      .sort((a, b) => {
        if (selectValue === 'Популярные по убыванию') {
          return b.popularity - a.popularity;
        }
        if (selectValue === 'Рейтинг по убыванию') {
          return b.vote_average - a.vote_average;
        }
        if (selectValue === 'Рейтинг по возрастанию') {
          return a.vote_average - b.vote_average;
        }
        if (selectValue === 'Популярные по возрастанию') {
          return a.popularity - b.popularity;
        }
        return a.popularity - b.popularity;
      }).filter((item) => item.release_date.split('-')[0].includes(String(yearSelectValue)));

  if (selectValue === 'Избранное') { sortedMovies = movieData.filter((item) => item.className === 'favorite'); }

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = sortedMovies.slice(indexOfFirstCard, indexOfLastCard);

  useEffect(() => {
    const isLogined = JSON.parse(localStorage.getItem('isLogined'));
    if (isLogined) { dispatch({ type: 'login', payload: true }); }
  }, []);

  return (
      <div className="app">
        <Header />
        <div className="app-wrapper">

          <Filters />
          <MovieList movies={currentCards} />
          <AuthorizationModal  show={authorizationModal}/>
        </div>
        <Routes>

          <Route  path="/:title" element={<AboutPage />} />
          <Route  path="/search" element={<Search />} />
        </Routes>
      </div>

  );
};

export default App;
