import React, { Fragment } from "react";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Layout
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";

// Components
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";

// Pages
import About from "./components/pages/About";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />

            <div className="container">
              <Alert />

              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Fragment>
                      <Search></Search>
                      <Users />
                    </Fragment>
                  )}
                ></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/user/:login" component={User}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
