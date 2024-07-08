import "./App.css";
import { Box, Flex } from "./components/elements";
import styled from "styled-components";
// const ChatsSection = styled.div``;
// const ChattingSection = styled.div``;
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
      <Flex>
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
        <Box>Detail - Messages -</Box>
      </Flex>
    </Container>
  );
}

export default App;
