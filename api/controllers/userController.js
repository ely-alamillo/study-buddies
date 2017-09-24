const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens


const { User } = require('../models/UserModel');

const SERVER_USER_ERROR = 422;

// helper function used to send errors
const sendUserError = (err, res) => {
  res.status(SERVER_USER_ERROR);
  if (typeof err === 'string') {
    res.json({ err });
    return
  } else if (err && err.message) {
    res.json({
      message: err.message,
      stack: err.stack,
    });
    return;
  }
  res.json(err);
};

const sayHi = (req, res) => {
  res.send('hello');
};
const register = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return sendUserError('please enter username and password', res);
  bcrypt.hash(password, 10, (err, hash) => {
    if(err) return sendUserError('hashing algorithm failed', res);
    const password = hash;
    const user = new User({ username, password });
    user.save((saveErr) => {
      if (saveErr) return sendUserError(saveErr, res);
      const token = jwt.sign({ user }, 'secret', { expiresIn: '1d' });
      res.json({ token });
    });
  });
};

const login = (req, res) => {
  const { username, password } = req.body;
  if(!username || !password) return sendUserError('please enter username and password', res);
  User.findOne({ username }, (err, user) => {
    if (err) return sendUserError(err, res)
    if (!user) return sendUserError('invalid credentials', res);
    bcrypt.compare(password, user.password, (err, isValid) => {
      if (err) return sendUserError(err, res);
      if (!isValid) return sendUserError('invalid credentials', res);
      const token = jwt.sign({ user }, 'secret', { expiresIn: '1h' });
      res.json({ token, user })
    });
  });
};


module.exports = {
  sayHi,
  register,
  login,
};
