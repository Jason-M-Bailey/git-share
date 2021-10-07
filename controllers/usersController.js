const db = require("../models");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/user");

module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(400).json(err));
  },
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(400).json(err));
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(400).json(err));
  },
  findOne: function (req, res) {
    db.User.findOne({ email: req.body.email }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new User({
          email: req.body.email,
          password: hashedPassword,
        });
        await newUser.save();
        res.send("User Created");
      }
    });
  },
  authenticate: function (req, res, next) {
    /* passport.authenticate("local", (err, user, info) => {
            if (err) throw err;
            if (!user) {
                res.send("No user exists");
            } else {
                req.logIn(user, (err) => {
                    if (err) throw err;
                    res.send("Successfully Authenticated");
                    console.log(req.user);
                });
            }
        }) (req, res, next); */
    res.json({ success: true });
  },
  thisUser: function (req, res) {
    res.send(req.user);
  },
  logout: function (req, res) {
    // THIS DOESN'T ACTUALLY REDIRECT, WHY?
    res.redirect;
  },
};
