
import { SET_SORTED_CARDS } from './actions/actions';
import movieData from '../movieData';


const defaultState = {
  sortedCards: movieData,
};

const setSortedCards = (state = defaultState, action) => {
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
