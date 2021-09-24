const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectid: { type: Number, required: true },
  projectname: { type: String, required: true },
  projectowner: [{ type: String, required: true }],
  projectlink: { type: String, trim: true },
  description: { type: String },
  creationdate: { type: Date, default: Date.now },
  deadline: { type: Date, required: true },
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
