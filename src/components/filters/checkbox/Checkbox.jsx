import React from 'react';
import './Checkbox.css';

import { DELETE_CHECKBOX_FILTER, SET_CHECKBOX_FILTER } from '../../../store/actions/actions';
import {useDispatch} from 'react-redux';


const Checkbox = ({ genre }) => {
  const dispatch = useDispatch();
  const onChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      dispatch({ type: SET_CHECKBOX_FILTER, payload: e.target.value });
    } else {
      dispatch({ type: DELETE_CHECKBOX_FILTER, payload: e.target.value });
    }
  };

  return (
    <div className="checkbox" key={genre.id}>
      <input type="checkbox" value={genre.id} onChange={onChange} />
      {genre.name}
    </div>
  );
};

export default Checkbox;
