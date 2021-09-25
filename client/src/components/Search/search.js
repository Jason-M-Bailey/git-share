/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Form, Card } from "semantic-ui-react";
import { projects } from "../../../../seed/seedDB";
import { handleSearch, handleSubmit, error } from "../Navbar/navbar";

function Search() {
  const [name, setName] = useState("");
  const [repo, setRepo] = useState("");
  const [description, setDescription] = useState("");
  const [role_needed, setRole] = useState("");

  //   const [error, setError] = useState(null);

  useEffect(() => {
    fetch({ projects })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({ name, repo, description, role_needed }) => {
    setName(name);
    setRepo(repo);
    setDescription(description);
    setRole(role_needed);
  };

  // ***Moved to navbar***
  //   ============================
  // const handleSearch = () => {
  //   setUserInput(e.target.value);
  // };

  // const handleSubmit = () => {
  //   fetch(`https://api.github.com/search/repositories?q=${userInput}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.message) {
  //         setError(data.message);
  //       } else {
  //         setData(data);
  //         setError(null);
  //       }
  //     });
  // };

  return (
    <div>
      <div className="navbar">search</div>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Search User"
              name="github user"
              onChange={handleSearch}
            />

            <Form.Button content="Search" />
          </Form.Group>
        </form>
      </div>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div class="ui link cards">
          {projects.map((project) => {
            return (
              <div classname="card">
                <Card>
                  <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Header>{repo}</Card.Header>
                    <Card.Meta>
                      <span className="date"></span>
                    </Card.Meta>
                    <Card.Description>{description}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>{role_needed} : Needed</Card.Content>
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
