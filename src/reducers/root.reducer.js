import { combineReducers } from 'redux';

function test(){
  return {book: 1};
}
const rootReducer = combineReducers({
  list: test
});

export default rootReducer;
