const router = require("express").Router();
const projectRoutes = require("./projects");

// Project Routes
router.use("/projects", projectRoutes);

module.exports = function (passport) {
    const userRoutes = require("./users")(passport);

    // User Routes
    router.use("/users", userRoutes);
    return router;
}