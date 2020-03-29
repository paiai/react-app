import React, { Component } from "react";
import "./modal.scss";

class Modal extends Component {
  state = {};
  render() {
    // console.log("props >> ", this.props);
    return (
      <div className="modal">
        <div className="modal-card">
          {this.props.children && this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
