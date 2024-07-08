import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { Box, Flex } from "./components/elements";
import ReactChatBanner from "./components/ReactChatBanner";
import CreateNewChat from "./components/CreateNewChat";

const ChatsSection = styled.div<{ isChatSelected: boolean }>`
  width: 100%;
  ${({ isChatSelected }) =>
    isChatSelected &&
    `
    @media (max-width: 480px) {
      display: none;
    }
  `}

  @media (max-width: 480px) {
    background-color: red;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    background-color: green;
    max-width: 250px;
  }
  @media (min-width: 769px) {
    background-color: blue;
    max-width: 480px;
  }
`;

const ChattingSection = styled.div<{ isChatSelected: boolean }>`
  width: 100%;
  display: ${({ isChatSelected }) => (isChatSelected ? "block" : "none")};

  @media (max-width: 480px) {
    background-color: red;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    background-color: green;
    width: 100%;
  }
  @media (min-width: 769px) {
    background-color: blue;
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  @media (max-width: 480px) {
    background-color: red;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    background-color: green;
  }
  @media (min-width: 769px) {
    background-color: blue;
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
            <nav>
              <ul>
                <li>
                  <a href="#/contacts/1" onClick={handleChatSelect}>
                    Your Name
                  </a>
                </li>
                <li>
                  <p>my p</p>
                </li>
                <li>
                  <a href="#/contacts/2" onClick={handleChatSelect}>
                    Your Friend
                  </a>
                </li>
              </ul>
            </nav>
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
