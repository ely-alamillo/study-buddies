const express = require('express');

const routes = (server) => {
  const userController = require('../controllers/userController');
  const groupController = require('../controllers/groupController');

  // USER ROUTES
  const userRoutes = express.Router();
  userRoutes.route('/')
    .get(userController.sayHi);
  userRoutes.route('/register')
    .post(userController.register);
  userRoutes.route('/login')
    .post(userController.login)

// TASK ROUTES
  const taskRoutes = express.Router();
  taskRoutes.route('/user')
    .get(groupController.getUser);
  taskRoutes.route('/addgroup')
    .post(groupController.verifyUser, groupController.addGroup);


  server.use('/user', userRoutes);
  server.use('/group', taskRoutes);
};

module.exports = { routes };
