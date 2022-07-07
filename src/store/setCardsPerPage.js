import { PayloadAction } from '@reduxjs/toolkit';
import { SET_CARDS_PER_PAGE } from './actions/actions';

interface IsetCardsPerPage {
    cardsPerPage: number
}
const defaultState: IsetCardsPerPage = {
  cardsPerPage: 10,
};

const setCardsPerPage = (state = defaultState, action: PayloadAction<number>) => {
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
