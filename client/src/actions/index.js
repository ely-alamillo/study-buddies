import axios from 'axios';

export const register = (username, password, history) => {
  axios.defaults.withCredentials = true;
  return (dispatch) => {
    axios.post('http://localhost:3030/user/register', {username, password})
      .then((data) => {
        dispatch({
          type: 'REGISTERED_USER',
          payload: data,
        })
        window.localStorage.setItem('token', data.data.token);
        history.push('/feed');
      })
      .catch((err) => {
        dispatch({
          type: 'REGISTER_ERROR',
        })
      });
  };
};

export const login = (username, password, history) => {
  axios.defaults.withCredentials = true;
  return (dispatch) => {
    axios.post('http://localhost:3030/user/login', {username, password})
      .then((data) => {
        dispatch({
          type: 'SIGNIN_USER',
          payload: data,
        })
        window.localStorage.setItem('token', data.data.token);
        history.push('/feed');
      })
      .catch((err) => {
        dispatch({
          type: 'SIGNIN_ERROR',
          payload: err,
        });
      });
  };
};

// ACTIONS USED TO SHOW THE GROUPS THAT ARE AVAILABLE

export const getGroups = (token) => {
  axios.defaults.withCredentials = true;
  return (dispatch) => {
    axios.defaults.headers.common['x-access-token'] = token;
    axios.get('http://localhost:3030/group/groups')
      .then((data) => {
        dispatch({
          type: 'SHOW_GROUPS',
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'SHOW_GROUPS_ERROR',
          payload: err,
        })
      });
  };
};

export const addGroup = (group) => {
  axios.default.withCredentials = true;
  return (dispatch) => {
    axios.post('http://localhost:3030/group/addgroup', group)
      .then((data) => {
        dispatch({
          type: 'ADD_GROUP',
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'ADD_GROUP_ERROR',
          payload: err,
        });
      });
  };
};

// export const getToken = () => {
//   token = window.localStorage.getItem('token');
//   if (!token || token === '') return
//   return token;
// };
