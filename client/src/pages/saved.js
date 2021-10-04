import ProjectCard from "../components/ProjectCard/projectcard";
import API from "../utils/API";
import React, { useEffect, useState } from "react";

function Saved() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.getProjects().then((res) => {
      console.log(res.data);
      setProjects(res.data);
    });
  });

  return <ProjectCard projects={projects} />;
}

export default Saved;
