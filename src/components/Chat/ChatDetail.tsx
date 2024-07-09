import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { IChat, IMessage } from "../../interfaces/IChats";
import { useChats } from "../../context/ChatContext";
import { ITheme } from "../../interfaces/ITheme";
import { Flex } from "../elements";
import ProfileImage from "../ProfileImage";
import { FaAngleLeft } from "react-icons/fa";
import ChatKeyboard from "../ChatKeyboard";
import Message from "./Message";

type StyledTheme = {
  theme: ITheme;
};

type ChatDetailProps = {
  handleBackClick?: () => void;
};

const ChatDetailContainer = styled.div`
  height: 100%;
  padding-bottom: 5rem;
`;

const ChatName = styled.h3<StyledTheme>`
  color: ${({ theme }) => theme.colors.app.sections.chatting.chatName};
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

const Position = styled.p<StyledTheme>`
  color: ${({ theme }) => theme.colors.app.sections.chatting.sendBtn.bg};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
`;

const BackButton = styled.button`
  display: none;
  @media (max-width: 480px) {
    display: flex;
    border: none;
    color: ${({ theme }) => theme.colors.app.sections.chatting.sendBtn.text};
    cursor: pointer;
    border-radius: 50%;
    width: 5rem;
    height: 3rem;
    justify-content: center;
    align-items: center;
  }
`;

const ChatHeader = styled(Flex)<StyledTheme>`
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.app.sections.chatting.header};
  padding: 2rem;
  align-items: center;
`;

const ScrollableChatContainer = styled.div`
  height: calc(100% - 7rem); // Adjust height to account for header and footer
  overflow-y: auto;
`;

function ChatDetail(props: ChatDetailProps) {
  const { id } = useParams<{ id: string }>();
  const { handleBackClick } = props;
  const { chats, addMessageToChat } = useChats();
  const [scrollToBottom, setScrollToBottom] = useState(true); // State to trigger scroll to bottom
  const chatContainerRef = useRef<HTMLDivElement>(null); // Ref to the chat container

  const chat: IChat | undefined = chats.find((chat: IChat) => chat.id === id);

  const handleSendMessage = (messageContent: string) => {
    const formattedTime = new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const newMessage: IMessage = {
      from: "Me", // <-- it should be a uuid xD
      time: formattedTime,
      date: new Date().toLocaleDateString(),
      content: messageContent,
    };
    if (id) {
      addMessageToChat(id, newMessage);
      setScrollToBottom(true); // Set state to true to trigger scroll to bottom
    }
  };

  useEffect(() => {
    // Scroll to bottom when scrollToBottom state is true
    if (scrollToBottom && chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
      setScrollToBottom(false); // Reset state after scrolling
    }
  }, [chats, scrollToBottom]);

  if (!chat) {
    return <div>Be the first to start this conversation!</div>;
  }

  return (
    <ChatDetailContainer>
      <ChatHeader>
        <BackButton onClick={handleBackClick}>
          <FaAngleLeft size={"1.5rem"} />
        </BackButton>
        <ProfileImage
          width="5rem"
          height="5rem"
          src={chat.photo}
          alt={`${chat.name} Profile image`}
        />
        <Flex style={{ flexDirection: "column" }}>
          <ChatName>{chat.name}</ChatName>
          <Position>{chat.position}</Position>
        </Flex>
      </ChatHeader>
      <ScrollableChatContainer ref={chatContainerRef}>
        <Flex style={{ flexDirection: "column", gap: "1rem" }}>
          {chat.messages.map((message, index) => (
            <Message key={index} message={message} chat={chat} />
          ))}
        </Flex>
      </ScrollableChatContainer>
      <ChatKeyboard onSend={handleSendMessage} />
    </ChatDetailContainer>
  );
}

export default ChatDetail;
