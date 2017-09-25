const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');

mongoose.Promise = global.Promise;
// use for local db
// mongoose.connect('mongodb://localhost/study-buddies', {useMongoClient: true});

// use for heroku db
mongoose.connect('mongodb://heroku_5v62q657:doo5r3odvn05hh8qr0gggd7rhh@ds149324.mlab.com:49324/heroku_5v62q657', {useMongoClient: true});

const corsOptions = {
  "origin": "http://localhost:3000",
  "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
  "preflightContinue": true,
  "optionsSuccessStatus": 204,
  "credentials": true // enable set cookie
};

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(morgan('dev'));

const { routes } = require('./api/routes/routes');
routes(app);

app.get('/api', (req, res) => {
  res.json({ message: 'hello ely i am working'});
});

app.listen(process.env.PORT || 3030, '0.0.0.0', () => {
  console.log('server running on port 3030');
});
