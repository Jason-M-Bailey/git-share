const User = require("../models/user");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  console.log("does this work?")
  passport.use(
    new localStrategy((email, password, done) => {
      console.log("email:", email);
      User.findOne({ email: email }, (err, user) => {
        console.log(err, user);
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        email: user.email,
      };
      cb(err, userInformation);
    });
  });
};