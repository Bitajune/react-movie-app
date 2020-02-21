import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

import Firebase from "../Firebase/firebase";

import { PasswordForgetLink } from "../PasswordForget";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isAuth: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFormSubmit = async e => {
    const { email, password } = this.state;
    e.preventDefault();
    try {
      await Firebase.doSignInWithEmailAndPassword(email, password);
      this.props.doSetCurrentUser(email);
      this.setState({
        isAuth: true
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email, password, isAuth } = this.state;
    const isInvalid = password === "" || email === "";

    if (isAuth) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <button disabled={isInvalid} type="submit">
            Login
          </button>
        </form>
        <PasswordForgetLink />
      </div>
    );
  }
}

export default withRouter(Login);
