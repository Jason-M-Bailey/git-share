import React, {
  useEffect,
  //   useState,
  //   useRef,
  setName,
  setRepo,
  setDescription,
  setRole,
} from "react";
import "./projectcard.css";
import { Card } from "react-bootstrap";

// import API from "../../utils/API";

import projectseed from "../../seed/projectData.json";

function Projectview(props) {
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [searchResults, setSearchResults] = useState([]);
  //   const inputRef = useRef("");

  useEffect(() => {
    fetch({ projectseed })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({ name, github_repo, description, role_needed }) => {
    setName(name);
    setRepo(github_repo);
    setDescription(description);
    setRole(role_needed);
  };

  //   const getSearchResults = (searchTerm) => {
  //     API.searchProjectName(searchTerm)
  //       .then((result) => {
  //         setSearchResults(result);
  //       })
  //       .catch((err) => console.log(err));
  //   };

  //   const handleInputSearch = (e) => {
  //     e.preventDefault();

  //     let str = inputRef.current.value;
  //     let replaced = str.split(" ").join("+");

  //     setSearchTerm(replaced);
  //     inputRef.current.value = "";
  //     getSearchResults(replaced);
  //   };

  return (
    <div class="ui link cards">
      {projectseed.map((project) => {
        return (
          <div classname="card">
            <Card>
              <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Header>{props.repo}</Card.Header>
                <Card.Meta>
                  <span className="date"></span>
                </Card.Meta>
                <Card.Description>{props.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>{props.role_needed} : Needed</Card.Content>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Projectview;
