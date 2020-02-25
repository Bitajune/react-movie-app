import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import MovieShow from "./components/MovieShow";
import MovieSearch from "./components/MovieSearch";
import PasswordForm from "./components/PasswordForget";
import Error from "./components/ErrorBoundary";

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
      isLoggedIn: currentUser ? true : false
    });
  };

  render() {
    const { isLoggedIn, currentUser } = this.state;
    return (
      <div>
        <Navbar
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          doSetCurrentUser={this.doSetCurrentUser}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/login"
            render={() => <Login doSetCurrentUser={this.doSetCurrentUser} />}
          />
          <Route
            exact
            path="/signup"
            render={() => <Signup doSetCurrentUser={this.doSetCurrentUser} />}
          />
          <Route exaxt path="/password-forget" component={PasswordForm} />
          <Route exact path="/movies/search" component={MovieSearch} />
          <Route exact path="/movies/:id" component={MovieShow} />
        </Switch>
      </div>
    );
  }
}

export default App;
