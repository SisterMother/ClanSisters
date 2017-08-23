const express = require('express');
const bodyParser = require('body-parser'); 
const User = require('../database/models/user');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const Store = require('connect-session-sequelize')(session.Store);
const { db } = require('../database/connection');
const app = express();
const path = require('path');

// Create the mySQL store, passing in the database connection
const store = new Store({db});

if (process.env.MORGAN_LOGGING) {
  app.use(require('morgan')('dev'));
}

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

// Creates a new session
app.use(session({
  name: 'MustardTigers',
  secret: '5 dollar gold club special',
  resave: true,
  saveUninitialized: true,
  store
}));


app.use('/api', express.Router()
  .use('/users', require('./users'))
  .use('/clans', require('./clans'))
  .use('/forums', require('./forums'))
);

// Authentication middleware and passport strategy initialization
app.use('/', require('./auth')(passport, User.model));

// Serve static files
app.get('*/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/bundle.js'));
});
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
});

module.exports.app = app;