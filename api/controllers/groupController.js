const { User, Group } = require('../models/UserModel');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

const SERVER_USER_ERROR = 422;

//  helper function used to send errors
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

const verifyUser = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) return sendUserError('the token was not provided', res);
  jwt.verify(token, 'secret', (err, decodedToken) => {
    if (err) {
      sendUserError('token not valid', res);
      return;
    }
    console.log(decodedToken);
    req.body.username = decodedToken.user.username;
    next();
  });
};

const getUser = (req, res) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  const decoded = jwt.decode(token);
  res.send(decoded);
}

const addGroup = (req, res) => {
  const { username } = req.body;
  const createdBy = username;
  const { groupName, time, subject, instructor } = req.body;
  if (!username) return sendUserError('invalid credentials', res);
  if (!groupName || !time, !subject || !instructor) return sendUserError('plese provide all information', res);
  User.findOne({ username }, (err, user) => {
    if (err) return sendUserError(err, res);
    if (!user) return sendUserError('invalid credentils');
    const newGroup = new Group({ groupName, time, subject, instructor, createdBy });
    newGroup.save((err) => {
      if (err) return sendUserError(err, res);
      user.studyGroups.push(newGroup);
      user.save((err) => {
        if (err) return sendUserError(err, res);
        res.json(user);
      });
    });
  });
};

module.exports = {
  verifyUser,
  addGroup,
  getUser,
};
