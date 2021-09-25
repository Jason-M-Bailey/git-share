const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    github: { type: String },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    }]
});

const ProjectSchema = new Schema({
    id: { type: String, required: true, unique: true },
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

const CommentSchema = new Schema({
    id: { type: String, required: true, unique: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    },
    body: { type: String, required: true } 
});

const User = mongoose.model("User", UserSchema);
const Project = mongoose.model("Project", ProjectSchema);
const Comment = mongoose.model("Comment", CommentSchema);

module.exports = {User, Project, Comment};