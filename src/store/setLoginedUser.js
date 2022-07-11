
const defaultState = {
  loginedUser: false,
};

const setLoginedUser = (state = defaultState, action) => {
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
