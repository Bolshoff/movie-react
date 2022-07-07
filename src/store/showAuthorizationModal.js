import { PayloadAction } from '@reduxjs/toolkit';

interface IshowAuthorizationModal {
    authorizModal: boolean
}
const defaultState: IshowAuthorizationModal = {
  authorizModal: false,
};

const showAuthorizationModal = (state = defaultState, action: PayloadAction<number>) => {
  switch (action.type) {
    case 'showAuthorizationModal':
      return {
        authorizModal: true,
      };
    case 'hideAuthorizationModal':
      return {
        authorizModal: false,
      };
    default:
      return state;
  }
};

export default showAuthorizationModal;
