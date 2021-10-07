const router = require("express").Router();
const projectRoutes = require("./projects");
const userRoutes = require("./users");

// Project Routes
router.use("/projects", projectRoutes);

router.use("/users", userRoutes);

// Account Route
// router.use("/account", accountRoutes);

module.exports = router;
