const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  project_owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  github_repo: { type: String, trim: true },
  description: { type: String },
  creationdate: { type: Date, default: Date.now },
  deadline: { type: Date, required: true },
  role_needed: { type: String },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
