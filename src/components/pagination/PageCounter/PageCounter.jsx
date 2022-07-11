import React from 'react';
import './PageCounter.css';

import movieData from '../../../movieData';
import {useSelector} from 'react-redux';

function PageCounter() {
  const currentPage = useSelector((state) => state.changeCurrentPage.currentPage);
  const cardsPerPage = useSelector((state) => state.setCardsPerPage.cardsPerPage);
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
