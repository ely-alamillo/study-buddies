import axios from 'axios';

const register = (username, password) => {
  axios.defaults.withCredentials = true;
  axios.post('http://localhost:3030/user/registe', {username, password})
    .then((data) => {
      return {
        type: 'REGISTERED_USER',
        payload: data,
      }
    })
    .catch((err) => {
      return {
        type: REGISTER_ERROR,
        payload: err,
      }
    });
};


module.exports = {
 register,
};
