import Axios from 'axios';

export const SIGNUP_YOUTH = 'SIGNUP_YOUTH';
export const SIGNUP_MENTOR = 'SIGNUP_MENTOR';

export function signupYouth(data) {
  const request = Axios.post('/youths', data);

  return {
    type: SIGNUP_YOUTH,
    payload: request
  };
}

export function signupMentor(data) {
  const request = Axios.post('/mentors', data);

  return {
    type: SIGNUP_MENTOR,
    payload: request
  };
}
