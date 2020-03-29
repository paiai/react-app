import React, { Component } from "react";
import Note from "./note/Note";
class NoteList extends Component {
  static defaultProps = {
    subject: "노트 목록",
    notes: []
  };

  render() {
    const { notes } = this.props;

    return (
      <div>
        {notes.map(note => {
          return (
            <Note
              key={note.id}
              note={note}
              editNote={this.props.editNote}
            ></Note>
          );
        })}
      </div>
    );
  }
}

export default NoteList;
