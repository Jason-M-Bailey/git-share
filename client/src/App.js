import "./App.css";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Projectview from "./components/ProjectCard/projectcard";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          {/* add seed components */}
          {/* <Seed /> */}
          <Projectview />
        </div>
      </Router>
    </div>
  );
}

export default App;
