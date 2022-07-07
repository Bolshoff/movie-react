import { PayloadAction } from '@reduxjs/toolkit';
import { SET_SORTED_CARDS } from './actions/actions';
import movieData from '../movieData';

interface IsetSortedCards {
 sortedCards: any
}
const defaultState: IsetSortedCards = {
  sortedCards: movieData,
};

const setSortedCards = (state = defaultState, action: PayloadAction<any>) => {
  switch (action.type) {
    case SET_SORTED_CARDS:
      return {
        sortedCards: state.sortedCards,
      };
    default:
      return state;
  }
};

export default setSortedCards;
