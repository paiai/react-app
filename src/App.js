import React, { Component } from "react";
import "./App.css";
import NoteApp from "./components/NoteApp";
// function App() {
//   return <div className="App"></div>;
// }

class App extends Component {
  state = {};
  render() {
    return <NoteApp></NoteApp>;
  }
}
export default App;

/*
$ npm install node-sass
$ npm install styled-components  

$ npm i --save @fortawesome/fontawesome-svg-core  @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

*/
