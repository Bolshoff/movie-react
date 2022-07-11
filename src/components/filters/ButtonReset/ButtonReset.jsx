import React from 'react';
import './ButonReset.css';
import { SET_SELECT_VALUE, SET_YEAR_FILTER_VALUE } from '../../../store/actions/actions';
import {useDispatch} from 'react-redux';

const ButtonReset = () => {
  const dispatch = useDispatch();
  const resetFilters = () => {
    dispatch({ type: SET_YEAR_FILTER_VALUE, payload: 2020 });
    dispatch({ type: SET_SELECT_VALUE, payload: 'Популярные по убыванию' });
  };
  return (

    <button className="button-filters-reset" type="button" onClick={resetFilters}>Сбросить все фильтры</button>
  );
};

export default ButtonReset;
