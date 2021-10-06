const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  github: { type: String },
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project", 
    require: "false"
  }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
