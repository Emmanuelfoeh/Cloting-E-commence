import Homepage from "./Pages/Homepage/Homepage";
import Shop from "./Pages/Shoppage/Shop";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
