import React from 'react';
import './LoginButton.css';
import {useDispatch} from 'react-redux';


function LoginButton() {
  const dispatch = useDispatch();
  const handlerOnCLick = () => {
    dispatch({ type: 'showAuthorizationModal', payload: true });
  };
  return (
    <button className="header__login-button" type="button" onClick={handlerOnCLick}>Login</button>
  );
}

export default LoginButton;
