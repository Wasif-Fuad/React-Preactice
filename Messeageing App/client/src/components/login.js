import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
export default function Login({ onIdSubmit }) {
  const idRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  }

  function createNewId() {
    onIdSubmit(uuidv4());
  }
  return (
    <container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required></Form.Control>
        </Form.Group>
        <Button type="submit" className="mr-2">
          Login
        </Button>
        <Button onClick={createNewId} className="mr-2">
          Create A new Id
        </Button>
      </Form>
    </container>
  );
}
