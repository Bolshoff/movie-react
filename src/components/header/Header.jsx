import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import { useAppSelector } from '../../hooks/hooks';
import LogoutButton from './LogoutButton';

const Header = () => {
  const logined = useAppSelector((state) => state.setLoginedUser.loginedUser);

  let button;
  if (!logined) {
    button = <LoginButton />;
  } else {
    button = <LogoutButton />;
  }
  return (

    <div className="header">
      <Link to="/">Home</Link>
      {button}

    </div>
  );
};

export default Header;
