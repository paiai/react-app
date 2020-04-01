import React, { Component } from "react";
import styled from "styled-components";
import NoteRaw from "./note-raw/NoteRaw";
import NoteList from "./note-list/NoteList";
import SearchBar from "./SearchBar";
import Modal from "./modal/Modal";

const SearchBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;

  div > span {
    font-size: 2rem;
    font-weight: bold;
    color: #ffcc99;
  }

  div > button {
    font-size: 1.1rem;
    float: left;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    outline: none;
    padding: 0.4rem;
    transition: 0.25s;
    color: #ffcc99;
    background-color: white;
    cursor: pointer;
    &:hover {
      background-color: #ffcc99;
      color: white;
    }
  }
`;

class NoteApp extends Component {
  state = {
    notes: [
      { id: "1", title: "test1", contents: "contents1", date: new Date() },
      { id: "2", title: "test2", contents: "contents2", date: new Date() },
      { id: "3", title: "test3", contents: "contents3", date: new Date() },
      { id: "4", title: "test4", contents: "contents4", date: new Date() },
      { id: "5", title: "test5", contents: "contents5", date: new Date() }
    ],
    modalToggle: false,
    search: ""
  };

  toggleModal = () => {
    this.setState({ modalToggle: !this.state.modalToggle });
  };
  createNote = item => {
    console.log("create note : ", item);
    this.setState({
      notes: [
        ...this.state.notes,
        { ...item, id: item.id === "" ? this.state.notes.length + 1 : item.id }
      ]
    });
  };
  editNote = item => {
    console.log("edit note", item.id);
    this.setState({
      notes: this.state.notes.map(note =>
        note.id === item.id ? { ...note, ...item, edited: true } : note
      )
    });
  };

  deleteNote = id => {
    console.log("delete note", id);
    this.setState({
      notes: this.state.notes.filter(note => (note.id === id ? false : true))
    });
  };
  changeSearchInput = e => {
    console.log(e.target.value);
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div>
        <SearchBarDiv>
          <div>
            <span>Memo Board</span>
          </div>
          <div>
            <button onClick={this.toggleModal}>NEW</button>
            <SearchBar
              search={this.state.search}
              onChange={this.changeSearchInput}
            />
          </div>
        </SearchBarDiv>

        <NoteList
          notes={this.state.notes}
          editNote={this.editNote}
          deleteNote={this.deleteNote}
          search={this.state.search}
        ></NoteList>

        {this.state.modalToggle && (
          <Modal>
            <NoteRaw
              action={this.createNote}
              close={this.toggleModal}
              msg={"생성"}
              subject={"Create Note"}
            ></NoteRaw>
          </Modal>
        )}
      </div>
    );
  }
}

export default NoteApp;
