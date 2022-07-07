import './CheckboxBlock.css';
import React, { FC } from 'react';
import { ICheckBox } from '../../../types/types';
import Checkbox from './Checkbox';

interface CheckBoxProps {
    genres: ICheckBox[]
}
const CheckboxBlock: FC<CheckBoxProps> = ({ genres }) => (
  <div className="checkbox-block">
    {genres.map((genre) => (
      <Checkbox genre={genre} key={genre.id} />
    ))}
  </div>
);
export default CheckboxBlock;
