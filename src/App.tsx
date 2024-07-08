import "./App.css";
import { Box, Flex } from "./components/elements";
import styled from "styled-components";
import ReactChatBanner from "./components/ReactChatBanner";
import CreateNewChat from "./components/CreateNewChat";
const ChatsSection = styled.div`
  width: 100%;
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
const ChattingSection = styled.div`
  width: 100%;

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
function App() {
  return (
    <Container>
      <ChatsSection>
        <Flex style={{ flexDirection: "column" }}>
          <ReactChatBanner />
          <Box>
            <nav>
              <ul>
                <li>
                  <a href={`/contacts/1`}>Your Name</a>
                </li>
                <li>
                  <a href={`/contacts/2`}>Your Friend</a>
                </li>
              </ul>
            </nav>
          </Box>
          <CreateNewChat />
        </Flex>
      </ChatsSection>
      <ChattingSection>
        <Box>Detail - Messages -</Box>
      </ChattingSection>
    </Container>
  );
}

export default App;
