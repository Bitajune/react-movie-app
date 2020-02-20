import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

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

  handleFormSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email
    };
    this.props.doSetCurrentUser(user);
    this.setState({
      isAuth: true
    });
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
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
