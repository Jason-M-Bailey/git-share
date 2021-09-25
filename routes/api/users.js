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

module.exports = router;