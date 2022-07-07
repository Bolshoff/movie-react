import React from 'react';
import './PageToggleButton.css';

interface PageToggleButtonProps{
  title: string,
  changePage: ()=> void,
  disabled: boolean
  }

function PageToggleButton({ title, changePage, disabled }: PageToggleButtonProps) {
  return (

    <button className="page-toggle-button" type="button" onClick={changePage} disabled={disabled}>{title}</button>
  );
}

export default PageToggleButton;
