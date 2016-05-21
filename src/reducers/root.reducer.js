import { combineReducers } from 'redux';
import Login from './login.reducer';

const rootReducer = combineReducers({
  login: Login
});

export default rootReducer;
