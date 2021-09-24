const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/git-share");

const userSeed = [
  {
    name: "Joe",
    email: "joe@mail.com",
    password: "pass123",
    github: "jason-m-bailey",
  },
  {
    name: "Sally",
    email: "sally@gmail.com",
    password: "pass123",
    github: "SmithRBG",
  },
  {
    name: "Eric",
    email: "eric@mail.com",
    password: "pass123",
    github: "evperkinsjr",
  },
  {
    name: "Robert",
    email: "robert@mail.com",
    password: "pass123",
    github: "CrowdeRyan",
  },
];

const projectSeed = [
  {
    name: "NBA Player Search",
    github_repo: "https://github.com/Jason-M-Bailey/nbaplayersearch",
    description:
      "An app to look up nba players, learn more about their stats and history. And most importantly, to know more than your friends so you can win those arguments about whether LeBron is better than Kobe.",
    role_needed: "CSS",
  },
  {
    name: "Movie Drink Matchmaker",
    github_repo: "https://github.com/evperkinsjr/movie-drink-matchmaker",
    description:
      "A movie night app that provides the user with a movie and drink recommendation based on their selections.",
    role_needed: "HTML",
  },
  {
    name: "Employee Tracker",
    github_repo: "https://github.com/CrowdeRyan/Employee_Tracker",
    description:
      "A command line application to view, add, remove and update a company's employees. This application utilizes Node.js, Inquirer and MySQL, and is written with JavaScript.",
    role_needed: "ORM",
  },
  {
    name: "E-Commerce Backend",
    github_repo: "https://github.com/SmithRBG/E-Commerce_Back_End",
    description:
      "Command-line application serves as the back end of an e-commerce site.",
    role_needed: "JavaScript",
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Project.remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
