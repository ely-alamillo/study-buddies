import axios from 'axios';

export const register = (username, password) => {
  axios.defaults.withCredentials = true;
  return (dispatch) => {
    axios.post('http://localhost:3030/user/register', {username, password})
      .then((data) => {
        return dispatch({
          type: 'REGISTERED_USER',
          payload: data,
        })
      })
      .catch((err) => {
        return dispatch({
          type: 'REGISTER_ERROR',
        })
      });
  };
};
