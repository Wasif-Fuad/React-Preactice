import React from "react";
import { useContact } from "../context/ContactsProvider";
import { ListGroup } from "react-bootstrap";

export default function Contact() {
  const { contacts } = useContact();
  return (
    <>
      <ListGroup>
        {contacts.map((contact) => (
          <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
