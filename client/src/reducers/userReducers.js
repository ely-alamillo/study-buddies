const userReducers = (token = null, action) => {
  switch (action.type) {
    case 'REGISTERED_USER':
      token = action.payload.token;
      return token;
  }
};

export default userReducers;
