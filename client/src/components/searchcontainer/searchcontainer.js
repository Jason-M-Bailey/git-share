import React, { useState, useRef } from "react";
import "./searchcontainer.css";
import SearchCard from "../searchcard/searchcard";
import Searchbar from "../navbar/navbar";
import API from "../../utils/API";
import { projectseed } from "../seed/projectData.json";

function SearchContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef("");

  useEffect(() => {
    fetch({ projectseed })
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

  const getSearchResults = (searchTerm) => {
    API.searchProjectName(searchTerm)
      .then((result) => {
        setSearchResults(result);
      })
      .catch((err) => console.log(err));
  };

  const handleInputSearch = (e) => {
    e.preventDefault();

    let str = inputRef.current.value;
    let replaced = str.split(" ").join("+");

    setSearchTerm(replaced);
    inputRef.current.value = "";
    getSearchResults(replaced);
  };

  return (
    <div>
      <div className="container is-widescreen">
        <div className="notification">
          <Searchbar
            inputRef={inputRef}
            value={searchTerm}
            handleInputSearch={handleInputSearch}
          />
          <h1 className="resultsSearch">Results:</h1>
          {searchResults.map((Project) => (
            <SearchCard
              key={Project.id}
              id={Project.id}
              name={Project.name}
              github_repo={Project.github_repo}
              description={Project.description}
              role_needed={Project.role_needed}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchContainer;
