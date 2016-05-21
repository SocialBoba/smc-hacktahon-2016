import { SIGNUP_YOUTH, SIGNUP_MENTOR } from '../actions/login.action';

const INITIAL_STATE = {location: null, name: '', social_links: null, youth_id: null};

export default function(state = INITIAL_STATE, action) {
  console.log(action.payload);
  switch(action.type) {
    case SIGNUP_YOUTH:
      return {...state, location: action.payload.data.location, name: action.payload.data.name, social_links: action.payload.data.social_links, youth_id: action.payload.data.youth_id};
    case SIGNUP_MENTOR:
      return {...state, location: action.payload.data.location, name: action.payload.data.name, social_links: action.payload.data.social_links, youth_id: action.payload.data.youth_id};
    default: 
      return state;
  }
}
