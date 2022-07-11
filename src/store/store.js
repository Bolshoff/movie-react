import { combineReducers, createStore } from 'redux';
import changeCurrentPage from './changeCurrentPage';
import setCardsPerPage from './setCardsPerPage';
import setSortedCards from './setSortedCards';
import setFilterValue from './setFilterValue';
import setYearFilterValue from './setYearFilterValue';
import setCheckboxFilter from './setCheckboxFilter';
import showAuthorizationModal from './showAuthorizationModal';
import setLoginedUser from './setLoginedUser';
import setCurrentMovie from './setCurrentMovie';
import searchMovies from './setSearchParametrs';

const rootReducer = combineReducers({
  changeCurrentPage,
  setCardsPerPage,
  setSortedCards,
  setFilterValue,
  setYearFilterValue,
  setCheckboxFilter,
  showAuthorizationModal,
  setLoginedUser,
  setCurrentMovie,
  searchMovies
});
const store = createStore(rootReducer);


export default store;
