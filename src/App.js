import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Employee from "./components/Employee/Employee";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import SingleEmployee from "./components/SIngleEmployee/SingleEmployee";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/navbar">
            <NavBar />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/employee">
            <Employee />
          </Route>
          <Route exact path="/employee/:id">
            <SingleEmployee />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
