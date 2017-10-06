const userReducers = (auth = {}, action) => {
  switch (action.type) {
    case 'REGISTERED_USER':
      let token = action.payload.data.token;
      return { token, authenticated: true };
    case 'REGISTER_ERROR':
      return { error: 'Username not available'};
    case 'SIGNIN_USER':
      token = action.payload.data.token;
      return { token, authenticated: true };
    case 'SIGNIN_ERROR':
      return {error: 'invalid credentials'};
    default:
      return auth;
  }
};

export default userReducers;
