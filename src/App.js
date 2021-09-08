import Homepage from "./Pages/Homepage/Homepage";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Hats = () => (
  <div>
    <h1> thid is the hat page </h1>
  </div>
);

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/hats">
            <Hats />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
