import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import DealsList from "./components/deals-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/deals/"} className="nav-link">
                Deals
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/deals"]} component={DealsList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;