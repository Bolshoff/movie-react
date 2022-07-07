import React from 'react';

import './Select.css';

import { SET_SELECT_VALUE } from '../../../store/actions/actions';
import {useDispatch, useSelector} from "react-redux";

const SortSelect = () => {
  const sortSelectValue = useSelector((state) => state.setFilterValue.selectValue);
  const isLogined = useSelector((state) => state.setLoginedUser.loginedUser);
  const dispatch = useDispatch();
  const sortOptions = [
    { key: 'Популярные по убыванию', type: 'popularityToLow' },
    { key: 'Популярные по возрастанию', type: 'popularityToUp' },
    { key: 'Рейтинг по убыванию', type: 'ratingToLow' },
    { key: 'Рейтинг по возрастанию', type: 'ratingToUp' },
  ];

  const isLoginedSortOptions = [
    { key: 'Избранные', type: 'favorites' },
    { key: 'Смотреть позже', type: 'watchlataer' },
  ];
  if (isLogined) {
    sortOptions.push(...isLoginedSortOptions);
  }

  const changeFilterValue = (e) => {
    dispatch({ type: SET_SELECT_VALUE, payload: e.target.value });
  };

  return (
    <select key={sortSelectValue} onChange={changeFilterValue}>
      {sortOptions.map((option) => <option key={option.key}>{option.key}</option>)}
    </select>
  );
};
export default SortSelect;
