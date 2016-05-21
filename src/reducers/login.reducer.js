import { LOGIN_YOUTH, LOGIN_MENTOR } from '../actions/login.action';

const INITIAL_STATE = {id: null, token: ''};

export default function(state = INITIAL_STATE, action) {
  console.log(action.payload);
  switch(action.type) {
    case LOGIN_YOUTH:
      return {...state, id: action.id, token: action.token};
    case LOGIN_MENTOR:
      return {...state, id: action.id, token: action.token};
    default: 
      return state;
  }
}
