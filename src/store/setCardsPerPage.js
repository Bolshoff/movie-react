
import { SET_CARDS_PER_PAGE } from './actions/actions';


const defaultState = {
  cardsPerPage: 10,
};

const setCardsPerPage = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CARDS_PER_PAGE:
      return {
        cardsPerPage: state.cardsPerPage,
      };
    default:
      return state;
  }
};

export default setCardsPerPage;
