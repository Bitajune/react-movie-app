import React from "react";

import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

import "./App.css";

function App() {
  return (
    <div>
      <h1>App</h1>
      <Navbar />
      <Home />
      <Login />
      <Signup />
    </div>
  );
}

export default App;
