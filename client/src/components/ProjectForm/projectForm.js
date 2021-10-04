/* import React from "react";
import "./projectForm.css";
class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <form className="inform">
        <label className="title">
          Project Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <br />
        <br />
        <label>
          Notes/Comments:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <a className="nav-link" href="/planning">
          <button type="button" className="btn btn-info text-white">
            Plan Your Project
          </button>
        </a>
      </form>
    );
  }
}
export default ProjectForm; */

import React, { useState } from "react";
import API from "../../utils/API";
import "./projectForm.css";
import { v4 as uuidv4 } from "uuid";

function ProjectForm() {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [deadline, setDeadline] = useState([]);

  const titleUpdate = (event) => {
    setTitle(event.target.value);
  };

  const descriptionUpdate = (event) => {
    setDescription(event.target.value);
  };

  const deadlineUpdate = (event) => {
    setDeadline(event.target.value);
  };

  const saveProjectHandler = (event) => {
    event.preventDefault();

    API.saveProject({
      // id is hardcoded right now. generate with uuid?
      id: uuidv4(),
      title: title,
      description: description,
      deadline: deadline,
    })
      .then(() => alert("Project Added"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={saveProjectHandler} className="inform">
        <div>
          <label className="title">Project Title:</label>
          <input required onChange={titleUpdate}></input>
        </div>
        <div>
          <label className="title">Description:</label>
          <input required onChange={descriptionUpdate}></input>
        </div>
        <div>
          <label className="title">Deadline</label>
          <input required onChange={deadlineUpdate}></input>
        </div>
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}

export default ProjectForm;
