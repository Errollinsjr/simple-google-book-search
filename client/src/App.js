import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
// import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import FourOhFourPage from "./pages/FourOhFour";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron />
        <Switch>
          <Route exact path="/">
            <SearchPage />
          </Route>

          {/* <Route exact path="/saved">
            <Saved />
          </Route> */}

          <Route>
            <FourOhFourPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
