import React, { Component } from "react";
import ReactDOM from "react-dom"
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return ReactDOM.render(
      <div>
        <h1>Tips for breaking down a new concept</h1>
        <ul>
          <li>Many concepts can't be tackled all at once</li>
          <ul>
            <li>Work with the parts you can understand</li>
            <li>Take breaks to stay fresh</li>
          </ul>
          <li>Develop a plan to learn the parts you don't know</li>
          <ul>
            <li>Start with the parts that you know</li>
            <li>Build new concepts on top</li>
          </ul>
        </ul>
      </div>,
      document.getElementById("root")
    );
  }
}

export default App;
