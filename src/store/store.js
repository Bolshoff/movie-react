import { combineReducers, createStore } from 'redux';
import changeCurrentPage from './changeCurrentPage';
import setCardsPerPage from './setCardsPerPage';
import setSortedCards from './setSortedCards';
import setFilterValue from './setFilterValue';
import setYearFilterValue from './setYearFilterValue';
import setCheckboxFilter from './setCheckboxFilter';
import showAuthorizationModal from './showAuthorizationModal';
import setLoginedUser from './setLoginedUser';

const rootReducer = combineReducers({
  changeCurrentPage,
  setCardsPerPage,
  setSortedCards,
  setFilterValue,
  setYearFilterValue,
  setCheckboxFilter,
  showAuthorizationModal,
  setLoginedUser,
});
const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;
