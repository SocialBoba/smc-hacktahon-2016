import { combineReducers } from 'redux';
import Login from './login.reducer';
import Signup from './signup.reducer';

const rootReducer = combineReducers({
  login: Login,
  signup: Signup
});

export default rootReducer;
