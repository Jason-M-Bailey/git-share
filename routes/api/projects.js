const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/projects"
router.route("/")
    .get(projectsController.findAll)
    .post(projectsController.create);

// Matches with "/api/projects/:1"
router
    .route("/:id")
    .get(projectsController.findById);

module.exports = router;