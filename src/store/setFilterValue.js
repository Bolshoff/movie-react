
import { SET_SELECT_VALUE } from './actions/actions';


const defaultState = {
  selectValue: 'Популярные по убыванию',
};

const setFilterValue = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SELECT_VALUE:
      return {
        selectValue: action.payload,
      };
    default:
      return state;
  }
};

export default setFilterValue;
