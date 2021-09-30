import React from "react";

// components
import Navbar from "./Navbar/navbar";
import ProjectCard from "./ProjectCard/projectcard";


const Home = () => {
  return (
    <div>
      <Navbar />

      {/* //todo: why does this not render seed data? */}
      <ProjectCard />
    </div>
  );
};

export default Home;
