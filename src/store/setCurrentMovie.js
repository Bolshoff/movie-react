



const defaultState = {
  currentMovie: null,
};

const setCurrentMovie = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_CURRENT_MOVIE":
      return {
        currentMovie: action.payload,
      };
    default:
      return state;
  }
};

export default setCurrentMovie;
