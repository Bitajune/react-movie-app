import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

class Signup extends Component {
  state = {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    isAuth: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      email: this.state.email
    };
    this.props.doSetCurrentUser(user);
    this.setState({
      isAuth: true
    });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, isAuth } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    if (isAuth) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            placeholder="Full Name"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            placeholder="Password"
            type="password"
            name="passwordOne"
            value={passwordOne}
            onChange={this.handleChange}
          />
          <input
            placeholder="Confirm Password"
            type="password"
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.handleChange}
          />
          <button disabled={isInvalid} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);
