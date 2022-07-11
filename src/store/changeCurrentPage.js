
import { INCREMENT_CURRENT_PAGE, DECREMENT_CURRENT_PAGE } from './actions/actions';


const defaultState = {
  currentPage: 1,
};

const changeCurrentPage = (state = defaultState, action) => {
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
