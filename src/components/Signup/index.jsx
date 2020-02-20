import React, { Component } from "react";

class Signup extends Component {
  state = {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: ""
  };
  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <form>
          <input placeholder="Full Name" name="username" />
          <input placeholder="Email" name="email" />
          <input placeholder="Password" type="password" name="passwordOne" />
          <input
            placeholder="Confirm Password"
            type="password"
            name="passwordTwo"
          />
        </form>
      </div>
    );
  }
}

export default Signup;
