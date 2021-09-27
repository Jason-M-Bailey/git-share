import "./App.css";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import ProjectCard from "./components/ProjectCard/projectcard"


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          {/* add seed components */}
          {/* <Seed /> */}
          <Search />
          <ProjectCard />
          <Switch>
            <Route exact path="/" component={Search} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
