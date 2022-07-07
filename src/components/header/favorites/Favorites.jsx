import React from 'react';
import './Favorites.css';

const Favorites = () => {
  const handleClick = () => {
    console.log('favorites');
  };
  return (
    <div>
      <button className="button_show-favorites" onClick={handleClick} type="button">Избранное</button>
    </div>
  );
};

export default Favorites;
