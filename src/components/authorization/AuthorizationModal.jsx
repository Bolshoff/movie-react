import React from 'react';
import './AuthorizationModal.css';

import LoginForm from './LoginForm/LoginForm';
import {useDispatch} from 'react-redux';



const AuthorizationModal = ({show}) => {
  
  if (!show) {
    return null;
  }
  const dispatch = useDispatch();
  const handlerOnCLick = () => {
    dispatch({ type: 'hideAuthorizationModal', payload: false });
  };
  return (

    <div className="authorization-modal">

      <div className="authorization-modal-content">
        <div className="authorization-modal-header">
          <h4 className="authorization-modal-title">Log in</h4>
          <button className="authorization-modal-close" type="button" onClick={handlerOnCLick}>x</button>
        </div>
        <div className="authorization-modal-body">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default AuthorizationModal;
