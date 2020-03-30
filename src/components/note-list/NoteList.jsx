import React, { Component } from "react";
import Note from "./note/Note";
import "./note-list.scss";

class NoteList extends Component {
  static defaultProps = {
    subject: "노트 목록",
    notes: [],
    search: ""
  };

  filteredList = notes => {
    return (notes = notes.filter(note => {
      return (
        note.contents.indexOf(this.props.search) > -1 ||
        note.title.indexOf(this.props.search) > -1
      );
    }));
  };

  render() {
    const { notes } = this.props;

    return (
      <div id="note-list-container">
        <div id="note-list">
          {this.filteredList(notes).map(note => {
            return (
              <Note
                key={note.id}
                note={note}
                editNote={this.props.editNote}
                deleteNote={this.props.deleteNote}
              ></Note>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NoteList;
