module.exports = (passport, userModel) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    userModel.findById(id).then((user) => {
      if (user) {
        done(null, user.get());
      } else {
        done(null, null);
      }
    });
  });
};