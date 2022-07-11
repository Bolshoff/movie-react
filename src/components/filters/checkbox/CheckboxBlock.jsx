import './CheckboxBlock.css';
import React from 'react';

import Checkbox from './Checkbox';


const CheckboxBlock = ({genres}) => (
  <div className="checkbox-block">
    {genres.map((genre) => (
      <Checkbox genre={genre} key={genre.id} />
    ))}
  </div>
);
export default CheckboxBlock;
