import {SET_SEARCH_MOVIE} from './actions/actions';

const defaultState = {
  searchMovies:[],
};

const searchMovies = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEARCH_MOVIE:
      return {

        searchMovies:  action.payload
      };
    default:
      return state;
  }
};

export default searchMovies;
