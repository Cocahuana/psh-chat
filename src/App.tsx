import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { Box, Flex } from "./components/elements";
import ReactChatBanner from "./components/ReactChatBanner";
import CreateNewChat from "./components/CreateNewChat";
import Chats from "./components/Chat/Chats";
import Chat from "./components/Chat/Chat";
import ChatDetail from "./components/Chat/ChatDetail";
import { useChats } from "./context/ChatContext";
import { ITheme } from "./assets/theme/ITheme";

type ChatsSectionProps = {
  isChatSelected: boolean;
  theme: ITheme;
};

const ChatsSection = styled.div<ChatsSectionProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.app.sections.chats.bg};
  overflow-y: auto;

  ${({ isChatSelected }) =>
    isChatSelected &&
    `
    @media (max-width: 480px) {
      display: none;
    }
  `}

  @media (max-width: 480px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
    max-width: 300px;
  }
  @media (min-width: 769px) {
    max-width: 480px;
  }
`;

const ChattingSection = styled.div<ChatsSectionProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.app.sections.chatting.bg};
  display: ${({ isChatSelected }) => (isChatSelected ? "block" : "none")};
  overflow-y: auto;

  @media (max-width: 480px) {
    width: 100%;
    display: ${({ isChatSelected }) => (isChatSelected ? "block" : "none")};
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const App: React.FC = () => {
  const [isChatSelected, setIsChatSelected] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const { chats, fetchNewChat } = useChats();

  const handleChatSelect = (chatId: string) => {
    setIsChatSelected(true);
    setSelectedChatId(chatId);
  };

  const handleBackClick = () => {
    setIsChatSelected(false);
    setSelectedChatId(null);
  };

  return (
    <Container>
      <ChatsSection isChatSelected={isChatSelected}>
        <Flex style={{ flexDirection: "column" }}>
          <ReactChatBanner />
          <Box>
            <Chats>
              {chats.map((chat) => (
                <Chat
                  key={chat.id}
                  chat={chat}
                  handleChatSelect={() => handleChatSelect(chat.id)}
                  lastMessage={chat.messages[chat.messages.length - 1]}
                  isChatSelected={selectedChatId === chat.id}
                />
              ))}
            </Chats>
          </Box>
          <CreateNewChat onCreate={fetchNewChat} />
        </Flex>
      </ChatsSection>

      <ChattingSection isChatSelected={isChatSelected}>
        <ChatDetail handleBackClick={handleBackClick} />
      </ChattingSection>
    </Container>
  );
};

export default App;
