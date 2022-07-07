import React, { FC } from 'react';
import './Checkbox.css';
import { ICheckBox } from '../../../types/types';
import { useAppDispatch } from '../../../hooks/hooks';

import { DELETE_CHECKBOX_FILTER, SET_CHECKBOX_FILTER } from '../../../store/actions/actions';

interface CheckboxProps {
  genre: ICheckBox;
}
const Checkbox: FC<CheckboxProps> = ({ genre }) => {
  const dispatch = useAppDispatch();
  const onChange = (e: any) => {
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
