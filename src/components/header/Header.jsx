import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

import LogoutButton from './LogoutButton';
import {useSelector} from 'react-redux';

const Header = () => {
  const logined = useSelector((state) => state.setLoginedUser.loginedUser);

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
      <Link to="/search">Search</Link>

    </div>
  );
};

export default Header;
