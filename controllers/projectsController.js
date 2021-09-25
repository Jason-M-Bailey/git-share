const db = require("../models/oneModel");

module.exports = {
    findAll: function(req, res) {
        db.Project
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err));
    },
    findOne: function (req, res) {
        db.Project
            .findOne()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err));
    },
    create: function(req, res) {
        db.Project
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err));
    }
};