import { PayloadAction } from '@reduxjs/toolkit';
import { INCREMENT_CURRENT_PAGE, DECREMENT_CURRENT_PAGE } from './actions/actions';

interface IChangePage {
  currentPage: number
}
const defaultState: IChangePage = {
  currentPage: 1,
};

const changeCurrentPage = (state = defaultState, action: PayloadAction<number>) => {
  switch (action.type) {
    case INCREMENT_CURRENT_PAGE:
      return {
        currentPage: state.currentPage + 1,
      };
    case DECREMENT_CURRENT_PAGE:
      return {
        currentPage: state.currentPage - 1,
      };

    default:
      return state;
  }
};

export default changeCurrentPage;
