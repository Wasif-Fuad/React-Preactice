import { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Contact from "./Contact";
import Conversation from "./Conversation";
import NewConversationModal from "../components/NewConversationModal";
import NewContactModal from "../components/NewContactModal";
const CONTACTSKEY = "contacts";
const CONVERSATIONKEY = "conversation";
export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONKEY);
  const [modalopen, setModalopen] = useState(false);
  const conversationopen = activeKey === CONVERSATIONKEY;

  function closeModal() {
    setModalopen(false);
  }
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column s">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONKEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTSKEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONKEY}>
            <Conversation />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTSKEY}>
            <Contact />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border small">
          Your ID : <span className="text-muted">{id}</span>
        </div>
      </Tab.Container>
      <Button className="rounded-0" onClick={() => setModalopen(true)}>
        New {conversationopen ? "Converation" : "Contacts"}
      </Button>

      <Modal show={modalopen} onHide={closeModal}>
        {conversationopen ? (
          <NewConversationModal closeModal={closeModal}></NewConversationModal>
        ) : (
          <NewContactModal closeModal={closeModal}></NewContactModal>
        )}
      </Modal>
    </div>
  );
}
