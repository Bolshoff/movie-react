import React from 'react';
import './Pagination.css';

import PageToggleButton from './PageToggleButton/PageToggleButton';
import PageCounter from './PageCounter/PageCounter';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { DECREMENT_CURRENT_PAGE, INCREMENT_CURRENT_PAGE } from '../../store/actions/actions';
import movieData from '../../movieData';

const Pagination = () => {
  const currentPage = useAppSelector((state) => state.changeCurrentPage.currentPage);
  const cardsPerPage = useAppSelector((state) => state.setCardsPerPage.cardsPerPage);
  const countPages = movieData.length / cardsPerPage;
  const isNextButtonDisable = currentPage === countPages;
  const isPrevButtonDisable = currentPage === 1;

  const dispatch = useAppDispatch();
  const nextPage = () => {
    dispatch({ type: INCREMENT_CURRENT_PAGE, payload: currentPage });
  };
  const prevPage = () => {
    dispatch({ type: DECREMENT_CURRENT_PAGE, payload: currentPage });
  };

  return (

    <div className="pagination">

      <PageToggleButton title="Prev" changePage={prevPage} disabled={isPrevButtonDisable} />
      <PageToggleButton title="Next" changePage={nextPage} disabled={isNextButtonDisable} />
      <PageCounter />

    </div>
  );
};
export default Pagination;
