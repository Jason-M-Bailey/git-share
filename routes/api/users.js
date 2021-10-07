const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("passport");
const { User } = require("../../models");

router.get("/currentuser", function (req, res) {
  console.log(req.user);

  res.json(req.user);
});

router.get("/logout", function (req, res) {
  req.logout();
  res.send(null);
});

var LocalStrategy = require("passport-local").Strategy;
passport.use(
  new LocalStrategy(function (username, password, done) {
    User.getUserByUsername(username, function (err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, { message: "Unknown User" });
      }
      User.comparePassword(password, user.password, function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          console.log(user);
          return done(null, user);
        } else {
          return done(null, false, { message: "Invalid password" });
        }
      });
    });
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.getUserById(id, function (err, user) {
    done(err, user);
  });
});

// Matches with "/api/users"
router.route("/").get(usersController.findAll).post(usersController.create);

// Matches "/api/users/:id"
router.route("/:id").get(usersController.findById);

// Register
// router.route("/register").post(usersController.findOne);
router.post("/register", function (req, res) {
  var newUser = new User(req.body);

  User.createUser(newUser, function (err, user) {
    if (err) throw err;
    res.send(user).end();
  });
});

// Endpoint to login
router.post("/login", passport.authenticate("local"), function (req, res) {
  console.log(req.user);
  res.send(req.user);
});

// Endpoint to get current user

// Endpoint to logout

module.exports = router;
