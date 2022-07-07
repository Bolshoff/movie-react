import React from 'react';
import './LoginButton.css';
import { useAppDispatch } from '../../hooks/hooks';

function LogoutButton() {
  const dispatch = useAppDispatch();
  const handlerOnCLick = () => {
    dispatch({ type: 'logout', payload: false });
    localStorage.removeItem('isLogined');
  };
  return (
    <button className="header__login-button" type="button" onClick={handlerOnCLick}>Logout</button>
  );
}

export default LogoutButton;
