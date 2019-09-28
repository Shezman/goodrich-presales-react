import React, { Component } from "react";

import { Modal } from "react-bootstrap";

export class ModalPopup extends Component {
  render() {
    const props = this.props;
    console.log('dsdsdsd', props.popopen)
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={props.className}
        show={props.popupOpen}
        onHide={props.popupHide}
      >
          
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        {this.props.content && <Modal.Body>{this.props.content}</Modal.Body>}
      </Modal>
    );
  }
}

export default ModalPopup;
