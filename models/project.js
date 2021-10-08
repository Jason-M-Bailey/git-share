const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  // id: { type: String, required: true },
  title: { type: String, required: true },
  // THURSDAY BREAKAGE project_owner was commented out
  // project_owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User"
  // },
  // ^^^ THURSDAY BREAKAGE

  github_username: { type: String, required: true },
  github_repo: { type: String, trim: true },
  description: { type: String },
  // creationdate: { type: Date, default: Date.now },
  // deadline: { type: Date, required: true },
  // role_needed: { type: String },
  // comments: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Comment"
  // }]
  priorities: [
    {
      type: String,
    },
  ],
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
