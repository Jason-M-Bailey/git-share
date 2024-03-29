const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/projects"
router.route("/")
  .get(projectsController.find)
  .post(projectsController.createProject);

router.route("/add_new_project")
  .post(projectsController.createProject);

// Matches with "/api/projects/:1"
router
  .route("/:id")
  .get(projectsController.findById)
  .put(projectsController.update)
  .delete(projectsController.remove);

// .get(projectsController.findOne);

module.exports = router;
