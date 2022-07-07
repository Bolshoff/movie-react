import React, { useState } from 'react';
import UserData from './userData/userData';
import { useAppDispatch } from '../../../hooks/hooks';

const LoginForm = () => {
  const [username, setUserName] = useState<any>();
  const [password, setPassword] = useState<any>();
  const dispatch = useAppDispatch();

  const setLoginedToLocalstorage = () => {
    try {
      localStorage.setItem('isLogined', 'true');
    } catch (e) {
      alert('Превышен лимит');
    }
  };
  const handlerSubmit = (e: any) => {
    e.preventDefault();
    if (username === UserData.user && password === UserData.password) {
      dispatch({ type: 'login', payload: true });
      dispatch({ type: 'hideAuthorizationModal', payload: false });
      setLoginedToLocalstorage();
    } else alert('Error: Неверное имя пользователя или пароль');
  };
  return (
    <div className="login-form">
      <form onSubmit={handlerSubmit}>
        <label htmlFor="username">
          <p>Username</p>
          <input type="text" id="username" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
