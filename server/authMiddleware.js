module.exports.isLoggedIn = (onErr) => {
  return ((req, res, next) => {
    if (req.isAuthenticated()) {
      res.redirect('/home');
      return next();
    } else {
      if (onErr === 'redirect') {
        res.redirect('/login');
      } else {
        res.status(401).send();
      }
    }
  });
};

module.exports.isNotLoggedIn = (onErr) => {
  return ((req, res, next) => {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      if (onErr === 'redirect') {
        res.redirect('/');
      } else {
        res.status(401).send();
      }
    }
  });
};