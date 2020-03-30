import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import NoteApp from "./components/NoteApp";
// function App() {
//   return <div className="App"></div>;
// }

const ContainerDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppDiv = styled.div`
  width: 90%;
  // height: 90%;
  border-radius: 0.25rem;
  padding: 1rem;
  box-shadow: 0 10px 6px -6px #777;
  background-color: #2a1b0a;
`;

class App extends Component {
  state = {};
  render() {
    return (
      <ContainerDiv>
        <AppDiv>
          <NoteApp />
        </AppDiv>
      </ContainerDiv>
    );
  }
}
export default App;
