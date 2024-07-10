//app.tsx
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
import { ITheme } from "./interfaces/ITheme";

type ChatsSectionProps = {
  isChatSelected: boolean;
  theme: ITheme;
};

const ChatsSection = styled.div<ChatsSectionProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.app.sections.chats.bg};
  overflow-y: auto;

  ${({ isChatSelected }) =>
    isChatSelected &&
    `
    @media (max-width: 767px) {
      display: none;
    }
  `}
  @media (min-width: 769px) {
    max-width: 40%;
  }
`;

const ChattingSection = styled.div<ChatsSectionProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.app.sections.chatting.bg};
  display: ${({ isChatSelected }) => (isChatSelected ? "block" : "none")};
  overflow-y: auto;

  @media (max-width: 767px) {
    max-width: 100%;
    display: ${({ isChatSelected }) => (isChatSelected ? "block" : "none")};
  }

  @media (min-width: 769px) {
    max-width: 60%;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  @media (min-width: 1367px) {
    max-width: 1367px;
    margin: 0 auto;
  }
`;

const BackgroundColor = styled.div`
  background-color: ${({ theme }) => theme.colors.app.sections.chats.bg};
  display: flex;
  height: 100vh;
  overflow-y: hidden;
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
    <BackgroundColor>
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
    </BackgroundColor>
  );
};

export default App;
