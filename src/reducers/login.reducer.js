import { LOGIN_YOUTH, LOGIN_MENTOR } from '../actions/login.action';

const INITIAL_STATE = {id: null, token: ''};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case LOGIN_YOUTH:
      return {...state, id: action.payload.data.id, token: action.payload.data.token};
    case LOGIN_MENTOR:
      return {...state, id: action.payload.data.id, token: action.payload.data.token};
    default: 
      return state;
  }
}
