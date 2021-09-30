import React, { Component } from "react";

import MyBoard from "../components/Kanban/kanban";

import ProjectCreate from "../components/ProjectCreate/projectCreate";

class NewProject extends Component {
  state = {
    projectDetails: [],
  };

  render() {
    return (
      <div>
        <ProjectCreate />
        <MyBoard />
      </div>
    );
  }
}

export default NewProject;
