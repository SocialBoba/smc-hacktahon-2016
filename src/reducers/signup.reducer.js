import { SIGNUP_YOUTH, SIGNUP_MENTOR } from '../actions/signup.action';

const INITIAL_STATE = {location: null, name: '', social_links: null, youth_id: null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SIGNUP_YOUTH:
      return {...state, location: action.payload.data.summary.location, name: action.payload.data.summary.name, social_links: action.payload.data.summary.social_links, youth_id: action.payload.data.summary.youth_id};
    case SIGNUP_MENTOR:
      return {...state, location: action.payload.data.summary.location, name: action.payload.data.summary.name, social_links: action.payload.data.summary.social_links, youth_id: action.payload.data.summary.youth_id};
    default: 
      return state;
  }
}
