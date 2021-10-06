const router = require("express").Router();

module.exports = function (passport) {
    const apiRoutes = require("./api")(passport);

    // API Routes
    router.use("/api", apiRoutes);
    return router;
} 