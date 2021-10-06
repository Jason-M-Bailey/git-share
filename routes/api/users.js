const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
    .get(usersController.findAll)
    .post(usersController.create);

// Matches "/api/users/:id"
router
    .route("/:id")
    .get(usersController.findById);

// Register
router
    .route("/register")
    .post(usersController.findOne);

// Get THIS authenticated user
router
    .route("/user")
    .get(usersController.thisUser);

module.exports = function (passport) {
    // Login
    router
    .route("/login")
    .post(passport.authenticate("local", {
        failureRedirect: '/register',}), usersController.authenticate);
    return router;
} 