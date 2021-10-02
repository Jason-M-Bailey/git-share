import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// need to update API
import API from "../../utils/API";

function ProjectId() {
  const [project, setProject] = useState({});
  console.log("set Project ");
  const { id } = useParams();
  useEffect(() => {
    console.log("inside use effect ");
    API.getProject(id)
      .then((res) => setProject(res.data))
      .catch((err) => console.error(err));
  });

  return (
    <div>
      <h1>Project by Id page</h1>

      <h1>{project.name}</h1>
      <h3>{project.github_repo}</h3>
    </div>
  );
}

export default ProjectId;
