import React from 'react';
import './LoginButton.css';
import { useAppDispatch } from '../../hooks/hooks';

function LoginButton() {
  const dispatch = useAppDispatch();
  const handlerOnCLick = () => {
    dispatch({ type: 'showAuthorizationModal', payload: true });
  };
  return (
    <button className="header__login-button" type="button" onClick={handlerOnCLick}>Login</button>
  );
}

export default LoginButton;
