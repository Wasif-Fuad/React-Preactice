import React from "react";
import { useConversation } from "../context/ConversationProvider";
import { ListGroup } from "react-bootstrap";

export default function Contact() {
  const { conversations, selectConversationIndex } = useConversation();
  console.log("conversation", conversations);
  return (
    <>
      <ListGroup>
        {conversations.map((conversation, index) => (
          <ListGroup.Item
            key={index}
            action
            active={conversation.selected}
            onClick={() => selectConversationIndex(index)}
          >
            {conversation.recipients.map((r) => r.name).join(",")}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
