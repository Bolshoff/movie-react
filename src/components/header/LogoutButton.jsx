import React from 'react';
import './LoginButton.css';
import {useDispatch} from 'react-redux';


function LogoutButton() {
  const dispatch = useDispatch();
  const handlerOnCLick = () => {
    dispatch({ type: 'logout', payload: false });
    localStorage.removeItem('isLogined');
  };
  return (
    <button className="header__login-button" type="button" onClick={handlerOnCLick}>Logout</button>
  );
}

export default LogoutButton;
