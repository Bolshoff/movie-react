import React from 'react';

import { SET_YEAR_FILTER_VALUE } from '../../../store/actions/actions';
import {useDispatch, useSelector} from 'react-redux';

const YearSelect = () => {
  const yearSelectValue = useSelector((state) => state.setYearFilterValue.yearFilterValue);
  const dispatch = useDispatch();
  const sortOptions = [
    { key: 2020 },
    { key: 2019 },
    { key: 2018 },
    { key: 2017 },
  ];

  const changeYearFilterValue = (e) => {
    dispatch({ type: SET_YEAR_FILTER_VALUE, payload: e.target.value });
  };

  return (
    <select key={yearSelectValue} onChange={changeYearFilterValue}>
      {sortOptions.map((option) => <option key={option.key}>{option.key}</option>)}
    </select>
  );
};
export default YearSelect;
