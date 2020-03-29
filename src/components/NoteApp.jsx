import React, { Component } from "react";
import NoteRaw from "./note-raw/NoteRaw";
import NoteList from "./note-list/NoteList";
import Modal from "./modal/Modal";

class NoteApp extends Component {
  state = {
    notes: [
      { id: "1", title: "test1", contents: "contents1", date: new Date() },
      { id: "2", title: "test2", contents: "contents2", date: new Date() },
      { id: "3", title: "test3", contents: "contents3", date: new Date() },
      { id: "4", title: "test4", contents: "contents4", date: new Date() },
      { id: "5", title: "test5", contents: "contents5", date: new Date() }
    ],
    modalToggle: false
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
    console.log("edit note", item);
    this.setState({
      notes: this.state.notes.map((note, idx) =>
        idx === item.id ? { ...note, ...item, edited: true } : note
      )
    });
  };
  render() {
    return (
      <div>
        <NoteList notes={this.state.notes} editNote={this.editNote}></NoteList>
        <button onClick={this.toggleModal}>NEW</button>

        {this.state.modalToggle && (
          <Modal>
            <NoteRaw
              action={this.createNote}
              close={this.toggleModal}
              subject={"Create Note"}
            ></NoteRaw>
          </Modal>
        )}
      </div>
    );
  }
}

export default NoteApp;
