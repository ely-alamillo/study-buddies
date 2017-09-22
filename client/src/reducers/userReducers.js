const userReducers = (token = null, action) => {
  switch (action.type) {
    case 'REGISTERED_USER':
      token = action.payload.data.token;
      return { token };
    case 'REGISTER_ERROR':
      return { error: 'Username not available'};
    case 'SIGNIN_USER':
      token = action.payload.data.token
      return { token };
    case 'SIGNIN_ERROR':
      return {error: 'invalid credentials'};
    default:
      return token;
  }
};

export default userReducers;
