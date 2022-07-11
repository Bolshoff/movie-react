
const defaultState = {
  authorizModal: false,
};

const showAuthorizationModal = (state = defaultState, action) => {
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
