import "./App.css";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/search" component={Search} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
