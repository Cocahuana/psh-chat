import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IChat } from "./IChats";
import dataFetched from "../../../chats.json";

const ChatDetailContainer = styled.div`
  padding: 20px;
`;

function ChatDetail() {
  const { id } = useParams<{ id: string }>();
  const chat: IChat | undefined = dataFetched.chats.find(
    (chat) => chat.id === id
  );
  console.log("Chat: ", chat);

  if (!chat) {
    return <div>Chat not found</div>;
  }

  return (
    <ChatDetailContainer>
      <h1>{chat.name}</h1>
      <img src={chat.photo} alt={chat.name} />
      {chat.messages.map((message, index) => (
        <div key={index}>
          <p>
            <strong>{message.from}</strong>: {message.content}
          </p>
        </div>
      ))}
    </ChatDetailContainer>
  );
}

export default ChatDetail;
