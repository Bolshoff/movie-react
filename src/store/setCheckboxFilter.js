import { PayloadAction } from '@reduxjs/toolkit';
import { DELETE_CHECKBOX_FILTER, SET_CHECKBOX_FILTER } from './actions/actions';

interface IsetCheckboxFilter{
    checkboxFilter: any
}
const defaultState: IsetCheckboxFilter = {
  checkboxFilter: [],
};

const setCheckboxFilter = (state = defaultState, action: PayloadAction<any>) => {
  // const { index } = action.payload;
  switch (action.type) {
    case SET_CHECKBOX_FILTER:
      return {

        checkboxFilter: [...state.checkboxFilter, action.payload],
      };
    case DELETE_CHECKBOX_FILTER:

      return {
        //
      //   checkboxFilter: [...state.checkboxFilter.slice(0, index),
      //     ...state.checkboxFilter.slice(index + 1)],

        checkboxFilter: state.checkboxFilter.filter(
          (checkbox: any) => checkbox.value !== action.payload.value,
        ),
      };
      //   checkboxFilter: state.checkboxFilter
      //     .filter((item:any, index: any) => index !== action.payload.index),
      // };
    default:
      return state;
  }
};

export default setCheckboxFilter;
