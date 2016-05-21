import Axios from 'axios';

export const CREATE_PROFILE = 'CREATE_PROFILE';

export function submitData() {
  const request = axios('/mentors');

  return {
    type: CREATE_PROFILE,
    payload: request
  };
}
