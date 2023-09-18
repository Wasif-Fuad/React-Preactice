import { Modal, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import { useContact } from "../context/ContactsProvider";
export default function NewContactModal({ closeModal }) {
  const idref = useRef();
  const nameref = useRef();
  const { createContact } = useContact();
  const handleSubmit = (e) => {
    e.preventDefault();

    createContact(idref.current.value, nameref.current.value);
    closeModal();
  };

  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" ref={idref}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameref}></Form.Control>
          </Form.Group>
          <Button type="submit">Add</Button>
        </Form>
      </Modal.Body>
    </>
  );
}
