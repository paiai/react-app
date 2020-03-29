import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../modal/Modal";
import NoteRaw from "../../note-raw/NoteRaw";

const TitleSpan = styled.span`
  font-weight: bold;
`;

class Note extends Component {
  state = {
    showEditModal: false,
    showDeleteModal: false
  };

  handleEditModal = () => {
    this.setState({ showEditModal: !this.state.showEditModal });
  };
  handleDeleteModal() {
    this.setState({ showDeleteModal: !this.state.showDeleteModal });
  }
  render() {
    const { note } = this.props;

    return (
      <div>
        <div id="note">
          <div id="note-menu">
            <TitleSpan>{note.title}</TitleSpan>
            <span>
              <span id="showEditModal" onClick={this.handleEditModal}>
                <FontAwesomeIcon icon={faEdit} />
              </span>
              <span
                id="showDeleteModal"
                onClick={() => this.handleDeleteModal()}
              >
                <FontAwesomeIcon icon={faTimesCircle} />
              </span>
            </span>
          </div>
          <div id="date">
            <span>
              {note.date.toISOString().slice(0, 10) +
                " " +
                note.date.toISOString().slice(11, 19)}
              {/* {this.props.edited && ' (edited)'} */}
            </span>
          </div>
          <div>{note.contents}</div>
        </div>

        {this.state.showEditModal && (
          <Modal>
            <NoteRaw
              id={note.id}
              action={this.props.editNote}
              close={this.handleEditModal}
              subject={"Edit Note"}
              title={note.title}
              contents={note.contents}
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default Note;
