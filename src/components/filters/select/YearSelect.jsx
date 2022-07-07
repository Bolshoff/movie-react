import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { SET_YEAR_FILTER_VALUE } from '../../../store/actions/actions';

const YearSelect = () => {
  const yearSelectValue = useAppSelector((state) => state.setYearFilterValue.yearFilterValue);
  const dispatch = useAppDispatch();
  const sortOptions = [
    { key: 2020 },
    { key: 2019 },
    { key: 2018 },
    { key: 2017 },
  ];

  const changeYearFilterValue = (e: any) => {
    dispatch({ type: SET_YEAR_FILTER_VALUE, payload: e.target.value });
  };

  return (
    <select key={yearSelectValue} onChange={changeYearFilterValue}>
      {sortOptions.map((option) => <option key={option.key}>{option.key}</option>)}
    </select>
  );
};
export default YearSelect;
