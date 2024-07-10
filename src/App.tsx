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
  isChatSelected?: boolean;
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

const FirstPageLoadBg = styled.div<ChatsSectionProps>`
  display: ${({ isChatSelected }) => (isChatSelected ? "block" : "none")};

  background-color: ${({ theme }) => theme.colors.app.sections.chats.bg};
  flex: 1;
  background-color: ${({ theme }) => theme.colors.app.sections.chatting.bg};
  overflow-y: auto;

  @media (max-width: 767px) {
    max-width: 100%;
  }

  @media (min-width: 768px) {
    max-width: 60%;
    display: block;
  }
`;

const NoConversationsBgWrapper = styled(Flex)`
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (min-width: 767px) {
    padding: 1rem;
  }
  @media (min-width: 1023px) {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

const NoConversationsTextContainer = styled(Flex)<ChatsSectionProps>`
  background-color: ${({ theme }) => theme.colors.app.sections.chatting.header};
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h2,
  p {
    color: ${({ theme }) => theme.colors.app.sections.chatting.me.text};
  }
  h2 {
    font-weight: bold;
  }
  @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 1023px) {
    width: 60%;
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
  text-align: center;
  border-radius: 20px;
`;

const LogoBg = styled.div<ChatsSectionProps>`
  border-radius: 20px;
  @media (max-width: 767px) {
    width: 50%;
  }

  @media (min-width: 1023px) {
    width: 30%;
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
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

        {isChatSelected ? (
          <ChattingSection isChatSelected={isChatSelected}>
            <ChatDetail handleBackClick={handleBackClick} />
          </ChattingSection>
        ) : (
          <FirstPageLoadBg>
            <NoConversationsBgWrapper>
              <LogoBg>
                <img
                  width={"100%"}
                  height={"100%"}
                  src={"/PSh Logo_WHITE.svg"}
                  alt={"PSH Logo"}
                />
              </LogoBg>
              <NoConversationsTextContainer>
                <h2>Welcome to PSH React Chat!</h2>
                <p>
                  Choose a chat or create a new one to start a conversation!
                </p>
              </NoConversationsTextContainer>
            </NoConversationsBgWrapper>
          </FirstPageLoadBg>
        )}
      </Container>
    </BackgroundColor>
  );
};

export default App;
