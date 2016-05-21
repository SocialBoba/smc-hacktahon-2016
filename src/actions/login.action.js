import Axios from 'axios';

export const LOGIN_YOUTH = 'LOGIN_YOUTH';
export const LOGIN_MENTOR = 'LOGIN_MENTOR';

export function loginYouth() {
  const request = axios('/youths/login');

  return {
    type: LOGIN_YOUTH,
    payload: request
  };
}

export function loginMentor() {
  const request = axios('/mentors/login');

  return {
    type: LOGIN_MENTOR,
    payload: request
  };
}
