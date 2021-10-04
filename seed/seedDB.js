const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/git-share");

const userSeed = [
  {
    email: "joe@mail.com",
    password: "pass123",
    github_username: "jason-m-bailey",
  },
  {
    email: "eric@mail.com",
    password: "pass123",
    github_username: "evperkinsjr",
  },
  {
    email: "robert@mail.com",
    password: "pass123",
    github_username: "CrowdeRyan",
  },
];

const projects = [
  {
    title: "NBA Player Search",
    github_repo: "https://github.com/Jason-M-Bailey/nbaplayersearch",
    description:
      "An app to look up nba players, learn more about their stats and history. And most importantly, to know more than your friends so you can win those arguments about whether LeBron is better than Kobe.",
    priorities: [
      "CSS Design and Layout",
      "Homepage needs work",
      "Standardize gif sizes",
    ],
    github_username: "jason-m-bailey",
  },
  {
    title: "Movie Drink Matchmaker",
    github_repo: "https://github.com/evperkinsjr/movie-drink-matchmaker",
    description:
      "A movie night app that provides the user with a movie and drink recommendation based on their selections.",
    priorities: [
      "Put in a disclaimer to not drink and drive",
      "Provide a wider range of booze options",
      "Add a function to make party size pitchers",
    ],
    github_username: "evperkinsjr",
  },
  {
    title: "Employee Tracker",
    github_repo: "https://github.com/CrowdeRyan/Employee_Tracker",
    description:
      "A command line application to view, add, remove and update a company's employees. This application utilizes Node.js, Inquirer and MySQL, and is written with JavaScript.",
    priorities: [
      "Improve resolution of video",
      "Add more roles and layers to organization structure",
      "Move towards a web application",
    ],
    github_username: "CrowdeRyan",
  },
  {
    title: "Google Books Search",
    github_repo: "https://github.com/Jason-M-Bailey/google--books--search",
    description:
      "A new React-based Google Books Search app, using Node, Express and MongoDB and the Google Books API to search and save books to a list.",
    priorities: [
      "CSS Design and Layout",
      "Add user authentication",
      "Share your saved book list with others (for gift giving ideas, etc)",
    ],
    github_username: "jason-m-bailey",
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
  .then(() => db.Project.collection.insertMany(projects))
  .then((data) => {
    console.log(data.result.n + " records inserted");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
