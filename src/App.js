import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

import "./App.css";

class App extends Component {
  state = {
    currentUser: {},
    isLoggedIn: false
  };

  doSetCurrentUser = currentUser => {
    console.log(currentUser);
    this.setState({
      currentUser,
      isLoggedIn: true
    });
  };

  render() {
    const { isLoggedIn, currentUser } = this.state;
    return (
      <div>
        <Navbar isLoggedIn={isLoggedIn} currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/signup"
            render={() => <Signup doSetCurrentUser={this.doSetCurrentUser} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
