const db = require("../models");

module.exports = {
    find: function (req, res) {
        db.Project
            .find(req.query)
            .populate("project_owner", "name id")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err));
    },
    // findOne: function (req, res) {
    //     db.Project
    //         .findOne({ id: (req.params.id) })
    //         .populate("project_owner", "name id")
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(400).json(err));
    findById: function (req, res) {
        db.Project.findById(req.params.id)
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Project
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err));
    }
};