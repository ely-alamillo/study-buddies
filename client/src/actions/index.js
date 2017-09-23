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

export const addGroup = (group, token) => {
  axios.default.withCredentials = true;
  return (dispatch) => {
    axios.defaults.headers.common['x-access-token'] = token;
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

export const getSingleGroup = (id, token) => {
  axios.default.withCredentials = true;
  return (dispatch) => {
    axios.defaults.headers.common['x-access-token'] = token;
    axios.get(`http://localhost:3030/group/${id}`)
      .then((data) => {
        dispatch({
          type: 'SINGLE_GROUP',
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'SINGLE_GROUP_ERROR',
          payload: err,
        });
      });
  };
};

export const myGroups = (token) => {
  axios.default.withCredentials = true;
  return (dispatch) => {
    axios.defaults.headers.common['x-access-token'] = token;
    axios.get('http://localhost:3030/group/mygroups')
      .then((data) => {
        dispatch({
          type: 'USER_GROUPS',
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'USER_GROUPS_ERROR',
          payload: err,
        });
      });
  };
};

export const deleteGroup = (token, id) => {
  axios.default.withCredentials = true;
  return (dispatch) => {
    axios.get(`http://localhost:3030/group/remove/${id}`)
      .then((data) => {
        dispatch({
          type: 'DELETE_GROUP',
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'SELETE_GROUP_ERROR',
          payload: err,
        });
      });
  };
};
