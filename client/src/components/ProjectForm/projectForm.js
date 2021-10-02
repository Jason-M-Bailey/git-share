import React from "react";
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
      </form>
    );
  }
}

export default ProjectForm;
