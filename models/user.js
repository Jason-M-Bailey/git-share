const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  github: { type: String },
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project"
  }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
