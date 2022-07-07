import React, { FC } from 'react';
import './AuthorizationModal.css';
import { useAppDispatch } from '../../hooks/hooks';
import LoginForm from './LoginForm/LoginForm';

interface AuthorizationModalProps{
 show: boolean
}

const AuthorizationModal: FC<AuthorizationModalProps> = ({ show }) => {
  if (!show) {
    return null;
  }
  const dispatch = useAppDispatch();
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
