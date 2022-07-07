import { PayloadAction } from '@reduxjs/toolkit';

interface ILoginedUser {
    loginedUser: boolean
}
const defaultState: ILoginedUser = {
  loginedUser: false,
};

const setLoginedUser = (state = defaultState, action: PayloadAction<boolean>) => {
  switch (action.type) {
    case 'login':
      return {
        loginedUser: true,
      };
    case 'logout':
      return {
        loginedUser: false,
      };
    default:
      return state;
  }
};

export default setLoginedUser;
