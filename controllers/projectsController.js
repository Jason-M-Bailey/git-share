const db = require("../models");

module.exports = {
  find: function (req, res) {
    db.Project.find()
      .populate("project_owner", "name id")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(400).json(err));
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
  create: function (req, res) {
    db.Project.create(req.body)
      // .then(({ _id }) =>
      //   db.User.findOneAndUpdate(
      //     { _id: req.user_id },
      //     { $addToSet: { project: _id } }
      //   )
      // )
      // .then(
      //   res.status(201).send({
      //     message: { content: "Project Posted" },
      //   })
      // )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(400).json(err));
  },
  update: function (req, res) {
    db.Project.findOneAndUpdate({ id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(400).json(err));
  },
  remove: function (req, res) {
    db.Project.findById({ id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(400).json(err));
  },
};
