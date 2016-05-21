import { SIGNUP_YOUTH, SIGNUP_MENTOR } from '../actions/login.action';

const INITIAL_STATE = {id: null, token: ''};

export default function(state = INITIAL_STATE, action) {

  switch(action.type) {
    case SIGNUP_YOUTH:
      return {...state, id: action.payload, token: action.payload};
    case SIGNUP_MENTOR:
      return {...state, id: action.payload, token: action.payload};
    default: 
      return state;
  }
}
