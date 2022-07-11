
import { SET_YEAR_FILTER_VALUE } from './actions/actions';


const defaultState = {
  yearFilterValue: 2020,
};

const setYearFilterValue = (state = defaultState, action) => {
  switch (action.type) {
    case SET_YEAR_FILTER_VALUE:
      return {
        yearFilterValue: action.payload,
      };
    default:
      return state;
  }
};

export default setYearFilterValue;
