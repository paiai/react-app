import React, { Component } from "react";
import "./note-raw.scss";

class NoteRaw extends Component {
  static defaultProps = {
    subject: "노트 생성",
    title: "",
    contents: "",
    id: "",
    close: () => console.log("no action - close()")
  };

  state = {
    title: this.props.title,
    contents: this.props.contents
  };

  handleChangeTitle = e => {
    this.setState({ title: e.target.value });
  };
  handleChangeContents = e => {
    this.setState({ contents: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.action({
      id: this.props.id,
      title: this.state.title,
      contents: this.state.contents,
      date: new Date()
    });
    this.props.close();
  };

  render() {
    return (
      <>
        <div id="note-what-for">
          <span>{this.props.subject}</span>
          <span onClick={this.props.close}>Close</span>
        </div>
        <div id="note-form">
          <input
            id="note-title"
            name="title"
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChangeTitle}
            className="radius"
          />
          <textarea
            id="note-text"
            name="text"
            placeholder="Contents"
            value={this.state.contents}
            onChange={this.handleChangeContents}
            className="radius"
          />
        </div>
        <div>
          <button onClick={this.handleSubmit}>작성하기</button>
        </div>
      </>
    );
  }
}

export default NoteRaw;
