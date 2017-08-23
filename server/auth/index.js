const router = require('express').Router();
const {User} = require('../../database');
const steamAuth = require('./strategies/steam');
const userSerialization = require('./user');

module.exports = (passport, userModel) => {
  userSerialization(passport, userModel);
  steamAuth(passport, userModel);

  // For local auth
  router.post('/login', (req, res) => {
    // TODO - Implement with passport
  });
  
  // Steam OAuth
  router.get('/auth/steam', passport.authenticate('steam'));
  router.get('/auth/steam/callback', passport.authenticate('steam', {failureRedirect: '/login'}), (req, res) => {
    res.redirect('/');
  });
  
  
  // Destroys session for local auth or any OAuth
  router.get('/logout', (req, res) => {
    if (req.user) {
      req.logout();
      res.redirect('/hooray');
    } else {
      res.status(401).send('User not logged in');
    }
  });

  return router;
};