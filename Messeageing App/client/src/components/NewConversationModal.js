import { Modal, Form, Button } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import { useContact } from "../context/ContactsProvider";
import { useConversation } from "../context/ConversationProvider";
export default function NewConversationModal({ closeModal }) {
  const [selectedContactIds, setSelectedContacts] = useState([]);

  const { contacts } = useContact();
  const { createConversation } = useConversation();
  const handleSubmit = (e) => {
    e.preventDefault();
    createConversation(selectedContactIds);
    closeModal();
  };
  console.log(contacts);
  function handleCheckBoxChange(id) {
    setSelectedContacts((prevcont) => {
      if (selectedContactIds.includes(id))
        return prevcont.filter((prev) => prev.id !== id);
      else return [...prevcont, id];
    });
  }
  return (
    <>
      <Modal.Header closeButton>New Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => {
            return (
              <Form.Group controlId={contact.id} key={contact.id}>
                <Form.Check
                  type="checkbox"
                  value={selectedContactIds.includes(contact.id)}
                  label={contact.name}
                  onChange={() => handleCheckBoxChange(contact.id)}
                />
              </Form.Group>
            );
          })}

          <Button type="submit">Add</Button>
        </Form>
      </Modal.Body>
    </>
  );
}
