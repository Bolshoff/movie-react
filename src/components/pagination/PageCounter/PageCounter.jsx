import React from 'react';
import './PageCounter.css';
import { useAppSelector } from '../../../hooks/hooks';
import movieData from '../../../movieData';

function PageCounter() {
  const currentPage = useAppSelector((state) => state.changeCurrentPage.currentPage);
  const cardsPerPage = useAppSelector((state) => state.setCardsPerPage.cardsPerPage);
  const countPages = Math.ceil(movieData.length / cardsPerPage);
  return (

    <div className="page-counter">
      <span>
        {currentPage}
        {' '}
      </span>
      of
      <span>
        {' '}
        {countPages}
      </span>
    </div>
  );
}

export default PageCounter;
