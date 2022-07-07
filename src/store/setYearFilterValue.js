import { PayloadAction } from '@reduxjs/toolkit';
import { SET_YEAR_FILTER_VALUE } from './actions/actions';

interface IsetYearFilterValue{
    yearFilterValue: number
}
const defaultState: IsetYearFilterValue = {
  yearFilterValue: 2020,
};

const setYearFilterValue = (state = defaultState, action: PayloadAction<number>) => {
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
