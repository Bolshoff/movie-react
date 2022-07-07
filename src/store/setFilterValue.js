import { PayloadAction } from '@reduxjs/toolkit';
import { SET_SELECT_VALUE } from './actions/actions';

interface IsetFilterValue{
    selectValue: string
}
const defaultState: IsetFilterValue = {
  selectValue: 'Популярные по убыванию',
};

const setFilterValue = (state = defaultState, action: PayloadAction<string>) => {
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
