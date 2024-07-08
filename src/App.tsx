import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { Box, Flex } from "./components/elements";
import ReactChatBanner from "./components/ReactChatBanner";
import CreateNewChat from "./components/CreateNewChat";
import { ITheme } from "./assets/theme/ITheme";
import Chats from "./components/Chat/Chats";
import dataFetched from "../chats.json";
import Chat from "./components/Chat/Chat";
import { IChat } from "./components/Chat/IChats";
type ChatsSectionProps = {
  isChatSelected: boolean;
  theme: ITheme;
};

const ChatsSection = styled.div<ChatsSectionProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.app.sections.chats.bg};

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

const ChattingSection = styled.div<{ isChatSelected: boolean }>`
  width: 100%;
  display: ${({ isChatSelected }) => (isChatSelected ? "block" : "none")};

  @media (max-width: 480px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 769px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  @media (max-width: 480px) {
  }
  @media (min-width: 481px) and (max-width: 768px) {
  }
  @media (min-width: 769px) {
  }
`;

const BackButton = styled.button`
  display: none;
  @media (max-width: 480px) {
    display: block;
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
`;

function App() {
  const [isChatSelected, setIsChatSelected] = useState(false);
  const chats: IChat[] = dataFetched.chats;
  const handleChatSelect = () => {
    setIsChatSelected(true);
  };

  const handleBackClick = () => {
    setIsChatSelected(false);
  };

  return (
    <Container>
      <ChatsSection isChatSelected={isChatSelected}>
        <Flex style={{ flexDirection: "column" }}>
          <ReactChatBanner />
          <Box>
            <Chats>
              {chats.map((chat: IChat) => (
                <Chat
                  key={chat.id}
                  chat={chat}
                  handleChatSelect={handleChatSelect}
                  lastMessage={chat.messages[chat.messages.length - 1]}
                />
              ))}
            </Chats>
          </Box>
          <CreateNewChat />
        </Flex>
      </ChatsSection>
      <ChattingSection isChatSelected={isChatSelected}>
        <BackButton onClick={handleBackClick}>← Back</BackButton>
        <Box>Detail - Messages -</Box>
      </ChattingSection>
    </Container>
  );
}

export default App;
