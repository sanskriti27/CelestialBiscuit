import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Subscribe = (props) => {
  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        onHide={props.onHide}
        className="modal"
      >
        <Modal.Header closeButton >
          <Modal.Title id="contained-modal-title-vcenter">
            Subscribe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>
    </>
  );
};

export default Subscribe;
