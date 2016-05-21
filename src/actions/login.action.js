import Axios from 'axios';

export const LOGIN_YOUTH = 'LOGIN_YOUTH';
export const LOGIN_MENTOR = 'LOGIN_MENTOR';

export function loginYouth(data) {
  const request = Axios.post('/youths/login', data);

  return {
    type: LOGIN_YOUTH,
    payload: request
  };
}

export function loginMentor(data) {
  const request = Axios.post('/mentors/login', data);

  return {
    type: LOGIN_MENTOR,
    payload: request
  };
}
