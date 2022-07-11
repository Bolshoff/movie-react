import React from 'react';
import './PageToggleButton.css';


function PageToggleButton({ title, changePage, disabled }) {
  return (

    <button className="page-toggle-button" type="button" onClick={changePage} disabled={disabled}>{title}</button>
  );
}

export default PageToggleButton;
