import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyDeleteVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Are You sure?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Do You want to proceed and delete this place? Please note that it cant be undone thereafter. 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={props.onHide}>CANCEL</Button>
          <Button variant="danger"onClick={props.onHide}>DELETE</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
export default MyDeleteVerticallyCenteredModal;