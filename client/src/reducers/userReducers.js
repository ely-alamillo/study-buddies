const userReducers = (token = null, action) => {
  switch (action.type) {
    case 'REGISTERED_USER':
    console.log('payload in userReducer: ', action);
      token = action.payload.data.token;
      return { token };
    case 'REGISTER_ERROR':
      console.log('REGISTER_ERROR:', action.payload);
      return { error: 'Username not available'};
    default:
      return token;
  }
};

export default userReducers;
